let PaymentState;
(function (PaymentState) {
    PaymentState["Ready"] = "READY";
    PaymentState["Pending"] = "PEDNDING";
    PaymentState["Success"] = "SUCCESS";
    PaymentState["Cancel"] = "CANCEL";
})(PaymentState || (PaymentState = {}));

module.exports = {PaymentState}


