import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/AuthContest.jsx";
import { BASE_URL } from "../../helper.js";
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { error, dispatch2 } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch2({ type: "LOGIN_START" });

    const newRequest = axios.create({
      baseURL: `${BASE_URL}/api/`,
      withCredentials: true,
    });
    newRequest.post("/auth/login", credentials).then(res => {
      if (res.data.isAdmin) {
        dispatch2({ type: "LOGIN_SUCCESS", payload: res.data.detail });

        navigate("/");
      } else {
        dispatch2({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    }).catch(err => {
      console.log(err);
      dispatch2({ type: "LOGIN_FAILURE", payload: err.response.data });
    });

  }

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;