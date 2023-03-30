import Menu from "./Menu";
import { Link, Outlet } from "react-router-dom";

function AdminPanel() {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="">
              <ul className="list-group ">
                <Link to={"/categories"}>
                  <li className="list-group-item">Categories</li>
                </Link>
                <Link to={"/products"}>
                  <li className="list-group-item">Products</li>
                </Link>
                <Link to={"/users"}>
                  <li className="list-group-item">Users</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
