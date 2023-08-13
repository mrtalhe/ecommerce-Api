let PaymentState;
(function (PaymentState) {
    PaymentState["Ready"] = "READY";
    PaymentState["Pending"] = "PEDNDING";
    PaymentState["Success"] = "SUCCESS";
    PaymentState["Cancel"] = "CANCEL";
})(PaymentState || (PaymentState = {}));

let LocationType;
(function (LocationType) {
    LocationType["Country"] = "COUNTRY";
    LocationType["ProvState"] = "PROVESTATE";
    LocationType["City"] = "CITY";
})(LocationType || (LocationType = {}));

module.exports = {PaymentState,LocationType}


