import React from "react";
import Pdf from "react-to-pdf";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const ref = React.createRef();

const AllCourseDetails = () => {
  const Swal = require("sweetalert2");
  const categories = useLoaderData();

  return (
    <div>
      <div
        ref={ref}
        className="card w-96 lg:w-2/4 mt-14 mx-auto bg-base-100 shadow-xl bg-red-100"
      >
        <figure>
          <img src={categories.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-4">
            {categories.name}

            <Pdf targetRef={ref} filename="Web-Development-SubJect.pdf">
              {({ toPdf }) => (
                <button onClick={toPdf}>
                  <div className="badge badge-secondary ">
                    Download PDF <FaDownload className="ml-2 " />
                  </div>
                </button>
              )}
            </Pdf>
          </h2>

          <p>{categories.details}</p>
          <div className="card-actions justify-end mt-5">
            <Link to={`/book/${categories.id}`}>
              <button
                onClick={() =>
                  Swal.fire(
                    "Congratulations!",
                    "You purchased this course!",
                    "success"
                  )
                }
                button
                className="btn  btn-info"
              >
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
Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
*/
