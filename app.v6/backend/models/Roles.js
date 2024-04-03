const mongoose = require("mongoose");

const RolesSchema = new mongoose.Schema({
    role: { 
        type: String,
        required: true,
        maxlength: 20
    },
    createdAt: { 
        type: Date,
        default: Date.now
    }
});

const RolesModel = mongoose.model("roles", RolesSchema); // Change the model name to "Roles"

module.exports = RolesModel;