const mongoose = require("mongoose");

const LoanStatusSchema = new mongoose.Schema({
    loanStatus: { 
        type: String,
        required: true,
        maxlength: 20
    },
    createdAt: { 
        type: Date,
        default: Date.now
    }
});

const LoanStatus = mongoose.model("loanStatus", LoanStatusSchema); // Change the model name to "LoanStatus"

module.exports = LoanStatus;
