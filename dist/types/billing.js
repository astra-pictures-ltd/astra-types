export var CardStatus;
(function (CardStatus) {
    CardStatus["OTP"] = "otp";
    CardStatus["PIN"] = "pin";
    CardStatus["3D"] = "3d";
    CardStatus["ERROR"] = "error";
    CardStatus["SUCCESS"] = "success";
})(CardStatus || (CardStatus = {}));
export var CardBrand;
(function (CardBrand) {
    CardBrand["VISA"] = "visa";
    CardBrand["VERVE"] = "verve";
    CardBrand["MASTERCARD"] = "mastercard";
})(CardBrand || (CardBrand = {}));
export var TransactionType;
(function (TransactionType) {
    TransactionType["SUBSCRIPTION"] = "subscription";
    TransactionType["TICKET_PURCHASE"] = "ticket_purchase";
    TransactionType["INITIAL_CARD_CHARGE"] = "inital_card_charge";
})(TransactionType || (TransactionType = {}));
export var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["FAILED"] = "failed";
    TransactionStatus["PENDING"] = "pending";
    TransactionStatus["REFUNDED"] = "refunded";
    TransactionStatus["PROCESSING"] = "processing";
    TransactionStatus["SUCCESSFUL"] = "successful";
})(TransactionStatus || (TransactionStatus = {}));
export var PaymentProvider;
(function (PaymentProvider) {
    PaymentProvider["PAYSTACK"] = "paystack";
})(PaymentProvider || (PaymentProvider = {}));
