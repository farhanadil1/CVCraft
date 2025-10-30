import React, { useState } from "react";
import { CiMail, CiLock, CiUser } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

// Reusable input component
const FormInput = ({ Icon, name, label, type = "text", value, onChange, isValid }) => (
  <div className="relative mb-2">
    <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 bg-white">
      <Icon className="h-5 w-5 text-gray-400 mr-3" />
      <div className="flex-grow relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="peer w-full text-sm text-gray-900 pt-2 pb-1 placeholder-transparent bg-white focus:outline-none"
          autoComplete={type === "password" ? "current-password" : "off"}
        />
        <label
          htmlFor={name}
          className="absolute left-0 -top-2 px-1 text-[10px] text-gray-500 bg-white pointer-events-none transform transition-all duration-150
                     peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100
                     peer-focus:-translate-y-2 peer-focus:scale-90"
        >
          {label}
        </label>
      </div>
      {isValid && <FaCheck className="h-4 w-4 text-green-500 ml-2" />}
    </div>
  </div>
);

export default function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // Simple validation
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const passwordValid = formData.password.length >= 8;
  const fullNameValid = formData.fullName.trim().length >= 3;
  const isFormValid = isLogin ? emailValid && passwordValid : emailValid && passwordValid && fullNameValid;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      toast.error("Please input the correct formated values", { duration: 2000 });
      return;
    }

    setLoading(true);
    const API_BASE = "/api";

    try {
      if (isLogin) {
        const response = await toast.promise(
          axios.post(
            `${API_BASE}/users/login`,
            { email: formData.email, password: formData.password },
            { withCredentials: true }
          ),
          { loading: "Logging in..." }
        );

        const user = response.data.data.user;
        const username = user.fullName;

        toast.success(`Welcome back, ${username}!`, { duration: 2000 });
        Cookies.set("username", username, { expires: 7 });
        Cookies.set("accessToken", response.data.data.accessToken, { expires: 7 });
        navigate(-1)

      } else {
        await toast.promise(
          axios.post(`${API_BASE}/users/register`, {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
          }),
          { loading: "Signing up...", success: "Registered! Please login.", duration: 2000 }
        );
        setTimeout(() => {
          setIsLogin(true);
          setFormData({ fullName: "", email: "", password: "" });
        }, 1200);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong!", { duration: 2000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen font-sans bg-white overflow-hidden">
      <Toaster position="top-center" />
      {/* Left side illustration */}
      <div className="hidden md:flex justify-center items-center relative p-8">
        <button
      onClick={() => navigate(-1)}
      className="absolute top-6 left-10 flex items-center text-sm font-medium text-white 
                 bg-gradient-to-r from-indigo-500 to-primary
                 py-2 px-3 rounded-2xl
                 shadow-lg shadow-indigo-400/50
                 backdrop-blur-sm
                 transform transition-all duration-300
                 hover:scale-105 hover:shadow-2xl hover:from-indigo-400 hover:to-purple-300
                 active:scale-95 active:shadow-md
                overflow-hidden">
      <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-indigo-400 rounded-full opacity-30 blur-xl animate-pulse"></span>
      <IoIosArrowBack className="h-4 w-4 z-10 relative" />
      <span className="relative z-10">Back</span>
    </button>



        <img src="./security.svg" alt="security" className="h-72 ml-20 object-contain" draggable={false} />
      </div>

      {/* Right side form */}
      <div className="flex flex-col justify-center md:items-start items-center px-6 sm:px-10 md:px-10">
        <div className="w-full max-w-80">
          <div className="flex justify-center items-center mb-4">
            <img src="./logo.png" alt="CVCraft" className="h-10 w-16" />
            <Link to="/">
              <h1 className="text-xl -ml-1 pt-2.5 font-bold text-gradient cursor-pointer">CVCraft</h1>
            </Link>
          </div>

          <h1 className="font-semibold text-xl text-center">
            Welcome {isLogin ? "Back" : "Onboard"}
          </h1>
          <p className="text-sm text-center mt-1 mb-3">
            {isLogin ? "Please enter your details to sign in" : "Create your account to start crafting your CV"}
          </p>

          {/* Toggle Login/Register */}
          <div className="flex justify-center p-1 bg-gray-200 rounded-xl shadow-inner mb-5">
            <button
              className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                isLogin ? "bg-white text-gray-800 shadow-md" : "text-gray-500 hover:bg-gray-300"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button
              className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                !isLogin ? "bg-white text-gray-800 shadow-md" : "text-gray-500 hover:bg-gray-200"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full">
            {!isLogin && (
              <FormInput
                Icon={CiUser}
                name="fullName"
                label="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                isValid={fullNameValid}
              />
            )}

            <FormInput
              Icon={CiMail}
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              isValid={emailValid}
            />

            <FormInput
              Icon={CiLock}
              name="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              isValid={passwordValid}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-3 text-white font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-primary hover:bg-accent transition-all"
            >
              {loading ? "Processing..." : "Continue"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
