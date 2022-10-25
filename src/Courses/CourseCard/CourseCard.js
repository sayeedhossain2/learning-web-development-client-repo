import React from "react";

const CourseCard = ({ category }) => {
  const { id, name, photo } = category;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full h-full">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className=" text-yellow-400 text-4xl font-bold  card-title mt-24">
            {" "}
            {name}
          </h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>

      {/* 
      
<div className="card w-96 bg-base-100 shadow-xl">
<figure>
<img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">
      Shoes!
<div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
      
      */}
    </div>
  );
};

export default CourseCard;
