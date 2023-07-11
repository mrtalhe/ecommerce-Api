const controller = require("../controller");
const _ = require("lodash");
const { ZarinGateway } = require("../../utils/payment");
const { default: mongoose } = require("mongoose");
const { PaymentState } = require("../../types/types.js");

module.exports = new (class extends controller {
  // payment request
  async paymentRequest(req, res, next) {
    const cart = await this.Cart.findOne({ userId: req.user._id });
    if (!cart)
      return this.response({
        code: 404,
        res,
        message: "No cart found",
      });

    const payment = {
      amount: cart.amount,
      description: "Product payment.",
      email: req.user.email,
    };

    if(cart.amount <= 10000){
      return this.response({
        res,
        message: "The minimum amount must be one thousand tomans",
        code: 400
      })
    }

    const { authority, code } = await ZarinGateway(payment);
    if (code !== 100 && typeof authority !== "string")
      return this.response({
        res,
        message: "Incomplete payment request!",
        code: 400
      })

    cart.payment = {
      authority: authority,
      code: code,
      state: PaymentState.Pending,
      date: Date.now() + 24 * 60 * 60 * 1000,
    };
    const info = await cart.save();

    this.response({
      code: 200,
      res,
      data: {
        info,
        redirect: `https://www.zarinpal.com/pg/StartPay/${cart.payment.authority}`,
      },
    });
  }

  async checkoutPayment(req, res,next) {

    const { Authority, Status } = req.body;

    const cart = await this.Cart.findOne({
      userId: req.user._id,
      "payment.authority": Authority,
      "payment.state": PaymentState.Pending,
      "payment.date": { $gte: Date.now() },
    });
    if (!cart)
      return this.response({
        res,
        code: 404,
        message: "Invalid Payment request, no cart found!"
      })

    if (Status === "OK") {

      cart.payment.state = PaymentState.Success;
      const { userId, products, payment, amount } = cart;
      const newOrder = new this.Order({ userId, products, payment, amount });
      const order = await newOrder.save();
      await cart.delete();
      res.json({ status: 200, data: order, message: "The payment is done." });
    } else if (Status === "NOK") {
      cart.payment.state = PaymentState.Cancel;
      res.json({ status: 200, message: "The payment is canceled." });
    }
  }
})();
