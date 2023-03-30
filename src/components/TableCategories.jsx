import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
                    cursor={"pointer"}
                  />
                  <BsFillTrashFill
                    className="text-danger"
                    onClick={handleShow}
                    cursor={"pointer"}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TableCategories;
