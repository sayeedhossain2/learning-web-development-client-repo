import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import { FaAngleRight } from "react-icons/fa";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetch("http://localhost:5000/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-[1fr_3fr]  mx-5">
      {/* left side */}
      <div className="border-2 border-red-400">
        <h2>this is courses list {categories.length}</h2>
        <div>
          {categories.map((category) => (
            <p
              className=" text-rose-400 text-4xl font-bold mb-5 "
              key={category.id}
            >
              <button className=" text-4xl btn btn-outline btn-secondary">
                <Link>{category.name}</Link>
              </button>
            </p>
          ))}
        </div>
      </div>
      {/* right side */}
      <div className="grid lg:grid-cols-2 gap-5 lg:ml-5 px-20 pt-5 border-2 border-red-400 ">
        {/* <h2>this is course title</h2> */}
        {categories.map((category) => (
          <CourseCard key={category.id} category={category}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
