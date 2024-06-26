import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Main modules

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// Design modules



// import AddCustomer from "./Customer/AddCustomer";
// import ViewCustomer from "./Customer/ViewCustomer";

// import ViewUsers from "./Users/ViewUsers";
// import AddUser from "./Users/AddUser";

// import DeleteCustomer from "./Customer/DeleteCustomer";
// import UpdateCustomer from "./Customer/UpdateCustomer";

// import AddOrganisation from "./Organisation/AddOrganisation";
// import UpdateOrganisation from "./Organisation/UpdateOrganisation";
// import DeleteOrganisation from "./Organisation/DeleteOrganisation";
// import ViewOrganisation from "./Organisation/ViewOrganisation";

// import Login from "./Authentication/Login";



// App Modules
import Dashboard from "./components/Dashboard";
import AddUser from "./users/AddUser";
import ViewUsers from "./users/ViewUsers";
import UpdateUser from "./users/UpdateUser";
import AddOrganisation from "./organisation/AddOrganisation";
import ViewOrganisation from "./organisation/ViewOrganisations";
import AddCustomerApplication from "./customer/AddCustomerApplication";
import ViewCustomerApplications from "./customer/ViewCustomerApplications";
import UpdateCustomerApplication from "./customer/UpdateCustomerApplication";





function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <div className="main ">
          <Header />
          <Routes>

          <Route path="/" element={<Dashboard />} exact />{" "}
          <Route path="/view-users" element={<ViewUsers />} exact />
          <Route path="/add-user" element={<AddUser />} exact/>
          <Route path="/update-user/:id" element={<UpdateUser />} exact />
          <Route path="/add-customer" element={<AddCustomerApplication />} exact />
          <Route path="/view-customer" element={<ViewCustomerApplications />} exact />
          <Route path="/update-customer/:id" element={<UpdateCustomerApplication />} exact />
          <Route path="/add-organisation" element={<AddOrganisation />} exact/>
          <Route path="/view-organisations" element={<ViewOrganisation />} exact/>
          
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
// Make sure to use conditional statement in order to route from Login to Dashboard




























            {/* Use element prop instead of component */}
            {/* <Route path="/add-customer" element={<AddCustomer />} exact />
            <Route path="/view-customer" element={<ViewCustomer />} exact />
            <Route path="/delete-customer" element={<DeleteCustomer />} exact />
            <Route path="/add-user" element={<AddUser />} exact />
            <Route path="/view-users" element={<ViewUsers />} exact />
            <Route path="/update-customer/:id" element={<UpdateCustomer />} /> */}

            {/* <Route path="/add-organisation" element={<AddOrganisation />} exact/>
            <Route path="/update-organisation/:id" element={<UpdateOrganisation />} exact/>
            <Route path="/delete-organisation/:id" element={<DeleteOrganisation />} exact/>
            <Route path="/view-organisation" element={<ViewOrganisation />} exact/> */}

            {/* <Route path="/login" element={<Login />} exact/> */}


