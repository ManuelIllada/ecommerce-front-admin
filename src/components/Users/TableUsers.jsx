import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const TableUsers = () => {
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/users`);
  return (
    <>
      <div className="row m-3">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <label htmlFor="title" className="shadown">
            Users
          </label>
          <Link to="/users/create">
            <button className="btn btn-warning text-white">Add User</button>
          </Link>
        </div>
      </div>
      <table className="table ">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => (
              <tr key={user.id} className="text-center">
                <td>{user.id}</td>
                <td>
                  <img
                    src={user.avatar}
                    className="img-fluid rounded-circle"
                    alt="avatar"
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>
                  {user.firstname} - {user.lastname}
                </td>
                <td>{user.email}</td>
                <td className="d-flex justify-content-around">
                  <AiFillEdit className="text-primary" />
                  <BsFillTrashFill className="text-danger" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TableUsers;
