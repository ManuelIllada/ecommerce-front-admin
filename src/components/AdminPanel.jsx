import Menu from "./Menu/Menu";
import { Link, Outlet } from "react-router-dom";
//import SideBar from "./SideBar/SideBar";

function AdminPanel() {
  return (
    <>
      <Menu />

      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="bg-primary  p-3 text-center w-100 ">
              <Link
                className="text-decoration-none text-white"
                to={"/categories"}
              >
                <div className="my-2 border border-1">Categories</div>
              </Link>
              <Link
                className="text-decoration-none text-white"
                to={"/products"}
              >
                <div className="my-2  border border-1">Products</div>
              </Link>
              <Link className="text-decoration-none text-white" to={"/users"}>
                <div className="my-2  border border-1">Users</div>
              </Link>
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
