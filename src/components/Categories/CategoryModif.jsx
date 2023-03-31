import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const CategoryModif = () => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");

  const handleSendModify = async (event) => {
    event.preventDefault();
    console.log(location.state.id);
    const response = await fetch(
      `http://localhost:8000/categories/${location.state.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: location.state.id, name: inputValue }),
      }
    ).then((response) => response.json());
    console.log("Data: ", response);
    //navigate(-1);
  };
  return (
    <>
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
    </>
  );
};

export default CategoryModif;
