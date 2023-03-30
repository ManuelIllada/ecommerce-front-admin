import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import Modals from "./Modals";

const TableCategories = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/categories`);
  return (
    <>
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
                  <AiFillEdit
                    className="text-primary"
                    onClick={handleShow}
                    data={cat}
                  />

                  <BsFillTrashFill className="text-danger" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modals show={show} handleClose={handleClose} data={data} />
    </>
  );
};

export default TableCategories;
