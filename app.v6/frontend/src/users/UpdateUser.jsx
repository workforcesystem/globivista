import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "../assets/forms.css";

function PasswordToggle({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-group">
      <input
        type={showPassword ? "text" : "password"}
        className="form-control"
        placeholder="Password"
        name="password"
        value={value}
        onChange={onChange}
        required
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={togglePasswordVisibility}
      >
        {/* Bootstrap icons for eye and eye-slash */}
        {showPassword ? (
          <i className="bi bi-eye-slash"></i>
        ) : (
          <i className="bi bi-eye"></i>
        )}
      </button>
    </div>
  );
}

function UpdateUser() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    organisation: ''
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/users/${id}`)
        .then(response => {
          setUser(response.data);
        })
        .catch(error => console.log(error));
    }
  }, [id]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setUser({
      ...user,
      password: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/update-user/${user._id}`, user)
      .then(result => {
        console.log(result);
        alert("User updated successfully!");
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="container mt-3">
      <div className="col-md-6">
        <div className="card border-0">
          <div className="card-body">
            <h5 className="card-title">Update User</h5>
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
                <label htmlFor="role" className="form-label small-font">Role</label>
                <input type="text" className="form-control small-font" id="role" name="role" value={user.role} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="organisation" className="form-label small-font">Organisation</label>
                <input type="text" className="form-control small-font" id="organisation" name="organisation" value={user.organisation} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label small-font">Password</label>
                {/* Render PasswordToggle component */}
                <PasswordToggle value={user.password} onChange={handlePasswordChange} />
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

export default UpdateUser;
