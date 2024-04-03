// For LoanProductTypeModel
const mongoose = require("mongoose");

const LoanProductTypeSchema = new mongoose.Schema({
    loanProductType: { 
        type: String,
        required: true,
        maxlength: 20
    },
    createdAt: { 
        type: Date,
        default: Date.now
    }
});

const LoanProductTypeModel = mongoose.model("loanProductType", LoanProductTypeSchema);

module.exports = LoanProductTypeModel;
