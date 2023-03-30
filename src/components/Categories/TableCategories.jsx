import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const TableCategories = () => {
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/categories`);
  return (
    <>
      <div className="row m-3">
        <div className="col-12 d-flex justify-content-end">
          <Link to="/categories/create">
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
                <th scope="row">{cat.id}</th>
                <td>{cat.name}</td>
                <td className="d-flex justify-content-around">
                  <Link to="/categories/edit" state={cat}>
                    <AiFillEdit className="text-primary" data={cat} />
                  </Link>
                  <BsFillTrashFill className="text-danger" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TableCategories;
