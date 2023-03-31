import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const TableCategories = () => {
  const notifySuccess = (message) =>
    toast.success(message, {
      duration: 3000,
      position: "bottom-right",
    });
  const notifyError = (error) =>
    toast.error(error, {
      duration: 3000,
      position: "bottom-right",
    });
  const notifyCancel = () =>
    toast("ℹ️ Accion cancelada por el usuario", {
      duration: 3000,
      position: "bottom-right",
    });
  const notifyisDenied = () =>
    toast("ℹ️ Accion negada por el usuario", {
      duration: 3000,
      position: "bottom-right",
    });
  const navigate = useNavigate();
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/categories`);

  const handleDelete = async (event, cat) => {
    event.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/categories/${cat.id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => res.json());
    response.message
      ? notifySuccess(response.message)
      : notifyError(response.error);
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
                      onClick={(event) =>
                        Swal.fire({
                          text: "Esta seguro que desea eliminar esta categoria?",
                          icon: "error",
                          showDenyButton: true,
                          showCancelButton: true,
                          denyButtonText: "No",
                          cancelButtonText: "Cancelar",
                          confirmButtonText: "Si",
                        }).then((response) => {
                          if (response.isDenied) {
                            notifyisDenied();
                          } else if (response.isConfirmed) {
                            handleDelete(event, cat);
                          } else {
                            notifyCancel();
                          }
                        })
                      }
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
