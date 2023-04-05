import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
const ProductsModify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/categories`);
  const [categoriesList, setCategoriesList] = useState(null);
  useEffect(() => {
    setCategoriesList(data);
  }, [data]);

  const handleSendModify = () => {
    console.log("handleSendModify");
  };
  return (
    <>
      <div className="container">
        <h3>Ingrese Datos a Modifdicar de Products</h3>

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
              name="productName"
              type="text"
              value={location.state.name}
            />
          </div>
          <div className="mb-3 d-flex justify-content-around">
            <label htmlFor="id" className="form-label">
              Description:
            </label>
            <textarea
              class="form-control w-50"
              placeholder="Leave a description here"
              id="floatingTextarea"
              value={location.state.description}
            ></textarea>
          </div>
          <div className="mb-3 d-flex justify-content-around">
            <label htmlFor="Media" className="form-label">
              Media
            </label>
            <input type="file" className="form-control w-50" multiple />
          </div>
          <div className="mb-3 d-flex justify-content-around">
            <label htmlFor="id" className="form-label">
              Price:
            </label>
            <input
              className="form-control w-25"
              name="price"
              type="text"
              value={location.state.price}
            />
          </div>
          <div className="mb-3 d-flex justify-content-around">
            <label htmlFor="id" className="form-label">
              Stock:
            </label>
            <input
              className="form-control w-25"
              name="stock"
              type="number"
              value={location.state.stock}
            />
          </div>
          <div className="mb-3 d-flex justify-content-around">
            <label className="form-label" htmlFor="featured">
              Featured
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="featured"
                value="true"
              />
              <label className="form-check-label" htmlFor="featured">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="featured"
                value="false"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                No
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="Category">
              Category
            </label>
            <select className="form-select" aria-label="Default select example">
              <option value="none" selected>
                Open this select menu
              </option>
              {categoriesList &&
                categoriesList.map((category) => (
                  <option
                    value={category.id}
                    key={category.id}
                    defaultValue={location.state.categoryId}
                  >
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductsModify;
