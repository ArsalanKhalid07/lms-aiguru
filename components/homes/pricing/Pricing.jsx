"use client";

import React, { useState , useEffect} from "react";
import { pricingData } from "../../../data/pricing";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Pricing() {


  const [isYearly, setIsYearly] = useState(false);
  // const handleCheckboxChange = (event) => {
  //   setIsYearly(event.target.checked);
  // };


  const [pricing,setPricing] = useState([])

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/Payment/Get`)
    .then(res => {
      const data = res.data;
      setPricing(data);
    })
    .catch(err => {
      console.log("Pricing error", err);
  });
  },[])

  
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-3">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Pricing</h2>

              <p className="sectionTitle__text ">
              Unlock Exceptional Value with Tailored Plans to Fit Your Needs.
              </p>
            </div>

            <div className="d-flex justify-center items-center pt-60 lg:pt-30">
              <div className="text-dark-1 bold-text">Monthly</div>
              {/* <div className="form-switch px-20">
                <div className="switch" data-switch=".js-switch-content">
                  <input
                    checked={isYearly}
                    onChange={handleCheckboxChange}
                    type="checkbox"
                  />
                  <span className="switch__slider"></span>
                </div>
              </div> */}
              {/* <div className="text-14 text-dark-1">
                Annually <span className="text-purple-1">Save 30%</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between pt-60 lg:pt-50">
          <div className="col-lg-4 col-md-6">
            <div
              className="priceCard -type-1 rounded-16 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={500}
            >
              <div className="priceCard__header py-40 pl-50 bg-dark-2">
                <div className="priceCard__type text-18 lh-11 fw-500 text-white">
                  {/* {pricingData[0].type} */}
                  {pricing[1]?.payment_name.replace("-"," ")}
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-white mt-8">
                {pricing[1]?.value == 0 ? "Free" : pricing[1]?.value }
                  
                </div>
                <div className="priceCard__period text-white mt-5">
                  {pricingData[0].period}
                </div>
              </div>

              <div className="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white">
                <div className="priceCard__text">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="priceCard__list mt-30">
                  {pricingData[0].features.map((elm, i) => (
                    <div key={i}>
                      <span
                        className=" pr-8 text-purple-1"
                        style={{
                          
                          fontSize: "12px",
                          fontWeight: "300",
                        }}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={faCheck} />

                      </span>
                      {elm}
                    </div>
                  ))}
                </div>

                <div className="priceCard__button mt-30">
                  {/* <Link
                    className="button -md -purple-3 text-purple-1"
                    href="/courses-list-1"
                  > */}
                   <Link
                    className="button -md -purple-3 text-purple-1 getStartedPrice"
                    href="#"
                  > 
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="priceCard -type-1 rounded-16 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={800}
            >
              <div className="priceCard__header py-40 pl-50 bg-dark-2">
                <div className="priceCard__type text-18 lh-11 fw-500 text-white">
                  {/* {pricingData[0].type} */}
                  {pricing[0]?.payment_name}
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-white mt-8">
                  {/* {pricingData[0].price ? pricingData[0].price : "Free"} */}
                  {pricing[0]?.value}
                </div>
                <div className="priceCard__period text-white mt-5">
                  {pricingData[0].period}
                </div>
              </div>

              <div className="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white">
                <div className="priceCard__text">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="priceCard__list mt-30">
                  {pricingData[0].features.map((elm, i) => (
                    <div key={i}>
                      <span
                        className=" pr-8 text-purple-1"
                        style={{
                          
                          fontSize: "12px",
                          fontWeight: "300",
                        }}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={faCheck} />

                      </span>
                      {elm}
                    </div>
                  ))}
                </div>

                <div className="priceCard__button mt-30">
                  {/* <Link
                    className="button -md -purple-3 text-purple-1"
                    href="/courses-list-1"
                  > */}
                   <Link
                    className="button -md -purple-3 text-purple-1 getStartedPrice"
                    href="#"
                  > 
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>



          <div className="col-lg-4 col-md-6">
            <div
              className="priceCard -type-1 rounded-16 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={1500}
            >
              <div className="priceCard__header py-40 pl-50 bg-dark-2">
                <div className="priceCard__type text-18 lh-11 fw-500 text-white">
                  {/* {pricingData[2].type} */}
                  {pricing[2]?.payment_name.replace("-"," ")}
                
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-white mt-8">
                {pricing[2]?.value}
                  
                </div>
                <div className="priceCard__period text-white mt-5">
                  {isYearly ? "per year" : pricingData[2].period}
                </div>
              </div>

              <div className="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white">
                <div className="priceCard__text">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="priceCard__list mt-30">
                  {pricingData[2].features.map((elm, i) => (
                    <div key={i}>
                     <span
                        className="pr-8  text-purple-1"
                        style={{
                          
                          fontSize: "12px",
                          fontWeight: "300",
                        }}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={faCheck} />

                      </span>
                      {elm}
                    </div>
                  ))}
                </div>

                <div className="priceCard__button mt-30">
                  {/* <Link
                    className="button -md -purple-3 text-purple-1"
                    href="/courses-list-1"
                  > */}
                   <Link
                    className="button -md -purple-3 text-purple-1 getStartedPrice"
                    href="#"
                  > 
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
