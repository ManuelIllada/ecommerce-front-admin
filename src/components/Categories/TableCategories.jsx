import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const TableCategories = () => {
  const navigate = useNavigate();
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/categories`);

  const handleDelete = async (event, cat) => {
    event.preventDefault();
    console.log("handleDelete");

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/categories/${cat.id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => res.json());
    console.log(response);

    navigate("/categories");
  };
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
                  <Link>
                    <BsFillTrashFill
                      className="text-danger"
                      onClick={(event) => handleDelete(event, cat)}
                    />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TableCategories;
