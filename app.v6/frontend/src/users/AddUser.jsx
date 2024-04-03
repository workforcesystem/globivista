import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../assets/forms.css";

function AddUser() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
        organisation: ''
    });
    const [roles, setRoles] = useState([]);
    const [organisations, setOrganisations] = useState([]);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        // Fetch roles
        axios.get("http://localhost:3001/view-roles/")
            .then(response => {
                setRoles(response.data);
            })
            .catch(error => console.log(error));

        // Fetch organizations
        axios.get("http://localhost:3001/view-organisations/")
            .then(response => {
                setOrganisations(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/add-user", user)
            .then(result => {
                console.log(result);
                // setShowToast(true); // Show toast upon successful submission
                alert("User created successfully!");
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="container mt-3">
            <div className="col-md-6">
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Add User</h5>
                        <form className="row g-3" onSubmit={handleSubmit}>

                        <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label small-font">First Name</label>
                                <input type="text" className="form-control small-font" id="firstName" name="firstName" value={user.firstName} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label small-font">Last Name</label>
                                <input type="text" className="form-control small-font" id="lastName" name="lastName" value={user.lastName} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label small-font">Email</label>
                                <input type="email" className="form-control small-font" id="email" name="email" value={user.email} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label small-font">Password</label>
                                <input type="password" className="form-control small-font" id="password" name="password" value={user.password} onChange={handleChange} required />
                            </div>
                            {/* Other input fields */}
                            <div className="col-md-6">
                                <label htmlFor="role" className="form-label small-font">Role</label>
                                <select className="form-control small-font" id="role" name="role" value={user.role} onChange={handleChange} required>
                                    <option value="">Select Role</option>
                                    {roles.map(role => (
                                        <option key={role._id} value={role.role}>{role.role}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="organisation" className="form-label small-font">Organisation</label>
                                <select className="form-control small-font" id="organisation" name="organisation" value={user.organisation} onChange={handleChange} required>
                                    <option value="">Select Organisation</option>
                                    {organisations.map(organisation => (
                                        <option key={organisation._id} value={organisation.organisationName}>{organisation.organisationName}</option>
                                    ))}
                                </select>
                            </div>
                            {/* Other input fields */}
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

export default AddUser;
