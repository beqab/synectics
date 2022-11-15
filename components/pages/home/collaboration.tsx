import Link from "next/link";

import React, { useState } from "react";
import CollaboratorImg from "../../svgs/CollaboratorImg";
import classNames from "classnames";

const Collaboration = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const setToggleOpenIndex = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((el) => el !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="container-fluid collaboration_container">
      <div className="row">
        <div className="col-md-7">
          <h2>Collaboration Models</h2>
          <p className="mb-md-5 mb-4 mt-md-4">
            With years of experience, we understand the different outsourcing
            engagement models and how to best use them to suit your needs and
            requirements
          </p>
          <div
            onClick={() => setToggleOpenIndex(1)}
            className={classNames(
              "collaboration_card d-flex flex-align-start",
              {
                isOpen: openIndexes.includes(1),
              }
            )}
          >
            <div className="d-flex">
              <svg
                className="index"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="8"
                  fill="#2F80ED"
                  fill-opacity="0.12"
                />
                <path
                  d="M17.1022 16.722V13.86H22.0882V27H18.8842V16.722H17.1022Z"
                  fill="#2F80ED"
                />
              </svg>

              <div className="info">
                <h4>Team Augmentation</h4>
                <p>
                  We will provide you with a pre-discussed amount of software
                  engineers and IT specialists required to realize your project
                  of any size
                </p>
              </div>
            </div>
            <svg
              className="arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 10L12.0368 16.9632L5.07366 10"
                stroke="#182939"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div
            onClick={() => setToggleOpenIndex(2)}
            className={classNames(
              "collaboration_card d-flex flex-align-start",
              {
                isOpen: openIndexes.includes(2),
              }
            )}
          >
            <div className="d-flex">
              <svg
                className="index"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="8"
                  fill="#FF9900"
                  fill-opacity="0.12"
                />
                <path
                  d="M15.5604 24.534C15.9684 24.21 16.1544 24.06 16.1184 24.084C17.2944 23.112 18.2184 22.314 18.8904 21.69C19.5744 21.066 20.1504 20.412 20.6184 19.728C21.0864 19.044 21.3204 18.378 21.3204 17.73C21.3204 17.238 21.2064 16.854 20.9784 16.578C20.7504 16.302 20.4084 16.164 19.9524 16.164C19.4964 16.164 19.1364 16.338 18.8724 16.686C18.6204 17.022 18.4944 17.502 18.4944 18.126H15.5244C15.5484 17.106 15.7644 16.254 16.1724 15.57C16.5924 14.886 17.1384 14.382 17.8104 14.058C18.4944 13.734 19.2504 13.572 20.0784 13.572C21.5064 13.572 22.5804 13.938 23.3004 14.67C24.0324 15.402 24.3984 16.356 24.3984 17.532C24.3984 18.816 23.9604 20.01 23.0844 21.114C22.2084 22.206 21.0924 23.274 19.7364 24.318H24.5964V26.82H15.5604V24.534Z"
                  fill="#FF9900"
                />
              </svg>

              <div className="info">
                <h4>Outsourced IT Service</h4>
                <p>
                  We provide IT outsourcing solutions to cater to the
                  requirements of the clients. We take full responsibility for
                  the results we deliver
                </p>
              </div>
            </div>
            <svg
              className="arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 10L12.0368 16.9632L5.07366 10"
                stroke="#182939"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div
            onClick={() => setToggleOpenIndex(3)}
            className={classNames(
              "collaboration_card d-flex flex-align-start",
              {
                isOpen: openIndexes.includes(3),
              }
            )}
          >
            <div className="d-flex">
              <svg
                className="index"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="8"
                  fill="#FB5759"
                  fill-opacity="0.12"
                />
                <path
                  d="M15.4688 17.568C15.5168 16.284 15.9368 15.294 16.7288 14.598C17.5208 13.902 18.5948 13.554 19.9508 13.554C20.8508 13.554 21.6188 13.71 22.2548 14.022C22.9028 14.334 23.3888 14.76 23.7128 15.3C24.0488 15.84 24.2168 16.446 24.2168 17.118C24.2168 17.91 24.0188 18.558 23.6228 19.062C23.2268 19.554 22.7648 19.89 22.2368 20.07V20.142C22.9208 20.37 23.4608 20.748 23.8568 21.276C24.2528 21.804 24.4508 22.482 24.4508 23.31C24.4508 24.054 24.2768 24.714 23.9288 25.29C23.5928 25.854 23.0948 26.298 22.4348 26.622C21.7868 26.946 21.0128 27.108 20.1128 27.108C18.6728 27.108 17.5208 26.754 16.6568 26.046C15.8048 25.338 15.3548 24.27 15.3068 22.842H18.2948C18.3068 23.37 18.4568 23.79 18.7448 24.102C19.0328 24.402 19.4528 24.552 20.0048 24.552C20.4728 24.552 20.8328 24.42 21.0848 24.156C21.3488 23.88 21.4808 23.52 21.4808 23.076C21.4808 22.5 21.2948 22.086 20.9228 21.834C20.5628 21.57 19.9808 21.438 19.1768 21.438H18.6008V18.936H19.1768C19.7888 18.936 20.2808 18.834 20.6528 18.63C21.0368 18.414 21.2288 18.036 21.2288 17.496C21.2288 17.064 21.1088 16.728 20.8688 16.488C20.6288 16.248 20.2988 16.128 19.8788 16.128C19.4228 16.128 19.0808 16.266 18.8528 16.542C18.6368 16.818 18.5108 17.16 18.4748 17.568H15.4688Z"
                  fill="#FB5759"
                />
              </svg>

              <div className="info">
                <h4>Product Development</h4>
                <p>
                  The involvement of the customer is limited. During the
                  development process, the requirements can’t be changed
                </p>
              </div>
            </div>
            <svg
              className="arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 10L12.0368 16.9632L5.07366 10"
                stroke="#182939"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="d-none d-md-flex align-items-center collaboration_more ">
            <Link href={"/itOutsourcing"}>
              <a className="btn btn-primary d-flex">Explore More</a>
            </Link>
          </div>
        </div>
        <div className="col-md-5 d-md-block ">
          {/* <CollaboratorImg /> */}
          <img className="mt-md-5 collaboration_img " src="/imgs/macBook.svg" />

          <div className="d-flex d-md-none align-items-center collaboration_more ">
            <Link href={"/itOutsourcing"}>
              <a className="btn btn-primary w-100 d-flex">Explore More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
