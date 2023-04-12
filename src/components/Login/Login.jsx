import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { setUser } from "../../redux/UserSlice";

const Login = () => {
  const notifySuccess = (email) =>
    toast.success("Bienvenido: " + email, {
      duration: 2000,
      position: "bottom-right",
    });
  const notifyError = (error) =>
    toast.error(error, {
      duration: 2000,
      position: "bottom-right",
    });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/panel/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    ).then((res) => res.json());

    if (response.error) {
      return notifyError(response.error);
    } else {
      notifySuccess(response.email);
      dispatch(setUser(response));
    }
    navigate("/");
  };
  return (
    <section
      className="d-flex justify-content-center justify-content-lg-end align-items-center overflow-y-auto px-5 vh-100 "
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1611350080263-727f9d7490df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className=" d-lg-flex justify-content-around d-md-flex justify-content-around d-sm-flex justify-content-around  ">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
          <h1 className="my-5 display-3 fw-bold ls-tight px-3 text-white">
            Connen™ <br />
            <span>Admin Panel</span>
          </h1>

          <p
            className="px-3 text-white"
            style={{ color: "hsl(217, 10%, 50.8%)" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center col-12 col-sm-6 col-md-6 col-lg-4  mt-5  bg-light  bg-opacity-50  rounded shadow">
          <form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 "
            >
              <Form.Control
                type="email"
                name="email"
                className="form-control"
                placeholder="name@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                name="password"
                className="form-control form-control-lg"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FloatingLabel>
            <hr />
            <div className="text-center text-lg-start mt-4 mb-0 d-flex justify-content-center">
              <button type="submit" className="btn btn-dark">
                Login As Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
