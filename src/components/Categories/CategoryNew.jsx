import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CategoryModif = () => {
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
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleSendModify = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:8000/categories/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: inputValue }),
    }).then((response) => response.json());

    response.message
      ? notifySuccess(response.message)
      : notifyError(response.error);

    navigate(-1);
  };
  return (
    <div className="container">
      <h3>Ingrese nuevo nombre de Categoria</h3>
      <form onSubmit={handleSendModify}>
        <div className="mb-3">
          <input
            className="form-control w-25"
            name="categoryName"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CategoryModif;
