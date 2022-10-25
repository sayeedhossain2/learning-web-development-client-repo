import React from "react";

const PremiumCourseDetails = ({ category }) => {
  console.log(category);
  const { details, id, name, photo, duration } = category;
  return (
    <div>
      <div className="card w-96 lg:w-2/4 mt-14 mx-auto bg-base-100 shadow-xl bg-red-100">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold text-xl text-blue-700"> ID: {id}</p>
          <p className="font-bold text-xl text-purple-700">
            Duration: {duration}
          </p>
          <p>{details}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCourseDetails;
