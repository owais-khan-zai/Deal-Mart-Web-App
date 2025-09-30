import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../config/AuthUser";

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 
import Navbar from "../layout/Navbar";
import Footer from '../layout/Footer'
// ye upper 2 packges ye react mn jab hamay number wgaira mn sath flag or country code dekhanan hota hy to ye use krty hain or hamay mil jatay hai sray code ky sath flag

import { Formik, Form, Field, ErrorMessage } from "formik";
//  ye formik library use krnyu ky lie import kri hy 
import {formValidation} from '../schema/YupSchema'
// ye yup ka schema hy 
const Signup = () => {

  const navigate = useNavigate();
 
   const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const payload = { ...values};
      const res = await registerUser(payload);
      if (res.error) {
        toast.error(res.message || "Something went wrong");
      } else {
        toast.success(`Code Sent to ${values.email}`);
        navigate(`/verification?token=${res.token}`, {
          state: { email: values.email },
        });
      }
    } catch (error) {
      toast.error(error.message || "Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  const passField = useRef();
  const passHandler = (e) =>{
      if(e.target.classList.contains("ri-eye-off-line")){
        e.target.classList.remove("ri-eye-off-line")
        e.target.classList.add("ri-eye-line")
          passField.current.type = 'text';
        } 
        else{
          e.target.classList.add("ri-eye-off-line")
          e.target.classList.remove("ri-eye-line")
          passField.current.type = 'password';
      }   
  }

  return (
      <div className="overflow-x-hidden bg-[#F6F9FF]  max-w-[1600px]  ">
        <Navbar/>
      <div className="w-full  relative  flex flex-col pt-25 pb-22 md:justify-center md:items-center ">
      <div className="flex justify-center ">
          <div className="bg-white w-[80%] md:w-[90%] sm:px-10 lg:w-[45rem] rounded-lg p-4 shadow-lg flex flex-col items-center gap-5">
            <h1 className="font-bold text-[2.2rem]">Signup</h1>
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                password: "",
                country_code: "",
                terms: false,
                join: "1", 
              }}
              validationSchema={formValidation}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, isSubmitting }) => (
                <Form className="flex flex-col justify-between w-full h-full">
                  <div className="grid md:grid-cols-2 gap-3 md:gap-5">

                    {/* ✅ First Name */}
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-zinc-600">First Name</label>
                      <Field
                        type="text"
                        name="first_name"
                        className="outline-none border px-4 py-2 rounded-md"
                      />
                      <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm" />
                    </div>

                    {/* ✅ Last Name */}
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-zinc-600">Last Name</label>
                      <Field
                        type="text"
                        name="last_name"
                        className="outline-none border px-4 py-2 rounded-md"
                      />
                      <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm" />
                    </div>

                    {/* ✅ Email */}
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-zinc-600">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="outline-none border px-4 py-2 rounded-md"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>

                    {/* ✅ Phone Input */}
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-zinc-600">Phone Number</label>
                      <PhoneInput
                        country={'pk'}
                        onChange={(phone, countryData) => {
                          setFieldValue("phone", phone);
                          setFieldValue("country_code", `+${countryData.dialCode}`);
                        }}
                        inputClass="!w-full !px-12 !py-2 !border !border-zinc-300 !rounded-md "
                      />
                      <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                    </div>

                    {/* ✅ Password Field + Eye Icon */}
                    <div className="w-full relative flex flex-col gap-2">
                      <label className="font-semibold text-zinc-600">Password</label>
                      <div className="w-full relative">
                        <Field
                          innerRef={passField}
                          name="password"
                          type="password"
                          className="outline-none border px-4 py-2 rounded-md w-full"
                        />
                        <i
                          onClick={passHandler}
                          className="ri-eye-off-line absolute top-1/2 translate-y-[-50%] right-3 cursor-pointer"
                        ></i>
                      </div>
                      <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                    </div>

                    {/* ✅ Country Code (Optional) */}
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-zinc-600">Country Code</label>
                      <Field
                        name="country_code"
                        type="number"
                        className="outline-none border px-4 py-2 rounded-md"
                      />
                      <ErrorMessage name="country_code" component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>

                  {/* ✅ Terms & Conditions */}
                  <div className="flex gap-3 items-center mt-4">
                   <Field
                      type="checkbox"
                      name="terms"
                      className="w-[1em] h-[1rem] cursor-pointer mt-[0.1rem]"
                    />
                    <div className="md:flex relative">
                        <h5>
                          I <span className="text-[#8F00FF]">agree</span> with your{" "}
                          <span className="text-[#8F00FF]">Terms & Conditions</span>
                        </h5>
                        <ErrorMessage name="terms" component="div" className="text-red-500 text-sm md:pt-[0.1rem] md:ml-3 md:relative absolute " />
                    </div>    
                  </div>

                  {/* ✅ Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] w-full font-semibold text-base text-white py-2 rounded-md cursor-pointer mt-10"
                  >
                    {isSubmitting ? "Signing up..." : "Sign up"}
                  </button>

                  {/* ✅ Login Redirect */}
                  <div className="mt-4 w-full text-center">
                    Already have an Account?{" "}
                    <NavLink to="/login">
                      <span className="text-[#8F00FF]">Login</span>
                    </NavLink>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer/>
    </div> 
  );
};

export default Signup;
