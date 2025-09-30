import React from 'react'
import * as yup from "yup";


export const formValidation = yup.object({
    first_name: yup.string().min(4, "Minimun write at least 4 characters ").required("First name is Required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().email("Write the valid email").required("Email is required"),
    password: yup.string().min(6, "Password must include 6 characters").matches(/[A-Z]/, "Password must contain at least one uppercase letter").matches(/[@$!%*?&]/, "Password must contain at least one special character").required("Password is required"),
    phone: yup.string().required("Phone number is required"),
    country_code: yup.string().required("Country code is required"),
    terms: yup.boolean().oneOf([true], "You must agree to terms & conditions"),
})
