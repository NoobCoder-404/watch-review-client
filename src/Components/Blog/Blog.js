/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
  useTitle('Blog');
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              Difference between SQL and NoSQL
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body py-4 px-5">
              <ol className="text-grey">
                <li>
                  SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational
                  Databases, whereas NoSQL is a Non-relational or Distributed Database.
                </li>
                <li>
                  Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas
                  NoSQL databases can be document-based, key-value pairs, and graph databases.
                </li>
                <li>
                  SQL databases are vertically scalable, while NoSQL databases are horizontally
                  scalable.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo">
              What is JWT, and how does it work?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div className="accordion-body py-4 px-5 ">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting
              information between parties as JSON object. It is compact, readable and digitally
              signed using a private key/ or a public key pair by the Identity Provider(IdP).
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree">
              What is the difference between javascript and NodeJS?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body py-4 px-5">
              JavaScript is a simple programming language that can be used with any browser that has
              the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or
              execution environment for the JavaScript programming language.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingFour">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour">
              How does NodeJS handle multiple requests at the same time?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample">
            <div className="accordion-body py-4 px-5">
              They handle 40K requests per second having Node.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
