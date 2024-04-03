const mongoose = require("mongoose");

const OrganisationSchema = new mongoose.Schema({
    organisationName: { 
        type: String,
        required: true,
        maxlength: 40
    },
    organisationAddress: { 
        type: String,
        maxlength: 60
    },
    organisationEmail: { 
        type: String,
        maxlength: 50
    },
    organisationPassword: { 
        type: String,
        required: true,
        maxlength: 20
    },
    organisationNumber: { 
        type: String,
        maxlength: 30
    },
    organisationStatus: { 
        type: String,
        maxlength: 30
    },
    spocFirstName: { 
        type: String,
        maxlength: 40
    },
    spocLastName: { 
        type: String,
        maxlength: 40
    },
    spocRole: { 
        type: String,
        maxlength: 40
    },
    spocEmail: { 
        type: String,
        maxlength: 40
    },
    spocPhoneNumber: { 
        type: Number,
        maxlength: 20
    },
    createdAt: { 
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String // Should store logged in user name creating the record...
    }
});

const OrganisationModel = mongoose.model("organisation", OrganisationSchema);

module.exports = OrganisationModel;
