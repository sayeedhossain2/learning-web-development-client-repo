import React from "react";
import { FaEye } from "react-icons/fa";

const PremiumCourseDetails = ({ category }) => {
  console.log(category);
  const { details, id, name, photo, duration, Rating, view } = category;

  return (
    <div>
      <div className="card w-96 lg:w-2/4 mt-14 mx-auto bg-base-100 shadow-xl bg-red-100">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">{name}</h2>
          <div className="flex justify-between mb-2">
            <div>
              <p className="font-bold text-xl text-purple-700"> ID: {id}</p>
              <p className="font-bold text-xl text-purple-700 flex items-center">
                <FaEye /> <span className="pl-3">{view}</span>
              </p>
            </div>
            <div>
              <p className="font-bold text-xl text-purple-700">
                Rating: {Rating}
              </p>
              <p className="font-bold text-xl text-purple-700">
                Duration: {duration}
              </p>
            </div>
          </div>
          <p>{details}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCourseDetails;
