import React, { useEffect, useRef, useState } from "react";
import { verifyOtp } from "../config/AuthUser";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resendCode } from "../config/AuthUser";
import { useLocation } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from '../layout/Footer'
import {
  RiMenuLine, RiHomeLine, RiFileUserLine,
  RiCustomerServiceLine, RiUserLine,
  RiArrowDownSLine, RiCloseLine
} from 'react-icons/ri';

const OtpVarification = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const [Otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);


  const [Timer, setTimer] = useState(30);
  const [isResendActive, setIsResendActive] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
  let interval;
  if (Timer > 0) {
    interval = setInterval(() => {
      setTimer((prev) => prev - 1);  // ✅ Use function form
    }, 1000);
  } else {
    setIsResendActive(true);
  }
  return () => clearInterval(interval);
}, [Timer]);

  const resendBtn = useRef();

  const resendCodeFunc = async () => {
  if (isResendActive) {
      setTimer(30); // ✅ reset timer
      setIsResendActive(false); // ✅ reset button
    try {
      await resendCode(location.state.email);
      toast.success(`Code Resent To ${location.state.email}`);
    } catch (error) {
      toast.error(error.message || "Code Not Sent. Try Again Later");
    }
  }
};

  const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);   
      // yha nichy sy minutes mil rhy hain
      const remainingSeconds = seconds % 60;     
      // yaha upper sy seconds mil rhy hain

      const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      // yha yupper paddedminutes mn ye ho rha hy agar myra minute chota hy 10 sy to os ky sath 0 lag jyega
      const paddedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
      // seconds mn bhi aysy hi hoga agar 10  sy chota hy to sath osky 0 jur jyega 

      return `${paddedMinutes}:${paddedSeconds}`;
      // yha sy minute and seconds ko return kr rhy hain takay wo show kra sakay 
};

  // upper useEffect sy ly kr yaha resend code ky function tk ka code sra timer ky lie hy jo 2 minute ky lie chalayga

  const handleInput = (e, index) => {
    let value = e.target.value;

    // Only allow digits 0-9
    if (isNaN(value) || value.length > 1) return;

    // ye isNaN kahlata hy Not a Number and ye if check krta hy agar value number ni hy ya length oski 1 sy zayada hy to wo return krdyta hy isay

    const OtpCopy = [...Otp];
    // ...otp sy ak same array ki copy ban rhi hy otpcopy mn and os ky index mn value laga kr set kr rhy hain otp ky array mn
    OtpCopy[index] = value;
    setOtp(OtpCopy);

    if(value != "" && index < 5){
      inputRef.current[index+1].focus();
    }
  };

  const handleBackKey = (e, index) => {
    if(e.key === "Backspace"){
      const otpCopy = [...Otp];
      
      if(Otp[index] !== ""){
        otpCopy[index] == "";
        setOtp(otpCopy);
      } else if (index > 0) {
        otpCopy[index - 1] = "";
        setOtp(otpCopy);
        inputRef.current[index-1].focus();
      }
    }
  }

  const submitHandler = async (ele) => {
    ele.preventDefault();
    const mainOtp = Otp.join("");
    try {
      const res = await verifyOtp(mainOtp, token);
      localStorage.setItem("token", token);
      if (!res.error) {
        toast.success("Email Verified Successfully");
        navigate("/");
        localStorage.setItem("email", location.state.email);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="overflow-x-hidden max-w-[1600px] h-screen bg-[#F6F9FF] flex flex-col justify-between">
      <Navbar/>
      <div className="max-w-[1600px]   mt-30 mb-30 flex justify-center items-center ">
        <div className="bg-white w-[80%] sm:w-[25rem] rounded-lg p-4 shadow-lg flex flex-col items-center text-center gap-3">
          <h1 className="text-3xl font-semibold">Verify Your Email</h1>
          <form
            onSubmit={submitHandler}
            className=" px-[8%] sm:px-4 mt-5 flex flex-col "
          >
            <div className="grid grid-rows-1 h-13  grid-cols-6 w-full gap-2 ">
              {Otp.map((digit, index) => (
                <input
                  required
                  ref={((el)=> inputRef.current[index] = el)}
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleInput(e, index)}
                  onKeyDown={(e)=> handleBackKey(e, index)}
                  className="outline-none border-2 border-zinc-400 text-center text-xl rounded w-full h-12"
                />
              ))}
            </div>

              <div className="flex justify-between items-center w-full"> 
                    <h4
                      onClick={resendCodeFunc}
                      ref={resendBtn}
                      className={`text-start mt-2 underline cursor-pointer w-fit ${
                        isResendActive ? "text-[#8F00FF]" : "text-zinc-300"
                      }`}
                    >
                      Resend Code
                    </h4>
                    <p className="text-sm font-medium text-gray-500">
                      {Timer > 0 ? formatTime(Timer) : "00:00"}
                    </p>
              </div>

            <input
              type="submit"
              className="text-base text-white bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] w-full rounded-md py-2 font-semibold cursor-pointer mt-5"
            />
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default OtpVarification;
