import React from "react";

const Faq = () => {
  return (
    <div>
      <div>
        <h2 className="mb-10 mt-5 text-2xl font-bold text-red-700">
          What is included in this project is given below
        </h2>

        <div className=" w-2/3 gap-8 mx-auto grid lg:grid-cols-2">
          {/* no 1 question */}
          <div className="bg-pink-600 rounded-xl text-white p-5 ">
            <h1 className="text-2xl font-bold mb-5"> Project Name </h1>
            <p>WEB DEVELOPMENT</p>
          </div>

          {/* no 2 question */}
          <div className="bg-pink-600 rounded-xl text-white p-5 ">
            <h1 className="text-2xl font-bold mb-5 ">
              what i am using framework this project
            </h1>
            <p>I am using Tailwind framework in this project</p>
          </div>

          {/* no 3 question */}
          <div className="bg-pink-600 rounded-xl text-white p-5 ">
            <h1 className="text-2xl font-bold mb-5">
              what is speciality in this project
            </h1>
            <p>
              this project have some speciality method , so one of speciality
              you can you will detail page download just tap download icon
              button <br />
              another speciality is you can no go to premium page without login,
              because this page is private, so only registerd publick can go to
              premium page,
            </p>
          </div>

          {/* no 4 question */}
          <div className="bg-pink-600 rounded-xl text-white p-5 ">
            <h1 className="text-2xl font-bold mb-5">Light and Dark mood</h1>
            <p>
              another speciality is you can this website dark and light mood,
              just tab light mood for light and just tab dark button for dark
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
