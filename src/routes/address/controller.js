const controller = require("../controller");
const _ = require("lodash");

const { default: mongoose } = require("mongoose");

module.exports = new (class extends controller {
  // add address
  async addAddress(req, res) {
    const address = new this.AddressModel(
      Object.assign(Object.assign({}, req.body), { userId: req.user._id })
    );
    const data = await address.save();
    this.response({ res, code: 200, data, message: "Address added." });
  }

  // update address
  async updateAddress(req, res) {
    const _id = req.params.addressId;
    const address = await this.AddressModel.findOneAndUpdate(
      { _id, userId: req.user._id },
      { ...req.body },
      { new: true }
    );

    const data = await address.save();
    this.response({ res, code: 200, data, message: "Address updated." });
  }

  // delete address
  async deleteAddress(req, res) {
    const _id = req.params.addressId;
    const address = await this.AddressModel.findByIdAndDelete(_id);
    if (!address)
      return this.response({
        res,
        code: 404,
        message: `This address id: ${_id} not found!`,
      });
    this.response({
      res,
      code: 200,
      data: address,
      message: "Address deleted.",
    });
  }
  // get list addresses
  async list(req, res) {
    const addresses = await this.AddressModel.find({
      userId: req.user._id,
    }).select("address");
    if (!addresses.length)
      return this.response({ res, code: 404, message: "No addresses found!" });
    this.response({
      res,
      code: 200,
      data: addresses,
      message: "Address found.",
    });
  }

  // view an address
  async viewAddress(req, res) {
    const _id = req.params.addressId;

    const address = await this.AddressModel.findOne({
      _id,
      userId: req.user._id,
    });

    if (!address)
      return this.response({
        res,
        code: 404,
        message: `This address id: ${_id} not found!`,
      });

    this.response({ res, code: 200, data: address, message: "Address found." });
  }
})();
