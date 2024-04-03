const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const UserModel = require("./models/Users");
const OrganisationModel = require("./models/Organisation");
const CustomerApplicationModel = require("./models/CustomerApplication");
const LoanProductTypeModel = require("./models/LoanProductType");
const LoanStatusModel = require("./models/LoanStatus");
const LoanTypeModel = require("./models/LoanType");
const RolesModel = require("./models/Roles");


const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Atlas connection string
const mongoURI = "mongodb+srv://testnet:ViruShru0722@cluster0.sixepeg.mongodb.net/globivista";

// Connect to MongoDB Atlas
mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.error("Error connecting to MongoDB Atlas:", err));















// POST API REQUEST FOR ADDING USER(S)
app.post('/add-user', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err)); // Set proper HTTP status code for error
});

// POST API REQUEST FOR UPDATING USER BASED ON _id
app.put('/update-user/:_id', (req, res) => {
    const userId = req.params._id; // Extract user _id from request parameters
    const userData = req.body; // Extract updated user data from request body

    UserModel.findByIdAndUpdate(userId, userData, { new: true, runValidators: true }) // Find user by _id and update with new data
        .then(updatedUser => {
            if (!updatedUser) { // If user with given _id is not found
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(updatedUser); // Respond with the updated user data
        })
        .catch(err => res.status(400).json(err)); // Set proper HTTP status code for error
});













// GET API REQUEST TO RETRIEVE ALL USERS
app.get('/view-users/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ message: "Users not found" }));
});

// GET API REQUEST TO GET A SELECTED USER
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    UserModel.findById(userId)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ message: "User not found" }));
});

// POST API REQUEST FOR ADDING ORGANIZATION
app.post('/add-organisation', (req, res) => {
    OrganisationModel.create(req.body)
        .then(organisation => res.json(organisation))
        .catch(err => res.status(400).json(err)); // Set proper HTTP status code for error
});

// GET API REQUEST TO RETRIEVE ALL ORGANISATIONS
app.get('/view-organisations/', (req, res) => {
    OrganisationModel.find({})
        .then(organisation => res.json(organisation))
        .catch(err => res.status(404).json({ message: "Organisation not found" }));
});















// POST API REQUEST FOR ADDING CUSTOMER APPLICATION
app.post('/add-customer', (req, res) => {
    CustomerApplicationModel.create(req.body)
        .then(application => res.json(application))
        .catch(err => res.status(400).json(err)); // Set proper HTTP status code for error
});

// GET API REQUEST TO RETRIEVE ALL CUSTOMER APPLICATIONS
app.get('/view-customer/', (req, res) => {
    CustomerApplicationModel.find({})
        .then(applications => res.json(applications))
        .catch(err => res.status(404).json({ message: "Customer applications not found" }));
});

// GET API REQUEST TO GET A SELECTED CUSTOMER APPLICATION
app.get('/customers/:id', (req, res) => {
    const applicationId = req.params.id;
    CustomerApplicationModel.findById(applicationId)
        .then(application => res.json(application))
        .catch(err => res.status(404).json({ message: "Customer application not found" }));
});

// POST API REQUEST FOR UPDATING CUSTOMER APPLICATION BASED ON _id
app.put('/update-customer/:_id', (req, res) => {
    const applicationId = req.params._id; // Extract application _id from request parameters
    const applicationData = req.body; // Extract updated application data from request body

    CustomerApplicationModel.findByIdAndUpdate(applicationId, applicationData, { new: true, runValidators: true }) // Find application by _id and update with new data
        .then(updatedApplication => {
            if (!updatedApplication) { // If application with given _id is not found
                return res.status(404).json({ message: 'Customer application not found' });
            }
            res.json(updatedApplication); // Respond with the updated application data
        })
        .catch(err => res.status(400).json(err)); // Set proper HTTP status code for error
});


















 // GET API REQUEST TO RETRIEVE ALL LOAN PRODUCT TYPES
app.get('/view-loan-product-types/', (req, res) => {
    LoanProductTypeModel.find({})
        .then(loanProductType => res.json(loanProductType))
        .catch(err => res.status(404).json({ message: "Loan product types not found" }));
});

// GET API REQUEST TO RETRIEVE ALL LOAN STATUSES
app.get('/view-loan-status/', (req, res) => {
    LoanStatusModel.find({})
        .then(loanStatus => res.json(loanStatus))
        .catch(err => res.status(404).json({ message: "Loan statuses not found" }));
});

// GET API REQUEST TO RETRIEVE ALL LOAN TYPES
app.get('/view-loan-type/', (req, res) => {
    LoanTypeModel.find({})
        .then(loanType => res.json(loanType))
        .catch(err => res.status(404).json({ message: "Loan types not found" }));
});

// GET API REQUEST TO RETRIEVE ALL ROLES
app.get('/view-roles/', (req, res) => {
    RolesModel.find({})
        .then(roles => res.json(roles))
        .catch(err => res.status(404).json({ message: "Roles not found" }));
});


// Find an available port dynamically
const server = app.listen(3001, () => {
    console.log(`Server is running on port`);
});
