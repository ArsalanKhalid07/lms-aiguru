"use client";
import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useContextElement } from "@/context/Context";
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function LoginForm() {

  const router = useRouter()
  const {emailNewPass} = useContextElement();

  // const [user,setUser] = useState({});
  const [newpassword,setNewPassword] = useState('');

  const email = localStorage.getItem("forgetEmail");


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://my-webapi-service-glixobkvea-uc.a.run.app//api/UpdatePassword`, { email, newpassword })
    .then(res => {
      toast("Password is successfully updated")
      router.push('/login', { scroll: false })
    })
    .catch(err => {
      toast(err?.response?.data?.errors?.newPassword?.toString());
  });
  };

  console.log("here emai addeddddd" , emailNewPass)




  return (
    <div className="form-page__content lg:py-50">
        <ToastContainer theme="dark" autoClose={5000} />
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-6 col-lg-8">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">Update Password</h3>
              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit}
              >
                <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-12">
                    Enter New Password 
                  </label> 
                  <input required type="text" name="title" placeholder="Name" value={newpassword} onChange={(e) => {setNewPassword(e.target.value)}} />
                </div>
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
  );
}
