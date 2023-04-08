import React, { useState } from "react";
//import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryModif = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");

  const handleSendModify = async (event) => {
    /*  const notifyEditCagetgory = () =>
      toast.info("Ingresa Nuevo Nombre de Categoria", {
        duration: 2000,
        position: "bottom-right",
      }); */
    event.preventDefault();
    await fetch(`http://localhost:8000/categories/${location.state.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: location.state.id, name: inputValue }),
    }).then((response) => response.json());
    navigate(-1);
  };
  return (
    <>
      <div className="container">
        <h3>Ingrese Nuevo Nombre de Categoria</h3>

        <form onSubmit={handleSendModify}>
          <div className="mb-3 d-flex justify-content-around">
            <label htmlFor="id" className="form-label">
              ID:
            </label>
            <input
              type="text"
              className="form-control w-25"
              disabled
              value={location.state.id}
            />
          </div>
          <div className="mb-3 d-flex justify-content-around">
            <label htmlFor="id" className="form-label">
              Name:
            </label>
            <input
              className="form-control w-25"
              name="categoryName"
              type="text"
              value={location.state.name}
              disabled
            />
          </div>
          <div className="mb-3 d-flex justify-content-around">
            <label htmlFor="newName" className="form-label">
              New Name
            </label>
            <input
              type="text"
              className="form-control w-25"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default CategoryModif;
