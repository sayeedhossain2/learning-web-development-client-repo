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
              why are you using firebase? what other options do you have to
              implement authentication?
            </h1>
            <p>ftgh</p>
          </div>

          {/* no 3 question */}
          <div className="bg-pink-600 rounded-xl text-white p-5 ">
            <h1 className="text-2xl font-bold mb-5">
              How does the private route work?
            </h1>
            <p>gfhhgfyu</p>
          </div>

          {/* no 4 question */}
          <div className="bg-pink-600 rounded-xl text-white p-5 ">
            <h1 className="text-2xl font-bold mb-5">
              What is Node? how does node work?
            </h1>
            <p>gfhfgyh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
