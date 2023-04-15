import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } =
    useAuth();

  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleGetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginWithEmailAndPassword = (e) => {
    e.preventDefault();

    loginWithEmailAndPassword(email, password)
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
        history.push(url);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
        history.push(url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container overflow-hidden my-3">
      <h5 className="text-center"><span className="text-warning">Login</span> Form</h5>
      <div className="mx-5 d-flex justify-content-center">
        <div>
          <form onSubmit={handleLoginWithEmailAndPassword}>
            <input
              className="w-100 p-1 m-1 rounded"
              type="email"
              onBlur={handleGetEmail}
              placeholder="Email"
            />
            <input
              className="w-100 p-1 m-1 rounded"
              type="password"
              onBlur={handleGetPassword}
              placeholder="Password"
            />
            <input
              className="bg-info text-white py-2 w-100 rounded m-1"
              type="submit"
              value="Log In"
            />
          </form>
          <p className="text-center m-1">----- Or Login With -----</p>

          <button
            className="bg-dark text-white w-100 py-2 rounded m-1"
            onClick={handleGoogleLogin}
          >
            <img
              className="img-fluid float-start p-1"
              style={{ height: "40px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttcAHlykQMvm8VIF8StLe3wTztMVxFe4_eQ&usqp=CAU"
              alt=""
            />
            Google Sign In
          </button>
          <p className="text-center">
            Newbie? <Link to="/register">register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
