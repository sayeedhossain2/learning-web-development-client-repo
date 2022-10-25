import React from "react";
import { useLoaderData } from "react-router-dom";

const AllCourseDetails = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      <h2>all course details page {categories.length}</h2>

      <div className="card w-96 lg:w-2/4 mt-14 mx-auto bg-base-100 shadow-xl bg-red-100">
        <figure>
          <img src={categories.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {categories.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{categories.id}</p>
          <p>{categories.details}</p>
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline">Fashion</div> */}
            <div className="badge badge-outline">Products</div>
            <button className="btn btn-outline btn-info">Fashion</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourseDetails;
