import React from "react";

const Home = () => {
  return (
    <div>
      <img
        style={{ height: "90vh", width: "100vw" }}
        src="program3.jpg"
        alt=""
      />
      <div className="lg:grid grid-cols-2 my-20 w-4/5 mx-auto">
        <img
          style={{ height: "70vh", width: "30vw" }}
          className=""
          src="program2.jpg"
          alt=""
        />
        <div className="">
          <h1 className="text-3xl">Learning Web developer</h1>
          <p>
            Web development is the work involved in developing a website for the
            Internet (World Wide Web) or an intranet (a private network).[1] Web
            development can range from developing a simple single static page of
            plain text to complex web applications, electronic businesses, and
            social network services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
