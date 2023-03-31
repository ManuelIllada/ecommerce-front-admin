import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useFetch } from "../../hooks/useFetch";

const TableProducts = () => {
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/products`);
  return (
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
  );
};

export default TableProducts;
