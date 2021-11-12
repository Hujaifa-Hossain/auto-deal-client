import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Register = () => {
  const {
    signInWithGoogle,
    createAccountWithGoogle,
    setUser,
    setIsLoading,
    updateName,
  } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/home";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGetName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleGetEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleGetPassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    createAccountWithGoogle(email, password)
      .then((res) => {
        hanldeUserInfoRegister(res.user.email);
        setIsLoading(true);
        updateName(name);
        setUser(res.user);
        history.push(url);
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

  const hanldeUserInfoRegister = (email) => {
    fetch("http://localhost:5000/addUserInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
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
    <div className="overflow-hidden">
      <div className="row gx-5">
        <div className="col-lg-6">
          <div className="my-3 d-flex justify-content-center">
            <div>
              <p className="my-3">Please Register first</p>
              <form onSubmit={handleRegistration}>
                <input
                  className="my-1"
                  type="text"
                  onBlur={handleGetName}
                  placeholder="name"
                />{" "}
                <br />
                <input
                  className="my-1"
                  type="email"
                  onBlur={handleGetEmail}
                  placeholder="email"
                />{" "}
                <br />
                <input
                  className="my-1"
                  type="password"
                  onBlur={handleGetPassword}
                  placeholder="password"
                />{" "}
                <br />
                <input
                  className="bg-info text-white px-3 py-1 w-100 rounded my-1"
                  type="submit"
                  placeholder="create"
                />
              </form>
              <p>----- Or Register With -----</p>

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

              {/* <button onClick={handleGoogleLogin}>Google Sign In</button> */}
              <p>
                {" "}
                Signed Up? <Link to="/login">Please Login</Link>
              </p>
              <br />
              <p className="text-info">Note: Please login after <br /> successful registration</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="">
            <img
              className="img-fluid"
              src="https://image.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
