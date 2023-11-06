"use client";

import React, { useState, useEffect } from "react";
import CartToggle from "../component/CartToggle";
import Menu from "../component/Menu";
import MobileMenu from "../component/MobileMenu";
import SearchToggle from "../component/SearchToggle";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import axios from "axios";


export default function HeaderSix() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [loggedUser,setLoggedUser] = useState({});
  const [tokenUser,setTokenUser] = useState('');

  const [userProfile,setUserProfile] = useState([])


  console.log("userProfileuserProfile",userProfile)
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

useEffect(() => {
  var accessUserObj = localStorage.getItem("user_logged");
  var accessTokenObj = localStorage.getItem("access_token");

  setLoggedUser(accessUserObj)
  setTokenUser(accessTokenObj)
},[])

const logout = () => {
  if(loggedUser) {
    localStorage.removeItem("user_logged");
    localStorage.removeItem("access_token");
    window.location.reload(false);
  }
}

useEffect(()=>{
  
const config = {
  headers: { Authorization: `Bearer ${tokenUser}` }
};
  if(loggedUser) {
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/User/Get/${loggedUser}`,config)
    .then(res => {
      const data = res.data;
      setUserProfile(data);
    })
    .catch(err => {
      console.log("User Profile error", err?.message);
  });
  }
},[loggedUser])

  return (
    <header
      className={`header -type-4 js-header ${
        scrollPosition > 40 ? "bg-white" : ""
      } `}
    >
      <div className="header__container py-5 border-bottom-dark">
        <div className="row justify-between items-center">
          <div className="col-auto">
            <div className="header-left d-flex items-center">
              <div className="header__logo pr-30 xl:pr-20 md:pr-0">
                <Link href="/">
                  <Image
                    width={140}
                    height={50}
                    src="/assets/img/general/logo-black.png"
                    alt="logo"
                  />
                </Link>
              </div>

              <Menu allClasses="menu__nav text-dark-1 -is-active" />
              <MobileMenu
                setActiveMobileMenu={setActiveMobileMenu}
                activeMobileMenu={activeMobileMenu}
              />
            </div>
          </div>
          {loggedUser ?
              <>
                <div className="col-auto menuLogging">
                  <img className="profileImageHeader" src={userProfile?.user_image}  />
                  <div>{userProfile?.username}</div>
                  <div className="wallet">Connect to Wallet</div>
                  <div>Your Progress Bar</div>
                  <i className="fa fa-cog" aria-hidden="true"></i>
                  <div onClick={() => logout()}>
                logout
                </div>
                </div>
              
              </>
          
            :
          <div className="col-auto">
            <div className="header-right d-flex items-center">
              <div className="header-right__icons text-white d-flex items-center">
                <SearchToggle color={"text-dark-1"} />
                <CartToggle
                  parentClassess={"relative pl-30 sm:pl-15"}
                  allClasses={"d-flex items-center text-dark-1"}
                />

                <div className="d-none xl:d-block pl-30 sm:pl-15">
                  <button
                    className="text-dark-1 items-center"
                    data-el-toggle=".js-mobile-menu-toggle"
                    onClick={() => setActiveMobileMenu(true)}
                  >
                    <i className="text-11 icon icon-mobile-menu"></i>
                  </button>
                </div>
              </div>

              <div className="header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none">
                <Link href="/login" className="button -underline text-dark-1">
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="button h-50 px-40 -purple-1 -rounded text-white ml-30 xl:ml-20"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
}
        </div>
      </div>
    </header>
  );
}
