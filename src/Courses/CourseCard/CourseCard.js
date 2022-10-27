import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ category }) => {
  const { id, name, photo } = category;
  return (
    <div>
      <Link to={`/categories/${id}`}>
        <div className="card  bg-base-100 shadow-xl image-full h-full ">
          <figure>
            <img src={photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className=" text-yellow-400 text-4xl font-bold  card-title mt-24">
              {name}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
