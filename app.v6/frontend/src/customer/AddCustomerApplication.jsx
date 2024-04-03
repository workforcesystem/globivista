import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../assets/forms.css";

function AddCustomerApplication() {
    const [application, setApplication] = useState({
        firstName: '',
        lastName: '',
        email: '',
        loanType: '',
        loanProductType: '',
        loanAmount: '',
        pan: '',
        status: '',
        cibilScore: '',
        organisationName: ''
    });
    const [loanTypes, setLoanTypes] = useState([]);
    const [loanProductTypes, setLoanProductTypes] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        fetchLoanTypes();
        fetchLoanProductTypes();
        fetchStatuses();
    }, []);

    const fetchLoanTypes = () => {
        axios.get("http://localhost:3001/view-loan-type/")
            .then(response => {
                setLoanTypes(response.data);
            })
            .catch(error => console.log(error));
    };

    const fetchLoanProductTypes = () => {
        axios.get("http://localhost:3001/view-loan-product-types/")
            .then(response => {
                setLoanProductTypes(response.data);
            })
            .catch(error => console.log(error));
    };

    const fetchStatuses = () => {
        axios.get("http://localhost:3001/view-loan-status/")
            .then(response => {
                setStatuses(response.data);
            })
            .catch(error => console.log(error));
    };

    const handleChange = (e) => {
        setApplication({
            ...application,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/add-customer", application)
            .then(result => {
                console.log(result);
                // setShowToast(true); // Show toast upon successful submission
                alert("Customer application created successfully!");
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="container mt-3">
            <div className="col-md-6">
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Add Customer Application</h5>
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label small-font">First Name</label>
                                <input type="text" className="form-control small-font" id="firstName" name="firstName" value={application.firstName} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label small-font">Last Name</label>
                                <input type="text" className="form-control small-font" id="lastName" name="lastName" value={application.lastName} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label small-font">Email</label>
                                <input type="email" className="form-control small-font" id="email" name="email" value={application.email} onChange={handleChange} required />
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="loanAmount" className="form-label small-font">Loan Amount</label>
                                <input type="text" className="form-control small-font" id="loanAmount" name="loanAmount" value={application.loanAmount} onChange={handleChange} required />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="loanType" className="form-label small-font">Loan Type</label>
                                <select className="form-select small-font" id="loanType" name="loanType" value={application.loanType} onChange={handleChange} required>
                                    <option defaultValue>Select Loan Type</option>
                                    {loanTypes.map(loanType => (
                                        <option key={loanType._id} value={loanType.loanType}>{loanType.loanType}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="loanProductType" className="form-label small-font">Loan Product Type</label>
                                <select className="form-select small-font" id="loanProductType" name="loanProductType" value={application.loanProductType} onChange={handleChange} required>
                                    <option defaultValue>Select Loan Product Type</option>
                                    {loanProductTypes.map(productType => (
                                        <option key={productType._id} value={productType.loanProductType}>{productType.loanProductType}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="status" className="form-label small-font">Status</label>
                                <select className="form-select small-font" id="status" name="status" value={application.status} onChange={handleChange} required>
                                    <option defaultValue>Select Status</option>
                                    {statuses.map(status => (
                                        <option key={status._id} value={status.loanStatus}>{status.loanStatus}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="pan" className="form-label small-font">PAN</label>
                                <input type="text" className="form-control small-font" id="pan" name="pan" value={application.pan} onChange={handleChange} required />
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="cibilScore" className="form-label small-font">CIBIL Score</label>
                                <input type="text" className="form-control small-font" id="cibilScore" name="cibilScore" value={application.cibilScore} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="organisationName" className="form-label small-font">Organisation Name</label>
                                <input type="text" className="form-control small-font" id="organisationName" name="organisationName" value={application.organisationName} onChange={handleChange} required />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary small-font">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCustomerApplication;