import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "../assets/forms.css";

function UpdateCustomerApplication() {
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
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/customers/${id}`)
        .then(response => {
          setApplication(response.data);
        })
        .catch(error => console.log(error));
    }
  }, [id]);

  const handleChange = (e) => {
    setApplication({
      ...application,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/update-customer/${application._id}`, application)
      .then(result => {
        console.log(result);
        alert("Customer application updated successfully!");
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="container mt-3">
      <div className="col-md-6">
        <div className="card border-0">
          <div className="card-body">
            <h5 className="card-title">Update Customer Application</h5>
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
                <label htmlFor="loanType" className="form-label small-font">Loan Type</label>
                <input type="text" className="form-control small-font" id="loanType" name="loanType" value={application.loanType} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="loanProductType" className="form-label small-font">Loan Product Type</label>
                <input type="text" className="form-control small-font" id="loanProductType" name="loanProductType" value={application.loanProductType} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="loanAmount" className="form-label small-font">Loan Amount</label>
                <input type="text" className="form-control small-font" id="loanAmount" name="loanAmount" value={application.loanAmount} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="pan" className="form-label small-font">PAN</label>
                <input type="text" className="form-control small-font" id="pan" name="pan" value={application.pan} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="status" className="form-label small-font">Status</label>
                <input type="text" className="form-control small-font" id="status" name="status" value={application.status} onChange={handleChange} required />
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
                <button type="submit" className="btn btn-primary small-font">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCustomerApplication;
