"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function SignUpForm() {

  // const [user,setUser] = useState({
  //   email: '',
  //   username:'',
  //   password:'',
  //   phone:'',
  //   dob:'',
  //   about:'',
  //   country:'',
  //   occupation:'',
  //   user_image:''
  // })


  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [phone,setPhone] = useState('');
  const [dob,setDob] = useState('');
  const [about,setAbout] = useState('');
  const [country,setCountry] = useState('');
  const [occupation,setOccupation] = useState('');
  const [user_image,setUser_image] = useState('');





  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // console.log("userrrrrrr",user);

    axios.post(`https://my-webapi-service-glixobkvea-uc.a.run.app/api/Auth/register`, {
      email,
      username,
      password,
      phone,
      dob,
      about,
      country,
      occupation,
      user_image
    } )
    .then(res => {
      const registerUser = res.data;
      // console.log("asdejwgeugwuegbewgeu",registerUser)
      console.log("registerUserregisterUserregisterUser",registerUser)
    })
    .catch(err => {
      toast(err.response.data.errors.about[0]);
      toast(err.response.data.errors.country[0]);
      toast(err.response.data.errors.email[0]);
      toast(err.response.data.errors.occupation[0]);
      toast(err.response.data.errors.password[0]);
      toast(err.response.data.errors.phone[0]);
      toast(err.response.data.errors.username[0]);


      console.log("eeeee",err)
  });

  };

  
 

  return (
    <div className="form-page__content lg:py-50">
        <ToastContainer theme="dark" autoClose={10000} />
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-8 col-lg-9">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">Sign Up</h3>
              <p className="mt-10">
                Already have an account?
                <Link href="/login" className="text-purple-1">
                  Log in
                </Link>
              </p>

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit}
              >
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Email address *
                  </label>
                  <input  type="text" name="email" placeholder="Name" onChange={(e) => setEmail(e.target.value)}  value={email}/>
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Username *
                  </label>
                  <input  type="text" name="username" placeholder="Name" onChange={(e) => setUsername(e.target.value)}  value={username} />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  Phone  *
                  </label>
                  <input  type="text" name="phone" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}  value={phone} />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  Date of birth  *
                  </label>
                  <input  type="text" name="dob" placeholder="Date of birth" onChange={(e) => setDob(e.target.value)}  value={dob} />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    About  *
                  </label>
                  <input  type="text" name="about" placeholder="About" onChange={(e) => setAbout(e.target.value)}  value={about} />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Country  *
                  </label>
                  <input  type="text" name="country" placeholder="Country" onChange={(e) => setCountry(e.target.value)}  value={country} />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  Occupation *
                  </label>
                  <input  type="text" name="occupation" placeholder="Occupation" onChange={(e) => setOccupation(e.target.value)}  value={occupation} />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  Image
                  </label>
                  <input  type="file" name="user_image" placeholder="Image" onChange={(e) => setUser_image(e.target.value)}  value={user_image} />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Password *
                  </label>
                  <input  type="text" name="password" placeholder="Name" onChange={(e) => setPassword(e.target.value)}  value={password} />
                </div>
                {/* <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Confirm Password *
                  </label>
                  <input required type="text" name="cpassword" placeholder="Name"   value={confrim} onChange={confrimPass}/>
                </div> */}
                <div className="col-12">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                  >
                    Register
                  </button>
                </div>
              </form>

              {/* <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                Or sign in using
              </div>

              <div className="d-flex x-gap-20 items-center justify-between pt-20">
                <div>
                  <button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
                    Log In via Facebook
                  </button>
                </div>
                <div>
                  <button className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14">
                    Log In via Google+
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
