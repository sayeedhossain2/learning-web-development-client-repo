import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Link to="/blogone">
        <button className="btn btn-info"> blogone</button>
      </Link>
      <h1 className="mb-14 mt-10 text-4xl font-bold text-teal-700">
        Few Important Question and Answer Here
      </h1>

      <div className=" w-2/3 gap-8 mx-auto grid lg:grid-cols-2">
        {/* no 1 question */}
        <div className="bg-pink-600 rounded-xl text-white p-5 ">
          <h1 className="text-2xl font-bold mb-5">What is cors?</h1>
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-based security
            mechanism controlled and enforced by the client (web browser). It
            allows a service (API) to indicate any origin other than its own
            from which the client can request resources. It has been designed in
            response to the same-origin policy (SOP) that restricts how a
            website (HTML document or JS script) loaded by one origin can
            interact with a resource from another origin. CORS is used to
            explicitly allow some cross-origin requests while rejecting others.
          </p>
        </div>

        {/* no 2 question */}
        <div className="bg-pink-600 rounded-xl text-white p-5 ">
          <h1 className="text-2xl font-bold mb-5 ">
            why are you using firebase? what other options do you have to
            implement authentication?
          </h1>
          <p>
            Firebase is an all-in-one backend as a service provider (BaaS) that
            provides a database, authentication, and cloud storage among its
            many services.
            <br />
            Firebase's easy-to-use SDK, ready-made UI libraries, and backend
            services, it is possible to set up the whole authentication process
            in just a couple of minutes. Firebase allows users to authenticate
            with their phone number, email, Google, and Facebook accounts
            <br />
            <br />
            Authentication is the process of identifying users that request
            access to a system, network, or device. Access control often
            determines user identity according to credentials like username and
            password. Other authentication technologies like biometrics and
            authentication apps are also used to authenticate user identity.
          </p>
        </div>

        {/* no 3 question */}
        <div className="bg-pink-600 rounded-xl text-white p-5 ">
          <h1 className="text-2xl font-bold mb-5">
            How does the private route work?
          </h1>
          <p>
            Private Routes in React Router (also called Protected Routes)
            require a user being authorized to visit a route (read: page). So if
            a user is not authorized for a specific page, they cannot access it.
            The most common example is authentication in a React application
            where a user can only access the protected pages when they are
            authorized (which means in this case being authenticated).
            Authorization goes beyond authentication though. For example, a user
            can also have roles and permissions which give a user access to
            specific areas of the application.
            <br />
            <br />
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
          </p>
        </div>

        {/* no 4 question */}
        <div className="bg-pink-600 rounded-xl text-white p-5 ">
          <h1 className="text-2xl font-bold mb-5">
            What is Node? how does node work?
          </h1>
          <p>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
            <br />
            <br />
            Working of Node.js: Node.js accepts the request from the clients and
            sends the response, while working with the request node.js handles
            them with a single thread. To operate I/O operations or requests
            node.js use the concept of threads. Thread is a sequence of
            instructions that the server needs to perform. It runs parallel on
            the server to provide the information to multiple clients. Node.js
            is an event loop single-threaded language. It can handle concurrent
            requests with a single thread without blocking it for one request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
