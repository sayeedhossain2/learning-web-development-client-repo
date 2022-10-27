import React from "react";

const Home = () => {
  return (
    <div>
      {/* card 1 */}
      <div className="lg:grid grid-cols-2 my-20 w-4/5 mx-auto">
        <img className=" lg:w-3/4 rounded-lg" src="program2.jpg" alt="" />
        <div className="">
          <h1 className="text-4xl font-bold my-5  text-orange-500">
            <span className="text-rose-600">Web</span> Development
          </h1>
          <p>
            <span className="text-xl font-bold"> Web development</span> is the
            work involved in developing a website for the Internet (World Wide
            Web) or an intranet (a private network).[1] Web development can
            range from developing a simple single static page of plain text to
            complex web applications, electronic businesses, and social network
            services.
            <br /> <br />
            If you are a complete beginner, web development can be challenging —
            we will hold your hand and provide enough detail for you to feel
            comfortable and learn the topics properly. You should feel at home
            whether you are a student learning web development (on your own or
            as part of a class), a teacher looking for class materials, a
            hobbyist, or someone who just wants to understand more about how web
            technologies work.
          </p>
        </div>
      </div>

      {/* card 2 */}
      <div className="lg:grid grid-cols-2 mt-5 rounded-xl bg-black text-white shadow-xl p-5 my-20 w-4/5 mx-auto">
        <div className="lg:mr-5">
          <h1 className="text-4xl font-bold my-5  text-orange-500">
            Learning <span className="text-rose-600">J</span>avascript
          </h1>
          <p>
            <span className="text-xl font-bold"> JAVASCRIPT</span> often
            abbreviated as JS, is a programming language that is one of the core
            technologies of the World Wide Web, alongside HTML and CSS. As of
            2022, 98% of websites use JavaScript on the client side for webpage
            behavior, often incorporating third-party libraries. All major web
            browsers have a dedicated JavaScript engine to execute the code on
            users' devices. JavaScript is a high-level, often just-in-time
            compiled language that conforms to the ECMAScript standard.[10] It
            has dynamic typing,
          </p>
        </div>

        <img
          // style={{ height: "70vh", width: "30vw" }}
          className=" rounded-xl mt-10 lg:mt-0 scale-[97%] hover:scale-[100%] duration-500"
          src="program1.jpg"
          alt=""
        />
      </div>

      {/* card 3 */}
      <div className="lg:grid grid-cols-2 bg-rose-500 rounded-xl p-5  my-20 w-4/5 mx-auto">
        <img
          className=" rounded-lg scale-[97%] hover:scale-[100%] duration-500"
          src="program5.jpeg"
          alt=""
        />
        <div className=" ml-5">
          <h1 className="text-4xl font-bold my-5  text-black">
            Learning <span className="text-yellow-400">R</span>eact
          </h1>
          <p className="text-white">
            <span className="text-xl text-white font-bold">React</span>(also
            known as React.js or ReactJS) is a free and open-source front-end
            JavaScript library[3] for building user interfaces based on UI
            components. It is maintained by Meta (formerly Facebook) and a
            community of individual developers and companies.[4][5][6] React can
            be used as a base in the development of single-page, mobile, or
            server-rendered applications with frameworks like Next.js. However,
            React is only concerned with state management and rendering that
            state to the DOM, so creating React applications usually requires
            the use of additional libraries for routing, as well as certain
            client-side functionality.
          </p>
        </div>
      </div>

      <div>
        {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        ;
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_0yfsb3a1.json"
          background="transparent"
          speed="1"
          style="width: 300px; height: 300px;"
          loop
          controls
          autoplay
        ></lottie-player> */}
      </div>
    </div>
  );
};

export default Home;
