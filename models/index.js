//exporting an object containing all of our models

module.exports = {
    Gift: require("./request"),
    AutoGift: require("./autoGift"),
    User: require("./user"),
    giftSuggestion: require("./response"),
    RequiredGift: require("./requiredGift")
};