import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link component

function ViewCustomerApplications({ applications }) {
  const [filter, setFilter] = useState("all");

  const filteredApplications = applications.filter(application => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return application.status !== "disable";
    } else if (filter === "disable") {
      return application.status === "disable";
    }
    return false;
  });

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-9">
          <div className="card border-0" style={{ boxShadow: 'none', marginLeft: '10px' }}>
            <div className="card-body">
              <h5 className="card-title">Customer Applications List</h5>
              <table className="table" style={{ margin: '0 auto' }}>
                <thead>
                  <tr>
                    <th className='table-content-heading'>Action</th>
                    <th className='table-content-heading'>First Name</th>
                    <th className='table-content-heading'>Last Name</th>
                    <th className='table-content-heading'>Email Address</th>
                    <th className='table-content-heading'>Loan Type</th>
                    <th className='table-content-heading'>Status</th>
                    <th className='table-content-heading'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((application, index) => (
                    <tr key={index}>
                      <td><input type="checkbox" className="form-check-input" style={{ margin: '0' }} /></td>
                      <td className='table-content'>{application.firstName}</td>
                      <td className='table-content'>{application.lastName}</td>
                      <td className='table-content'>{application.email}</td>
                      <td className='table-content'>{application.loanType}</td>
                      <td>
                        {application.status === 'disable' ? (
                          <span className="badge bg-primary">{application.status}</span>
                        ) : application.status === null ? (
                          <span className="badge bg-success">active</span>
                        ): (
                          <span className="badge bg-success">{application.status}</span>
                        )}
                      </td>
                      <td>
                        <Link to={`/update-customer/${application._id}`} className="btn btn-primary table-content" style={{ margin: '0' }}>
                          <span className="bi bi-pencil-fill"></span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0" style={{ boxShadow: 'none', marginLeft: '10px' }}>
            <div className="card-body">
              <div className="d-flex justify-content-end mb-3">
                <select
                  className="form-select"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="active">Active</option>
                  <option value="disable">Disabled</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CustomerApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch customer applications from the backend API when the component mounts
    axios.get("http://localhost:3001/view-customer")
      .then(response => {
        setApplications(response.data);
      })
      .catch(error => {
        console.error('Error fetching customer applications:', error);
      });
  }, []);

  return <ViewCustomerApplications applications={applications} />;
}

export default CustomerApplications;
