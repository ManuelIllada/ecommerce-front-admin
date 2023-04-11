import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const ProductNew = () => {
  const notifySuccess = (message) =>
    toast.success(message, {
      duration: 2000,
      position: "bottom-right",
    });
  const notifyError = (error) =>
    toast.error(error, {
      duration: 3000,
      position: "bottom-right",
    });
  const navigate = useNavigate();
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/categories`);
  const [categoriesList, setCategoriesList] = useState(null);

  useEffect(() => {
    setCategoriesList(data);
  }, [data]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState([]);
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [featured, setFeatured] = useState("");
  const [category, setCategory] = useState("");

  const handleNewProduct = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("featured", featured);
    formData.append("category", category);
    for (let index = 0; index < media.length; index++) {
      formData.append("media", media[index]);
    }
    const response = await axios({
      url: "http://localhost:8000/products",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    response.data.message
      ? notifySuccess(response.data.message)
      : notifyError(response.data.error);

    navigate(-1);
  };
  return (
    <div className="container">
      <h3>Ingrese Datos para una nuevo Producto</h3>
      <form method="POST" onSubmit={handleNewProduct}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name={name}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            rows="3"
            name={description}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="Media" className="form-label">
            Media
          </label>
          <input
            type="file"
            name="media"
            className="form-control"
            onChange={(event) => {
              setMedia(event.target.files);
            }}
            multiple
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            value={price}
            name={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="number"
            className="form-control"
            min={1}
            value={stock}
            name={stock}
            onChange={(event) => setStock(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="featured">
            Featured
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="featured"
              value="true"
              id="featured"
              onChange={(event) => setFeatured(event.target.value)}
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
              onChange={(event) => setFeatured(event.target.value)}
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
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="none" selected>
              Open this select menu
            </option>
            {categoriesList &&
              categoriesList.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductNew;
