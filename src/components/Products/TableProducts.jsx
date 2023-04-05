import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const TableProducts = () => {
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/products`);
  return (
    <>
      <div className="row m-3">
        <div className="col-12 d-flex justify-content-end">
          <Link to="/products/create">
            <button className="btn btn-warning text-white">New</button>
          </Link>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((cat) => (
              <tr key={cat.id} className="text-center">
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td className="d-flex justify-content-around align-items-center">
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

export default TableProducts;
