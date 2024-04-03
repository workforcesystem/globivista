import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DashboardContent() {
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        // Fetch customer data from the backend API when the component mounts
        axios.get("http://localhost:3001/view-customer")
            .then(response => {
                setCustomerData(response.data.slice(0, 3)); // Slice to get only first 3 records
            })
            .catch(error => {
                console.error('Error fetching customer data:', error);
            });
    }, []);

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card border-0" style={{ boxShadow: 'none', marginLeft: '10px' }}>
                            <div className="card-body">
                                <h5 style={{ fontSize: "0.8rem", fontWeight: "600" }}>Recent Applications</h5>
                                <table className="table" style={{ margin: '0 auto' }}>
                                    <thead>
                                        <tr>
                                            <th className='table-content-heading'>Customer Name</th>
                                            <th className='table-content-heading'>Application Number</th>
                                            <th className='table-content-heading'>Loan Amount</th>
                                            <th className='table-content-heading'>Status</th>
                                            <th className='table-content-heading'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Map over the customerData array to generate table rows dynamically */}
                                        {customerData.map((row, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div>
                                                        <p className='table-content text-muted'>{row.firstName} {row.lastName}</p>
                                                        {/* <p className='table-content'>{row.applicationNumber}</p> */}
                                                    </div>
                                                </td>
                                                <td className='table-content text-muted'>{row._id}</td>
                                                <td className='table-content text-muted'>{row.loanAmount}</td>
                                                <td>
                                                    {row.status === 'pending' ? (
                                                        <span className="badge bg-primary">{row.status}</span>
                                                    ) : (
                                                        <span className="badge bg-success">{row.status}</span>
                                                    )}
                                                </td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary dropdown-toggle" type="button" id={`dropdownMenuButton-${index}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            {/* Three dots icon */}
                                                            <span className="bi bi-menu"></span>
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${index}`}>
                                                            <Link className="dropdown-item" to={`/update-customer/${row._id}`}>Update Application</Link>
                                                            <Link className="dropdown-item" to={`/update-customer-status/${row._id}`}>Update Status</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* New card for "Organisations Approval Pending" */}
                    <div className="col-md-4">
                        <div className="card border-0" style={{ boxShadow: 'none', marginLeft: '0px' }}>
                            <div className="card-body">
                                <h5 style={{ fontSize: "0.8rem", fontWeight: "600" }}>Organisations Approval Pending</h5>
                                {/* Add content for Organisations Approval Pending card here */}
                                <p className="text-muted" style={{ fontSize: "0.76rem", color: "5, 135, 84" }}>No approvals pending</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardContent;
