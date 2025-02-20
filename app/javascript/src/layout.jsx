// layout.js
import React from "react";

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="/">
          <span className="navbar-brand mb-0 h1 text-danger">Airbnb</span>
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="/trips">
                Trips
              </a>
            </li>
            <li>
              <a className="nav-link" href="/host">
                Host
              </a>
            </li>
            <li>
              <a className="nav-link" href="/myproperties">
                My properties
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {" "}
            <li>
              <a className="nav-link text-danger" href="/login">
                Log in
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {props.children}
      <footer className="p-3 bg-light">
        <div>
          <p className="mr-3 mb-0 text-secondary">Airbnb Clone</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
