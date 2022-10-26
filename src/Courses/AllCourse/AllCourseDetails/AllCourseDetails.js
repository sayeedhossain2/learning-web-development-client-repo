import React from "react";
import Pdf from "react-to-pdf";
import { Link, useLoaderData } from "react-router-dom";

const ref = React.createRef();

const AllCourseDetails = () => {
  const categories = useLoaderData();
  //   console.log(categories);
  return (
    <div>
      {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}

      <h2>all course details page {categories.length}</h2>

      <div
        ref={ref}
        className="card w-96 lg:w-2/4 mt-14 mx-auto bg-base-100 shadow-xl bg-red-100"
      >
        <figure>
          <img src={categories.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {categories.name}

            <Pdf targetRef={ref} filename="Web-Development-SubJect.pdf">
              {({ toPdf }) => (
                <button onClick={toPdf}>
                  <div className="badge badge-secondary">Download PDF</div>
                </button>
              )}
              {/* <div className="badge badge-secondary">Download PDF</div> */}
            </Pdf>
          </h2>
          <p>{categories.id}</p>
          <p>{categories.details}</p>
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline">Fashion</div> */}
            <div className="badge badge-outline">Products</div>
            <Link to={`/book/${categories.id}`}>
              <button button className="btn  btn-info">
                Get premium access
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourseDetails;

/* 
import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blogone = () => {
  return (
    <div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>

      <div ref={ref}>
        <h1>this is pdf</h1>
      </div>
    </div>
  );
};

export default Blogone;
*/
