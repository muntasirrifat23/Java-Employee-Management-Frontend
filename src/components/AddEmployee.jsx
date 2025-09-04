import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigator = useNavigate();

  function saveEmployee(e) {
    e.preventDefault();

    const employee = { firstName, lastName, email };
    console.log(employee);

    createEmployee(employee).then((response) => {
      console.log(response.data);
      navigator("/employee");
    });
  }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(employee);
  //     // Add API call here to save employee if needed
  //   };

  return (
    <div className="container mt-4 mb-4 d-flex justify-content-center">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Add Employee</h3>
        <div className="card-body">
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            {/* First Name */}
            <div className="form-group mb-3">
              <label className="form-label">First Name :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            {/* Last Name */}
            <div className="form-group mb-3">
              <label className="form-label">Last Name :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group mb-3">
              <label className="form-label">Email :</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter first name"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100"
              onClick={saveEmployee}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
