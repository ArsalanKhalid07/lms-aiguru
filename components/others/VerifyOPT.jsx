"use client";
import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/navigation";




export default function VerifyOTP() { 
    const [otp,setOtp] = useState('');
    const  router = useRouter();
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [intervalPo,setIntervalPo] = useState(false)

        const email = localStorage.getItem("forgetEmail");


    console.log("emailemailemail",email)

    const handleSubmitOpt = (e) => {
        e.preventDefault();

        axios.post(`https://my-webapi-service-glixobkvea-uc.a.run.app/api/VerifyOTP`, { email,otp },
        {
            headers: { "Content-Type": "application/json" }
         }
        
        )
        .then(res => {

          router.push("/new-password")
        })
        .catch(err => {
          toast(err.response.data);
      });  
}



useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
  
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, [seconds,intervalPo]);



  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://my-webapi-service-glixobkvea-uc.a.run.app/api/ForgotPassword/generateotp`, { email })
    .then(res => {

    })
    .catch(err => {
        toast(err?.response?.data?.errors?.email?.toString())
  });
  setMinutes(1)
  setSeconds(0)
  setIntervalPo(!intervalPo)
  setOtp('')
};


  return (
    <div className="form-page__content lg:py-50">
        <ToastContainer theme="dark" autoClose={5000} />
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-6 col-lg-8">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">

            <h3 className="text-30 lh-13">Verify OTP</h3>
                      <form
                    className="contact-form respondForm__form row y-gap-20 pt-30"
                    onSubmit={handleSubmitOpt} >
                    <div className="col-12">
                      <div className="verifyOptFields"> 
                          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            Enter your 6 digit OTP code 
                          </label>
                          <input required type="number" name="title" placeholder="OPT" value={otp} onChange={(e) => {setOtp(Number(e.target.value))}} />
                      </div>
                      <div className="opt">
                            <div>
                                    {seconds > 0 || minutes > 0 ? (
                                    <p>
                                    Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                                    {seconds < 10 ? `0${seconds}` : seconds}
                                    </p>
                                    ) : (
                                    <p>Didn't recieve code?</p>
                                    )}
                            </div>
                            <div>
                                <button
                                  disabled={seconds > 0 || minutes > 0}
                                  style={{
                                  color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                                  }}
                                  onClick={handleSubmit}
                                  >
                                  Resend OTP
                                  </button>
                          </div>
                      </div>
                    </div>
                    {/* <ul className="forgetList"> 
                      <li>
                      <Link href="/" className="text-purple-1">
                      go to home page
                    </Link>
                      </li>
                      <li>
                      <Link href="/signup" className="text-purple-1">
                      create new account
                    </Link>
                      </li>
                    </ul> */}
            

                    <div className="col-12">
                 
                      
                      <button
                        type="submit"
                        name="submit"
                        id="submit"
                        className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                      >
                           Submit
                      </button>
                    </div>
                  </form>
                    



            </div>
          </div>
        </div>
      </div>
    </div>

)



}