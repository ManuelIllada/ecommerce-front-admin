import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const TableUsers = () => {
  const notifySuccess = (message) =>
    toast.success(message, {
      duration: 2000,
      position: "bottom-right",
    });
  const notifyError = (error) =>
    toast.error(error, {
      duration: 2000,
      position: "bottom-right",
    });

  const notifyisDenied = ({ message }) =>
    toast(message, {
      duration: 2000,
      position: "bottom-right",
    });

  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/users`);
  const [usersList, setUsersList] = useState(null);

  useEffect(() => {
    setUsersList(data);
  }, [data]);

  const handleDelete = async (event, user) => {
    event.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/${user.id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => res.json());
    if (response.message) {
      notifySuccess(response.message);
      setUsersList(usersList.filter((u) => u.id !== user.id));
    } else {
      notifyError(response.error);
    }
  };

  return (
    <>
      <div className="row m-3">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h3>Usuarios</h3>
          <Link to="/users/create">
            <button className="btn btn-warning text-white">New</button>
          </Link>
        </div>
      </div>

      <table className="table text-white">
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
          {usersList &&
            usersList.map((user) => (
              <tr key={user.id} className="text-center">
                <td>{user.id}</td>
                <td>
                  {
                    <img
                      src={
                        user.avatar.includes("https://")
                          ? user.avatar
                          : `http://localhost:8000/img/${user.avatar}`
                      }
                      className="img-fluid rounded-circle"
                      alt="avatar"
                      style={{ width: "50px", height: "50px" }}
                    />
                  }
                </td>
                <td>
                  {user.firstname} - {user.lastname}
                </td>
                <td>{user.email}</td>
                <td className="d-flex justify-content-around">
                  <Link to="/users/edit" state={user}>
                    <AiFillEdit className="text-primary" />
                  </Link>
                  <Link>
                    <BsFillTrashFill
                      className="text-danger"
                      onClick={(event) =>
                        Swal.fire({
                          text:
                            "Esta seguro que desea eliminar esta categoria?",
                          icon: "error",
                          showDenyButton: true,
                          denyButtonText: "No",
                          confirmButtonText: "Si",
                        }).then((response) => {
                          if (response.isDenied) {
                            notifyisDenied({
                              message: "ℹ️ Accion negada por el usuario",
                              type: "",
                            });
                          } else {
                            handleDelete(event, user);
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

export default TableUsers;
