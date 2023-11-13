"use client";
import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import {useRouter} from "next/navigation";


export default function ForgetForm() {

  const router = useRouter();

  const [email,setEmail] = useState();




  const handleSubmit = (e) => {
          e.preventDefault();
          axios.post(`${process.env.NEXT_PUBLIC_API}/api/ForgotPassword/generateotp`, { email })
          .then(res => {
            localStorage.setItem('forgetEmail', email);
            router.push("/verify-opt")
          })
          .catch(err => {
            toast(err?.response?.data?.errors?.email?.toString())
        });

  };


  



  return (
    <div className="form-page__content lg:py-50">
        <ToastContainer theme="dark" autoClose={5000} />
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-6 col-lg-8">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">


                
                                <>
                                <h3 className="text-30 lh-13">Forget Password</h3>

                                <form
                                className="contact-form respondForm__form row y-gap-20 pt-30"
                                onSubmit={handleSubmit}
                              >
                                <div className="col-12">
                                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                    Enter your email
                                  </label>
                                  <input required type="text" name="title" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                                </div>
                                <ul className="forgetList"> 
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
                                </ul>
                      

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
                              </>
             
                  

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
