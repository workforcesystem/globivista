const mongoose = require("mongoose");

const LoanTypeSchema = new mongoose.Schema({
    loanType: { 
        type: String,
        required: true,
        maxlength: 20
    },
    createdAt: { 
        type: Date,
        default: Date.now
    }
});

const LoanTypeModel = mongoose.model("loanType", LoanTypeSchema);

module.exports = LoanTypeModel;
