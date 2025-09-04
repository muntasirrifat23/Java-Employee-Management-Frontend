import React, { useState } from "react";
import { createEmployee, listEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [fieldErrors, setFieldErrors] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const navigate = useNavigate();

  const saveEmployee = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setToast({ show: false, message: "", type: "" });

    let errors = {};

    // Inline validation
    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    if (!email.trim()) errors.email = "Email is required";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    try {
      // Get all employees to check duplicate email
      const response = await listEmployee();
      const employees = response.data;

      const isDuplicate = employees.some(
        (emp) => emp.email.toLowerCase() === email.toLowerCase()
      );

      if (isDuplicate) {
        setToast({ show: true, message: "Email is already registered!", type: "danger" });
        return;
      }

      // Create employee
      await createEmployee({ firstName, lastName, email });

      // Show success toast
      setToast({ show: true, message: "Employee Added Successfully!", type: "success" });

      // Clear form
      setFirstName("");
      setLastName("");
      setEmail("");

      // Navigate after 1.5 seconds
      setTimeout(() => navigate("/employee"), 1500);
    } catch (err) {
      console.error(err);
      setToast({ show: true, message: "Something went wrong!", type: "danger" });
    }
  };

  return (
    <div className="container mt-4 mb-4 d-flex justify-content-center">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Add Employee</h3>

        {/* Toast */}
        {toast.show && (
          <div
            className={`toast align-items-center text-bg-${toast.type} border-0 show mb-3`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ position: "absolute", top: 20, right: 20, zIndex: 9999 }}
          >
            <div className="d-flex">
              <div className="toast-body">{toast.message}</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setToast({ ...toast, show: false })}
              ></button>
            </div>
          </div>
        )}

        <div className="card-body">
          <form onSubmit={saveEmployee}>
            {/* First Name */}
            <div className="form-group mb-3">
              <label className="form-label">First Name :</label>
              <input
                type="text"
                className={`form-control ${fieldErrors.firstName ? "is-invalid" : ""}`}
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {fieldErrors.firstName && (
                <div className="invalid-feedback">{fieldErrors.firstName}</div>
              )}
            </div>

            {/* Last Name */}
            <div className="form-group mb-3">
              <label className="form-label">Last Name :</label>
              <input
                type="text"
                className={`form-control ${fieldErrors.lastName ? "is-invalid" : ""}`}
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {fieldErrors.lastName && (
                <div className="invalid-feedback">{fieldErrors.lastName}</div>
              )}
            </div>

            {/* Email */}
            <div className="form-group mb-3">
              <label className="form-label">Email :</label>
              <input
                type="email"
                className={`form-control ${fieldErrors.email ? "is-invalid" : ""}`}
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {fieldErrors.email && <div className="invalid-feedback">{fieldErrors.email}</div>}
            </div>

            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
