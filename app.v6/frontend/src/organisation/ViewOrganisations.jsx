import React, { useState, useEffect } from "react";
import axios from 'axios';

function ViewOrganisations({ organisations }) {
  const [filter, setFilter] = useState("all");

  const filteredOrganisations = organisations.filter(organisation => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return organisation.organisationStatus !== "disabled";
    } else if (filter === "disabled") {
      return organisation.organisationStatus === "disabled";
    }
    return false;
  });

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-9">
          <div className="card border-0" style={{ boxShadow: 'none', marginLeft: '10px' }}>
            <div className="card-body">
              <h5 className="card-title">Organisations List</h5>
              <table className="table" style={{ margin: '0 auto' }}>
                <thead>
                  <tr>
                    <th className='table-content-heading'>Action</th>
                    <th className='table-content-heading'>Organisation Name</th>
                    <th className='table-content-heading'>Organisation Email</th>
                    <th className='table-content-heading'>Organisation Status</th>
                    <th className='table-content-heading'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrganisations.map((organisation, index) => (
                    <tr key={index}>
                      <td><input type="checkbox" className="form-check-input" style={{ margin: '0' }} /></td>
                      <td className='table-content'>{organisation.organisationName}</td>
                      <td className='table-content'>{organisation.organisationEmail}</td>
                      <td>
                        {organisation.organisationStatus === 'disabled' ? (
                          <span className="badge bg-primary">{organisation.organisationStatus}</span>
                        ) : (
                          <span className="badge bg-success">active</span>
                        )}
                      </td>
                      <td>
                        <button className="btn btn-primary table-content" style={{ margin: '0' }}>
                          <span className="bi bi-pencil-fill"></span>
                        </button>
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
                  <option value="disabled">Disabled</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Organisations = () => {
  const [organisations, setOrganisations] = useState([]);

  useEffect(() => {
    // Fetch organisations from the backend API when the component mounts
    axios.get("http://localhost:3001/view-organisations")
      .then(response => {
        setOrganisations(response.data);
      })
      .catch(error => {
        console.error('Error fetching organisations:', error);
      });
  }, []);

  return <ViewOrganisations organisations={organisations} />;
}

export default Organisations;
