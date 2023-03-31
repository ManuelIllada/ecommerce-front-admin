import React from "react";
import "./Panel.css";
import { FaUserAstronaut, FaUserSecret } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { GiSkateboard } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { CgMenuLeft } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
const Panel = () => {
  return (
    <>
      <div className="d-flex" id="wrapper">
        <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <i className="me-2">
              <FaUserSecret />
            </i>
            Panel Admin
          </div>
          <div className="list-group list-group-flush my-3">
            <Link
              className="list-group-item list-group-item-action bg-transparent second-text active"
              to={"/dashboard"}
            >
              <i className="me-2">
                <AiFillDashboard />
              </i>
              Dashboard
            </Link>
            <Link
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              to={"/categories"}
            >
              <i className="me-2">
                <MdCategory />
              </i>
              Categories
            </Link>
            <Link
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              to={"/products"}
            >
              <i className="me-2">
                <GiSkateboard />
              </i>
              Products
            </Link>
            <Link
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              to={"/users"}
            >
              <i className="me-2">
                <FaUserAstronaut />
              </i>
              Users
            </Link>
            <Link className="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
              <i className="me-2">
                <ImExit />
              </i>
              Logout
            </Link>
          </div>
        </div>

        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
              <i className="primary-text fs-4 me-3" id="menu-toggle">
                <CgMenuLeft />
              </i>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle second-text fw-bold"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user me-2"></i>John Doe
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" href="#">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Panel;
