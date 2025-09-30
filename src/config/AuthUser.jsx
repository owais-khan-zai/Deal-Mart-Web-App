import React, { useState } from 'react'
import axios from "axios";
import { register_API } from '../api/ApiBaseUrls';
import { otp_verify_API } from '../api/ApiBaseUrls';
import { login_API } from '../api/ApiBaseUrls';
import { logout_API } from '../api/ApiBaseUrls';
import {otp_resend_API} from '../api/ApiBaseUrls';
import { useNavigate } from 'react-router-dom';

export const registerUser = async (userData) =>{
    try {
        const res = await axios.post(register_API, userData)
        return res.data;
    } catch (error) {
        throw error.response.data || { message: "Something went wrong" };
    }
};


export const verifyOtp = async  (otpCode,token) =>{
    try {
        const res = await axios.post(otp_verify_API, { otp: otpCode}, {headers:{Authorization:token}})
        return res.data;
    } catch (error) {
        throw error.response.data || { message: "Otp Verification Failed"}
    }
}

export const login = async (email, password, remember) =>{
    try {
        const res = await axios.post(login_API, {email: email, password: password, remember : remember})
        return res.data;
    } catch (error) {
        throw error.response.data || {message: "Login Failed"}
    }
}

export const logout = async (token) =>{
    try {
        const res = await axios.get(logout_API, {headers: {Authorization: token}})
    } 
    catch (error) {
        throw error.response.data || {message: "Logout Failed"}
    }
}

export const resendCode = async (email) => {
    try {
        const res = await axios.get(otp_resend_API, {email: email})
    } catch (error) {
        throw error.response.message || {message: "Code Not Send Try Again Later"}        
    }
}