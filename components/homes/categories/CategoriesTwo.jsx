"use client"
import React, { useEffect ,useState } from "react";
import { topCatagoriesThree } from "../../../data/topCategories";
import Link from "next/link";
import axios from "axios";

export default function CategoriesTwo({posts }) {


  const [category,setCategory] = useState([])

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/Category/Get`)
    .then(res => {
      const data = res.data;
      setCategory(data);
    })
    .catch(err => {
      console.log("category error", err);
  });
  },[])
  

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Top Categories</h2>

              <p className="sectionTitle__text ">
              Leading the Way: Discover Our Top-Trending Course Categories
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-50">
          <div className="col-lg-6">
            <div className="row y-gap-30">
              {category.slice(0, 4).map((elm, i) => (
                <Link
                  href={`/courses-list-${elm?.cat_id}`}
                  className="col-md-6 linkCustomTwo"
                  key={i}
                >
                  <div className="categoryCard -type-1">
                    <div className="categoryCard__image">
                      <div
                        className="bg-image ratio ratio-30:16 js-lazy"
                        style={{ backgroundImage: `url(${elm?.cat_image})` }}
                      ></div>
                    </div>

                    <div className="categoryCard__content text-center">
                      <h4 className="categoryCard__title text-17 lh-15 fw-500 text-white">
                        {elm?.cat_name}
                      </h4>
                      <div className="categoryCard__subtitle text-13 text-white lh-1 mt-5">
                      {elm?.number_of_courses}+ Courses
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="row y-gap-30">
              <div className="col-12">
                <Link href={`/courses-list-5`} className="categoryCard -type-1">
                  <div className="categoryCard__image">
                    <div
                      className="bg-image ratio ratio-30:35 js-lazy"
                      style={{
                        backgroundImage: `url(${category[5]?.cat_image})`,
                      }}
                    ></div>
                  </div>
                  <div className="categoryCard__content text-center">
                    <h4 className="categoryCard__title text-17 lh-15 fw-500 text-white">
                      {category[5]?.cat_name}
                    </h4>
                    <div className="categoryCard__subtitle text-13 text-white lh-1 mt-5">
                      {category[5]?.number_of_courses}+ Courses
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="row y-gap-30">
              {category.slice(5, 7).map((elm, i) => (
                <Link
                  href={`/courses-list-${elm?.cat_id}`}
                  key={i}
                  className="col-lg-12"
                >
                  <div className="categoryCard -type-1">
                    <div className="categoryCard__image">
                      <div
                        className="bg-image ratio ratio-30:16 js-lazy"
                        style={{ backgroundImage: `url(${elm?.cat_image})` }}
                      ></div>
                    </div>
                    <div className="categoryCard__content text-center">
                      <h4 className="categoryCard__title text-17 lh-15 fw-500 text-white">
                        {elm?.cat_name}
                      </h4>
                      <div className="categoryCard__subtitle text-13 text-white lh-1 mt-5">
                        {elm?.number_of_courses}+ Courses
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


