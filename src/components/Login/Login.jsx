import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } =
    useAuth();

  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";

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
    <div className=" overflow-hidden">
      <div className="row gx-5">
        <div className="col-lg-6">
          <div className="">
            <img
              className="img-fluid"
              src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="my-3 d-flex justify-content-center">
            <div>
              <p className="my-3">Login into your account</p>
              <form onSubmit={handleLoginWithEmailAndPassword}>
                <input
                  className="my-1"
                  type="email"
                  onBlur={handleGetEmail}
                  placeholder="Email"
                />
                <br />
                <input
                  className="my-1"
                  type="password"
                  onBlur={handleGetPassword}
                  placeholder="Password"
                />
                <br />
                <input
                  className="bg-info text-white px-3 py-1 w-100 rounded my-1"
                  type="submit"
                  value="Log In"
                />
              </form>
              <br />
              <p>----- Or Login With -----</p>

              <button
                className="bg-info px-3 py-1 w-100 rounded my-1"
                onClick={handleGoogleLogin}
              >
                <img
                  className="img-fluid float-start"
                  style={{ height: "40px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttcAHlykQMvm8VIF8StLe3wTztMVxFe4_eQ&usqp=CAU"
                  alt=""
                />
                Google Sign In
              </button>
              <p>
                {" "}
                New User? <Link to="/register">Please register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
