import React, { useState, useEffect } from "react";
import { createEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  const [fieldErrors, setFieldErrors] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const navigate = useNavigate();

  // ✅ Fetch employee if updating
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/api/employee/${id}`)
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  const saveEmployee = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setToast({ show: false, message: "", type: "" });

    let errors = {};
    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    if (!email.trim()) errors.email = "Email is required";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    try {
      if (id) {
        // ✅ Update employee
        await axios.put(`http://localhost:8080/api/employee/${id}`, {
          firstName,
          lastName,
          email,
        });
        setToast({ show: true, message: "Employee Updated!", type: "success" });
      } else {
        // ✅ Create new employee
        await createEmployee({ firstName, lastName, email });
        setToast({ show: true, message: "Employee Added!", type: "success" });
      }

      setTimeout(() => navigate("/employee"), 1500);
    } catch (err) {
      console.error(err);
      setToast({
        show: true,
        message: "Something went wrong!",
        type: "danger",
      });
    }
  };

  function pageTitle() {
    return (
      <h3 className="text-center mb-4">
        {id ? "Update Employee" : "Add Employee"}
      </h3>
    );
  }

  return (
    <div className="container mt-4 mb-4 d-flex justify-content-center">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        {pageTitle()}

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
            <div className="form-group mb-3">
              <label className="form-label">First Name :</label>
              <input
                type="text"
                className={`form-control ${
                  fieldErrors.firstName ? "is-invalid" : ""
                }`}
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {fieldErrors.firstName && (
                <div className="invalid-feedback">{fieldErrors.firstName}</div>
              )}
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Last Name :</label>
              <input
                type="text"
                className={`form-control ${
                  fieldErrors.lastName ? "is-invalid" : ""
                }`}
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {fieldErrors.lastName && (
                <div className="invalid-feedback">{fieldErrors.lastName}</div>
              )}
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Email :</label>
              <input
                type="email"
                className={`form-control ${
                  fieldErrors.email ? "is-invalid" : ""
                }`}
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {fieldErrors.email && (
                <div className="invalid-feedback">{fieldErrors.email}</div>
              )}
            </div>

            <button type="submit" className="btn btn-success w-100">
              {id ? "Update" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
