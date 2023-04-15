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
  const url = location.state?.from || "/login";

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
    fetch("https://auto-deal-server.onrender.com/api/addUser", {
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
      <h5 className="text-center">
        <span className="text-warning">Registration</span> Form
      </h5>

      <div className="row gx-5 my-4">
        <div className="col-lg-6">
          <div className="mx-5 d-flex justify-content-center">
            <div>
              <form onSubmit={handleRegistration}>
                <input
                  className="w-100 p-1 m-1 rounded"
                  type="text"
                  onBlur={handleGetName}
                  placeholder="name"
                />
                <input
                  className="w-100 p-1 m-1 rounded"
                  type="email"
                  onBlur={handleGetEmail}
                  placeholder="email"
                />
                <input
                  className="w-100 m-1 p-1 rounded"
                  type="password"
                  onBlur={handleGetPassword}
                  placeholder="password"
                />

                <input
                  className="bg-info text-white py-2 w-100 rounded m-1"
                  type="submit"
                  placeholder="create"
                />
              </form>
              <p className="text-center m-1">---------- Or ----------</p>
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
                Sign Up with Google
              </button>
              <p className="text-center">
                Already in? <Link to="/login">login here</Link>
              </p>
              <p className="text-warning text-center">
                Note: Please login after successful registration
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div>
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
