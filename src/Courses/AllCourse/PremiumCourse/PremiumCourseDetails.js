import React from "react";

const PremiumCourseDetails = ({ category }) => {
  console.log(category);
  const { details, id, name, photo } = category;
  return (
    <div>
      <h2>this is premium course details</h2>

      <div className="card w-96 lg:w-2/4 mt-14 mx-auto bg-base-100 shadow-xl bg-red-100">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">Download PDF</div>
          </h2>
          <p>{id}</p>
          <p>{details}</p>
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline">Fashion</div> */}
            <div className="badge badge-outline">Products</div>
            {/* <Link to={`/book/${categories.id}`}>
              <button button className="btn  btn-info">
                Get premium access
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCourseDetails;
