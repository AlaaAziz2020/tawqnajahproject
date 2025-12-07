import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; 
import logo from "../../assets/logo.png";
import loginbg from "../../assets/sidelogo.png"; 
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiErrors, setApiErrors] = useState({});

  const handleSubmit = () => {
    setApiErrors({});

    axios.post("https://toknagah.viking-iceland.online/api/user/auth/login",{
      email: email,
      password: password,
    })
    .then((res) => {
      console.log("LOGIN SUCCESS ✅", res.data);
      localStorage.setItem("token", res.data.data.token);
      navigate("/otp");
    })
    .catch((err) => {
      console.log(err);
      if(err.response?.data?.errors){
        setApiErrors(err.response.data.errors);
      }
      if(err.response?.data?.message){
        setApiErrors({ password: [err.response.data.message] })
      }
    });
  };

  return (
    <div className="login-wrapper">
      <div className="login-container ontainer-fluid">
        <div className="row">

          <div className="login-image col-md-6 p-0">
            <img src={loginbg} alt="login" className=" w-100 h-100" />
          </div>

          <div className="login-form col-12 col-md-6 d-flex flex-column ">
            <div className="login-logo mb-4 text-center mt-4">
              <img src={logo} alt="logo" />
            </div>

            <h3 className=" mb-3 fw-bold forgot-password ">!..مرحبا بعودتك</h3>

            <label className="input-label mt-2">البريد الالكتروني</label>
            <input
              type="email"
              className="input-field mb-1"
              style={{ backgroundColor: "#fafafa", padding: "20px 5px !important" }}
              placeholder="ادخل البريد الالكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {apiErrors.email && <small className="input-error">{apiErrors.email[0]}</small>}

            <label className="input-label mt-3">كلمة المرور</label>
            <input 
              type="password" 
              className="input-field mb-1"
              placeholder="ادخل كلمة المرور"
              style={{ backgroundColor: "#fafafa", padding: "20px 5px !important" }}
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            {apiErrors.password && <small className="input-error">{apiErrors.password[0]}</small>}

            <div className="forgot-password mt-1">
              <span
                className="link"
                style={{ color: "#1d3a77", cursor: "pointer", fontWeight:"bold" }}
                onClick={() => navigate("/forgetpassword")}
              >
                هل نسيت كلمة المرور؟
              </span>
            </div>

            <button
              className="login-btn btn w-100 text-white mt-4"
              onClick={handleSubmit}
              style={{
                backgroundColor: "#1d3a77",
                borderRadius: "10px",
                padding: "10px 0",
                fontWeight: "600",
                letterSpacing: "0.5px",
                border: "none"
              }}
            >
              تسجيل دخول
            </button>

            <p className="account-text mt-3 text-center fw-bold">
              لا تمتلك حساب ؟{" "}
              <a className="link fw-normal" onClick={() => navigate("/Register")}style={{ color: "#1d3a77",cursor:"pointer" }}>
                إنشاء حساب
              </a>
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}
