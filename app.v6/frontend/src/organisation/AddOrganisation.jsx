import React, { useState } from "react";
import axios from 'axios';
import "../assets/forms.css";

function AddOrganisation() {
    const [organisation, setOrganisation] = useState({
        organisationName: '',
        organisationAddress: '',
        organisationEmail: '',
        organisationPassword: '',
        organisationNumber: '',
        organisationStatus: '',
        spocFirstName: '',
        spocLastName: '',
        spocRole: '',
        spocEmail: '',
        spocPhoneNumber: ''
    });

    const handleChange = (e) => {
        setOrganisation({
            ...organisation,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/add-organisation", organisation)
            .then(result => {
                console.log(result);
                alert("Organization created successfully!");
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="container mt-3">
            <div className="col-md-6">
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Add Organization</h5>
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-md-6">
                                <label htmlFor="organisationName" className="form-label small-font">Organization Name</label>
                                <input type="text" className="form-control small-font" id="organisationName" name="organisationName" value={organisation.organisationName} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="organisationAddress" className="form-label small-font">Organization Address</label>
                                <input type="text" className="form-control small-font" id="organisationAddress" name="organisationAddress" value={organisation.organisationAddress} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="organisationEmail" className="form-label small-font">Organization Email</label>
                                <input type="email" className="form-control small-font" id="organisationEmail" name="organisationEmail" value={organisation.organisationEmail} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="organisationPassword" className="form-label small-font">Password</label>
                                <input type="password" className="form-control small-font" id="organisationPassword" name="organisationPassword" value={organisation.organisationPassword} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="organisationNumber" className="form-label small-font">Organization Number</label>
                                <input type="text" className="form-control small-font" id="organisationNumber" name="organisationNumber" value={organisation.organisationNumber} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="organisationStatus" className="form-label small-font">Organization Status</label>
                                <input type="text" className="form-control small-font" id="organisationStatus" name="organisationStatus" value={organisation.organisationStatus} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="spocFirstName" className="form-label small-font">SPOC First Name</label>
                                <input type="text" className="form-control small-font" id="spocFirstName" name="spocFirstName" value={organisation.spocFirstName} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="spocLastName" className="form-label small-font">SPOC Last Name</label>
                                <input type="text" className="form-control small-font" id="spocLastName" name="spocLastName" value={organisation.spocLastName} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="spocRole" className="form-label small-font">SPOC Role</label>
                                <input type="text" className="form-control small-font" id="spocRole" name="spocRole" value={organisation.spocRole} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="spocEmail" className="form-label small-font">SPOC Email</label>
                                <input type="email" className="form-control small-font" id="spocEmail" name="spocEmail" value={organisation.spocEmail} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="spocPhoneNumber" className="form-label small-font">SPOC Phone Number</label>
                                <input type="text" className="form-control small-font" id="spocPhoneNumber" name="spocPhoneNumber" value={organisation.spocPhoneNumber} onChange={handleChange} />
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

export default AddOrganisation;
