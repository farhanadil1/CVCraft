import React, { useState } from "react";
import { CiMail, CiLock, CiUser } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const FormInput = ({ Icon, name, label, type = "text", value, onChange, isValid }) => (
  <div className="relative mb-2">
    <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 bg-white">
      <Icon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
      <div className="flex-grow relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="peer w-full text-sm font-medium text-gray-900 font-para pt-2 pb-1 placeholder-transparent bg-white focus:outline-none"
          autoComplete={name === "password" ? "current-password" : "off"}
        />
        <label
          htmlFor={name}
          className="absolute left-0 -top-2 px-1 text-[10px] text-gray-500 bg-white font-medium pointer-events-none transform transition-all duration-150
                     peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100
                     peer-focus:-translate-y-2 peer-focus:scale-90"
        >
          {label}
        </label>
      </div>
      {isValid && <FaCheck className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />}
    </div>
  </div>
);

export default function Auth() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("signin");
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false, fullName: false });

  const isSignIn = activeView === "signin";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleGoback = () => {
    navigate(-1);
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const passwordStrong = formData.password.length >= 8;
  const fullNameValid = formData.fullName.trim().length >= 3;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen font-sans bg-white overflow-hidden">
      {/* Left illustration */}
      <div className="hidden md:flex justify-center items-center relative p-8">
        <button
          onClick={handleGoback}
          className="absolute top-6 left-6 flex items-center text-sm text-gray-700 hover:text-primary transition-colors"
        >
          <IoIosArrowBack className="h-4 w-4 mt-[2.5px]" />
          Back
        </button>
        <img
          src="./security.svg"
          alt="security"
          className="h-72 ml-20 object-contain"
          draggable={false}
          onError={(e) =>
            (e.target.src =
              "https://placehold.co/500x500/FFFFFF/4F46E5?text=Secure")
          }
        />
      </div>

      {/* Right form section */}
      <div className="flex flex-col justify-center md:items-start items-center bg-white px-6 sm:px-10 md:px-10 py-6 md:py-0">
        <div className="w-full max-w-80">
          {/* Logo */}
          <div className="flex justify-center md:justify-start items-center mb-4">
            <img src="./logo.png" alt="CVCraft" className="h-10 w-16 cursor-pointer" />
            <Link to={`/`}>
              <h1 className="text-xl -ml-1 pt-2.5 font-bold font-head text-gradient cursor-pointer">
                CVCraft
              </h1>
            </Link>
          </div>

          <h1 className="font-semibold text-xl md:text-left text-center text-gray-900">
            Welcome {isSignIn ? "Back" : "Onboard"}
          </h1>
          <p className="text-sm text-paragraph md:text-left text-center mt-1 mb-3">
            {isSignIn
              ? "Please enter your details to sign in"
              : "Create your account to start crafting your CV"}
          </p>

          {/* Toggle */}
          <div className="flex justify-center p-1 bg-gray-200 rounded-xl shadow-inner mb-5">
            <button
              className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                isSignIn
                  ? "bg-white text-gray-800 shadow-md"
                  : "text-gray-500 hover:bg-gray-300"
              }`}
              onClick={() => setActiveView("signin")}
            >
              Sign In
            </button>
            <button
              className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                !isSignIn
                  ? "bg-white text-gray-800 shadow-md"
                  : "text-gray-500 hover:bg-gray-200"
              }`}
              onClick={() => setActiveView("signup")}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            {!isSignIn && (
              <div onBlur={handleBlur}>
                <FormInput
                  Icon={CiUser}
                  name="fullName"
                  label="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  isValid={touched.fullName ? fullNameValid : false}
                />
              </div>
            )}

            <div onBlur={handleBlur}>
              <FormInput
                Icon={CiMail}
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                isValid={touched.email ? emailValid : false}
              />
              {touched.email && !emailValid && (
                <p className="text-xs text-red-500 mt-1">
                  Please enter a valid email.
                </p>
              )}
            </div>

            <div onBlur={handleBlur}>
              <FormInput
                Icon={CiLock}
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                isValid={touched.password ? passwordStrong : false}
              />
              {touched.password && !passwordStrong && (
                <p className="text-xs text-red-500 mt-1">
                  Password must be at least 8 characters.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-3 text-white font-semibold rounded-xl bg-primary hover:bg-primary/70 transition-all shadow-lg shadow-primary/40"
              onClick={() =>
                setTouched({ email: true, password: true, fullName: true })
              }
            >
              Continue
            </button>

            {isSignIn && (
              <div className="text-center mt-2">
                <button
                  type="button"
                  className="text-xs text-blue-500 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}
          </form>

          {/* Social login */}
          <div className="mt-6 text-center text-[10px]">
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-xs text-paragraph">
                Or Continue With
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex justify-center gap-4">
              <button className="p-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all">
                <FcGoogle className="h-5 w-5" />
              </button>
              <button className="p-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all">
                <VscGithubInverted className="h-5 w-5 text-blue-900" />
              </button>
              <button className="p-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all">
                <FaFacebook className="h-5 w-5 text-blue-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
