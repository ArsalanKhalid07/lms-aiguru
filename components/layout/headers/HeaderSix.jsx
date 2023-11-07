"use client";

import React, { useState, useEffect } from "react";
import CartToggle from "../component/CartToggle";
import MobileMenu from "../component/MobileMenu";
import SearchToggle from "../component/SearchToggle";
import Image from "next/image";
import MenuMain from "../component/Menu";
import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";

export default function HeaderSix() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [loggedUser,setLoggedUser] = useState({});
  const [tokenUser,setTokenUser] = useState('');

  const [userProfile,setUserProfile] = useState([]);
  const [userCourses,setUserCourses] = useState([]);

  console.log("userCoursesuserCoursesuserCourses,userCourses",userCourses)

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

    // for user api
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/User/Get/${loggedUser}`,config)
    .then(res => {
      const data = res.data;
      setUserProfile(data);
    })
    .catch(err => {
      console.log("User Profile error", err?.message);
  });

    // for courses api
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/Course/Get/${loggedUser}`,config)
    .then(res => {
      const data = res.data;
      setUserCourses(data);
    })
    .catch(err => {
      console.log("User Courses error", err?.message);
    });


  }
},[loggedUser])

const [anchorEl, setAnchorEl] = React.useState(null);
const [anchorElTwo, setanchorElTwo] = React.useState(null);

const open = Boolean(anchorEl);
const openTwo = Boolean(anchorElTwo);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};


const handleClickTwo = (event) => {
  setanchorElTwo(event.currentTarget);
};
const handleCloseTwo = () => {
  setanchorElTwo(null);
};


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

              <MenuMain allClasses="menu__nav text-dark-1 -is-active" />
              {/* <MobileMenu
                setActiveMobileMenu={setActiveMobileMenu}
                activeMobileMenu={activeMobileMenu}
              /> */}
            </div>
          </div>
          {loggedUser  ?
              <>
                <div className="col-auto menuLogging menuCustom">
                  <ul>
                      <li>
                        <img className="profileImageHeader" src={userProfile?.user_image}  />

                      </li>
                        <li>
                
                            {userProfile?.username}
                      
                        </li>
                        <li>
                              Connect to Wallet

                        </li>
                        <li>
                          <Button
                              id="demo-positioned-button"
                              aria-controls={open ? 'demo-positioned-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              onClick={handleClick}
                              >
                              Progress Bar
                          </Button>
                          <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                className="progress_bar_list"
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                                }}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'right',
                                }}
                                >
                                  {userCourses?.map((elm,id)=> {
                                    return (
                                      <MenuItem key={elm.course_id} onClick={handleClose}>
                                        <div className="mainCourseLi">
                                            <div className="img_course">
                                                <img src="https://images.unsplash.com/photo-1605541885855-88863971e7b0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTM1MzM3OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1900" alt="image" />
                                        

                                            </div>
                                            <div className="progress_course">
                                            <p>{elm.course_name}</p>
                                                  <LinearProgress style={{width:"100%"}}  variant="determinate" value={elm.course_progress} />
                                                  <p>{elm.course_progress}%</p>
                                            </div>
                                        </div>
                                        </MenuItem>
                                    )
                                  })}
                          </Menu>
                        </li>
                        <li>
                          <Button
                              id="demo-positioned-button"
                              aria-controls={openTwo ? 'demo-positioned-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={openTwo ? 'true' : undefined}
                              onClick={handleClickTwo}
                              >
                              <i className="fa fa-cog" aria-hidden="true"></i>
                          </Button>
                          <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorElTwo}
                                open={openTwo}
                                onClose={handleCloseTwo}
                             

                                >
                                    <MenuItem onClick={() => logout()}>Logout</MenuItem>
                          </Menu>
                        </li>
                         
                
                  </ul>
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
