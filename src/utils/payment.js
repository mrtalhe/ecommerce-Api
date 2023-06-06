const axios = require("axios")
const config = require("config");

async function ZarinGateway(payment){
    let params = {
        merchant_id: config.get('zarinPal.ZARIN_PAY_MERCHANT'),
        callback_url: config.get('zarinPal.PAYMENT_CALLBACK_URL'),
        amount: payment.amount,
        description: payment.description,
        email: payment.email
    };

    const response = await axios.post(config.get('zarinPal.ZARIN_PAY_ADDRESS'), params);

    return response.data.data
};

module.exports = {ZarinGateway}