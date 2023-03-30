import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useFetch } from "../hooks/useFetch";

const TableUsers = () => {
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/users`);
  return (
    <table className="table ">
      <thead>
        <tr className="text-center">
          <th scope="col">#</th>
          <th scope="col">Firstame</th>
          <th scope="col">Lastname</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Phone</th>
          <th scope="col">Avatar</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((user) => (
            <tr key={user.id} className="text-center">
              <th>{user.id}</th>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>
                <img src={user.avatar} className="img-fluid" alt="avatar" />
              </td>
              <td className="d-flex justify-content-around">
                <AiFillEdit className="text-primary" />
                <BsFillTrashFill className="text-danger" />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableUsers;
