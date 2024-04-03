const mongoose = require("mongoose");

const customerApplicationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 40
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 40
    },
    email: {
        type: String,
        maxlength: 60
    },
    loanType: {
        type: String,
        maxlength: 40
    },
    loanProductType: {
        type: String,
        maxlength: 30
    },
    loanAmount: {
        type: Number
    },
    pan: {
        type: String,
        required: true,
        maxlength: 20
    },
    status: {
        type: String,
        maxlength: 30
    },
    cibilScore: {
        type: Number
    },
    organisationName: {
        type: String,
        maxlength: 255
    }
});

// Create a model for the customer_applications collection
const CustomerApplication = mongoose.model('CustomerApplication', customerApplicationSchema);

module.exports = CustomerApplication;
