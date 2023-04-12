import React from "react";
import "./Panel.css";
import { FaUserAstronaut, FaUserSecret } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { GiSkateboard } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../redux/UserSlice";

const Panel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(removeToken());
    navigate("/login");
  };
  return (
    <>
      <div className="d-flex" style={{ position: "fixed" }}>
        <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading text-center py-4  fs-4 fw-bold text-dark  text-uppercase border-bottom">
            <i className="me-2">
              <FaUserSecret />
            </i>
            Panel Admin
          </div>
          <div className="list-group list-group-flush my-3">
            <Link
              className="list-group-item list-group-item-action bg-transparent fw-bold"
              to={"/"}
            >
              <i className="me-2">
                <AiFillDashboard />
              </i>
              Dashboard
            </Link>
            <hr className="border-bottom  my-0 py-0" />
            <Link
              className="list-group-item list-group-item-action bg-transparent  fw-bold"
              to={"/categories"}
            >
              <i className="me-2">
                <MdCategory />
              </i>
              Categories
            </Link>
            <hr className="border-bottom  my-0 py-0" />
            <Link
              className="list-group-item list-group-item-action bg-transparent  fw-bold"
              to={"/products"}
            >
              <i className="me-2">
                <GiSkateboard />
              </i>
              Products
            </Link>
            <hr className="border-bottom  my-0 py-0" />
            <Link
              className="list-group-item list-group-item-action bg-transparent  fw-bold"
              to={"/users"}
            >
              <i className="me-2">
                <FaUserAstronaut />
              </i>
              Users
            </Link>
            <hr className="border-bottom  my-0 py-0" />
            <Link
              className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
              onClick={handleLogout}
            >
              <i className="me-2">
                <ImExit />
              </i>
              Logout
            </Link>
          </div>

          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle   fw-bold"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user me-2"></i>
                  <img
                    src={userStore.avatar}
                    className="img-fluid rounded-circle"
                    alt="avatar user"
                    style={{ width: "50px", height: "50px" }}
                  />
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="col" id="page-content-wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Panel;
