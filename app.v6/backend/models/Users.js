const { default: mongoose } = require("mongoose");

const newUserSchema = new mongoose.Schema({
    email: { 
        type: String,
        required: true,
        maxlength: 255
    },
    password: { 
        type: String,
        required: true
    },
    role: { 
        type: String,
        required: true
    },
    firstName: { 
        type: String,
        required: true
    },
    lastName: { 
        type: String,
        required: true
    },
    organisation: { 
        type: String,
        required: true
    },
    status: { 
        type: String,
        default: 'active'
    },
    phoneNumber: { 
        type: Number
    },
    createdAt: { 
        type: Date,
        default: Date.now // Set the default value to the current date and time
    },
    createdBy: {
        type: String // Should store the user logged in and creating the record...
    }
});

const UserModel = mongoose.model("users", newUserSchema);

// Export
module.exports = UserModel;