import React, { useState } from "react";
import Layout from '../../components/Layout/Layout'; // ✅ Fixed import name
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';





const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // Form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, {
        email,
        password,
      });

      if (res?.data?.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data?.message || "Login failed");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Unauthorized. Please login again.");
        localStorage.removeItem("auth");
        navigate("/login");
      }
    }
  };

  return (
    <Layout title="Login - Ecommerce App"> {/* ✅ Fixed title */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Password"
              required
            />
          </div>

          {/* Forgot Password Button (Fixed to prevent form submission) */}
          <div className="mb-3">
            <button type="button" className="btn btn-primary" onClick={() => navigate("/forgot-password")}>
              Forgot Password
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
          <div className="mt-3 mb-3">
            <p className="text-center">OR</p>
            <GoogleLogin 
            onSuccess={async (credentialResponse) => {
              const token = credentialResponse.credential;
              const decoded = jwtDecode(token);

              try {
                const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/google-login`, {
                  token,
                });

                if (data?.success) {
                  toast.success("Google login success!");
                  setAuth({
                    user: data.user,
                    token: data.token,
                  });
                  localStorage.setItem("auth", JSON.stringify(data));
                  navigate("/");
                } else {
                  toast.error("Google login failed");
                }
              } catch (err) {
                console.error(err);
                toast.error("User not registered, please register first.");
              }
            }}
            onError={() => {
              toast.error("Google login failed");
            }}
          />
          </div>
          <div className="register-link">
        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
        </form>
      </div>
    </Layout>
  );
};


export default Login;
