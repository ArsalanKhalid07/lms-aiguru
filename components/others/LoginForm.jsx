"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import React from "react";
import axios from "axios";
import {jwtDecode}  from 'jwt-decode';
import { useRouter } from 'next/navigation';
import { useContextElement } from "@/context/Context";
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function LoginForm() {

  const router = useRouter()
  const {setUserLogin} = useContextElement();

  // const [user,setUser] = useState({});
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://my-webapi-service-glixobkvea-uc.a.run.app/api/Auth/login`, { email, password })
    .then(res => {
      const token = res.data;
      const users = jwtDecode(token); 
      localStorage.setItem('access_token',token );
      localStorage.setItem('user_logged', users.nameid);
      setEmail('');
      setPassword('');
    router.push('/', { scroll: false })
    })
    .catch(err => {
      toast(err.response.data);
  });
  };

  




  return (
    <div className="form-page__content lg:py-50">
        <ToastContainer theme="dark" autoClose={5000} />
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-6 col-lg-8">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">Login</h3>
              <p className="mt-10">
                Don't have an account yet?
                <Link href="/signup" className="text-purple-1">
                  Sign up for free
                </Link>
              </p>

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit}
              >
                <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Username Or Email
                  </label>
                  <input required type="text" name="title" placeholder="Name" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </div>
                <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    name="title"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> {setPassword(e.target.value)}}
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                  >
                    Login
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
