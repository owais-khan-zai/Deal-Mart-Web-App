import React, { useRef, useState } from "react";
import { login } from "../config/AuthUser";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../layout/Navbar";
import Footer from '../layout/Footer'

const Login = () => {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const inputHandler = (ele) => {
    const { name, value, type, checked } = ele.target;

    setUser((previousVal) => ({
      ...previousVal,
      [name]: type == "checkbox" ? checked : value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login(User.email, User.password, User.remember);
      if (res.error == true) {
        toast.error(res.message || "Login Failed");
      } else {
        toast.success("Login Successfull!!");
        const token = res.token;
        localStorage.setItem("token", token);
        navigate("/");
        localStorage.setItem("email", User.email)
      }
      console.log(res);
    } catch (error) {
      toast.error(error.message || "Login Failed. Try Again");
    }
  };

  const passField = useRef();
  const passHandler = (e) => {
    if (e.target.classList.contains("ri-eye-off-line")) {
      e.target.classList.remove("ri-eye-off-line");
      e.target.classList.add("ri-eye-line");
      passField.current.type = "text";
    } else {
      e.target.classList.add("ri-eye-off-line");
      e.target.classList.remove("ri-eye-line");
      passField.current.type = "password";
    }
  };

  return (
    <div>
      <div className="w-screen h-screen relative  bg-[#F6F9FF] max-w-[1600px]  flex flex-col justify-between overflow-x-hidden">
        <Navbar />
        <div className="flex justify-center ">
          <div className="bg-white w-[80%] sm:w-[28rem] sm:px-8 rounded-lg p-4 shadow-lg flex flex-col items-center gap-5 mt-26 my-10">
            <h1 className="font-bold text-[2.2rem]">Login</h1>
            <form
              onSubmit={submitHandler}
              className=" flex flex-col justify-between w-full  h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold text-zinc-600">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    onChange={(ele) => {
                      inputHandler(ele);
                    }}
                    className="outline-none border-1 border-zinc-400 px-4 py-2 rounded-md "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-zinc-600">
                    Password
                  </label>
                  <div className="w-full relative ">
                    <input
                      name="password"
                      ref={passField}
                      required
                      type="password"
                      onChange={(ele) => {
                        inputHandler(ele);
                      }}
                      className="outline-none border-1 border-zinc-400 px-4 py-2 rounded-md w-full"
                    />
                    <i
                      onClick={passHandler}
                      className="ri-eye-off-line absolute top-1/2 translate-y-[-50%] right-3 cursor-pointer"
                    ></i>
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer w-fit">
                  <input
                    name="remember"
                    onChange={(ele) => {
                      inputHandler(ele);
                    }}
                    type="checkbox"
                    className="accent-[#DA00FF] cursor-pointer mt-[0.1rem] ml-1  w-[1rem] h-[1rem]"
                  />
                  <span>Remember me</span>
                </label>
              </div>
              <input
                type="submit"
                required
                value="Login"
                className="bg-gradient-to-r from-[#8F00FF] to-[#DA00FF]  w-full font-semibold text-base  text-white  py-2 rounded-md cursor-pointer mt-10"
              />
            </form>
            <div>
              <h5>
                Does not have any Account?{" "}
                <NavLink to="/signup">
                  <span className="text-[#8F00FF]">Signin</span>
                </NavLink>
              </h5>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
