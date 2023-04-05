import React, { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const ProductNew = () => {
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/categories`);
  const [categoriesList, setCategoriesList] = useState(null);

  useEffect(() => {
    setCategoriesList(data);
  }, [data]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState([]);
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);
  const [featured, setFeatured] = useState(null);
  const [category, setCategory] = useState("");
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name={name}
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
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="Media" className="form-label">
            Media
          </label>
          <input
            type="file"
            className="form-control"
            value={media}
            onChange={(event) => setMedia(event.target.files)}
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
          <select className="form-select" aria-label="Default select example">
            <option value="none" selected>
              Open this select menu
            </option>
            {categoriesList &&
              categoriesList.map((category) => (
                <option
                  value={category.name}
                  key={category.id}
                  onChange={(event) => setCategory(event.target.value)}
                >
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
