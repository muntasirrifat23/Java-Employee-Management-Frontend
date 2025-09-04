import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid margin-left-4">
          <a className="navbar-brand fs-4 text fw-semibold" href="#">
            Employee Management System
          </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex ms-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
