"use client"
import {useState,useEffect} from "react";
import { blogs } from "@/data/blog";
import Image from "next/image";
import { events } from "../../../data/events";
import Link from "next/link";
import axios from "axios";
export default function BlogsFive() {

  const [events,setEvents] = useState([])


useEffect(() => {
  axios.get(`${process.env.NEXT_PUBLIC_API}/api/Event/Get`)
  .then(res => {
    const data = res.data;
    setEvents(data);
  })
  .catch(err => {
    console.log("login page error", err);
});
},[])



  const featureFalse = events.filter(item => item.is_featured == false);
  const featureTrue = events.filter(item => item.is_featured == true);



function dateFormat(inputDate, format) {
  //parse the input date
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();    

  //replace the month
  format = format.replace("MM", month.toString().padStart(2,"0"));        

  //replace the year
  if (format.indexOf("yyyy") > -1) {
      format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
      format = format.replace("yy", year.toString().substr(2,2));
  }

  //replace the day
  format = format.replace("dd", day.toString().padStart(2,"0"));

  return format;
}


  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration={800}
          >
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Events</h2>

              <p className="sectionTitle__text ">
              Unveiling Our Calendar: Dive into Key Events & Highlights
              </p>
            </div>
          </div>

          <div
            className="col-auto"
            data-aos="fade-left"
            data-aos-duration={800}
          >
            {/* <Link
              href="/blog-list-3"
              className="button -icon -purple-3 text-purple-1"
            >
              Browse Blog
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </Link> */}
          </div>
        </div>

        <div className="row y-gap-30 pt-50">
          {featureTrue.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div
                className="blogCard -type-1"
                data-aos="fade-left"
                data-aos-duration={(i + 1) * 600}
              >
                <div className="blogCard__image">
                  {/* <Image
                    width={520}
                    height={420}
                    src={elm?.event_image}
                    loader={myLoader}
                    alt="image"
                  /> */}
                  <img src={elm?.event_image} alt="image" height={420} width={520} />
                </div>
                <div className="blogCard__content">
                  <div className="blogCard__category">{elm.category}</div>
                  <h4 className="blogCard__title">
                    <Link className="linkCustom" href={`/blogs/${elm?.event_id}`}>
                      {elm?.event_name  }
                    </Link>
                  </h4>
                  <div className="blogCard__date">{elm.event_date}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-4">
            <div className="row y-gap-30 eventFalseFeature">
              {featureFalse.map((elm, i) => (
                <div key={i} className="col-lg-12 col-md-6">
                  <div
                    className="eventCard -type-4"
                    data-aos="fade-left"
                    data-aos-duration={(i + 1) * 400}
                  >
                    <div className="eventCard__date bg-light-7 mr-20">
                      <span className="text-30 lh-1 fw-700">
                        {elm?.event_date.slice(8,10)}
                      
                      </span>
                      <span className="text-18 lh-1 fw-500 uppercase mt-10">
                        {/* {elm?.date?.split(" ")[1].split(",")[0]} */}
                        {elm?.event_date.slice(5,7)}
                        
                      </span>
                    </div>
                    <div className="eventCard__content">
                      {/* <div className="text-13 lh-1 fw-500 uppercase text-purple-1"> */}
                        {/* {elm?.category} */}
                        {/* Ai */}
                      {/* </div> */}
                      <h4 className="text-17 lh-15 fw-500 mt-10">
                        {" "}
                        <Link className="linkCustom" href={`/events/${elm?.event_id}`}>
                          {elm?.event_name}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
