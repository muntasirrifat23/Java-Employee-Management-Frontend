import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-5">
      <div className="container">
        <div className="row">
          {/* About EMS */}
          <div className="col-md-4 mb-3">
            <h5>Employee Management System</h5>
            <p className="small">
              A complete solution to manage employees, attendance, and payroll efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-light">Home</a></li>
              <li><a href="/employees" className="text-decoration-none text-light">Employees</a></li>
              <li><a href="/departments" className="text-decoration-none text-light">Departments</a></li>
              <li><a href="/contact" className="text-decoration-none text-light">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p className="small mb-1">📍 Dhaka, Bangladesh</p>
            <p className="small mb-1">📞 +880 1234 567 890</p>
            <p className="small">✉️ support@ems.com</p>
          </div>
        </div>

        <hr className="border-secondary" />
        <div className="text-center small">
          © {new Date().getFullYear()} Employee Management System. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
