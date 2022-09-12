import Link from "next/link";
import React from "react";
import CollaboratorImg from "../../svgs/CollaboratorImg";

const Collaboration = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h2>Collaboration Models</h2>
          <p className="mb-5 mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <div className="collaboration_card">
            <h4>Team Augmentation</h4>
            <p>Augment your software team with proven IT Experts.</p>
          </div>
          <div className="collaboration_card greenBorder">
            <h4>Outsourced IT Service</h4>
            <p>
              Focus on what really matters for your business bu entrusting
              outsourced IT services to Synetics.
            </p>
          </div>
          <div className="collaboration_card blueBorder">
            <h4>Product Development</h4>
            <p>
              Turn your Idea into lief with an expert level product development
              Team.
            </p>
          </div>
          <div className="d-flex align-items-center collaboration_more ">
            <h4>Want to know more about Collaboration Models?</h4>
            <Link href={"/"}>
              <a>
                <svg
                  width="49"
                  height="48"
                  viewBox="0 0 49 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="48"
                    height="47"
                    rx="23.5"
                    stroke="#1C55E9"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.2929 31.7071C24.9023 31.3166 24.9023 30.6834 25.2929 30.2929L29.2929 26.2929C29.6834 25.9024 30.3166 25.9024 30.7071 26.2929C31.0976 26.6834 31.0976 27.3166 30.7071 27.7071L26.7071 31.7071C26.3166 32.0976 25.6834 32.0976 25.2929 31.7071ZM33.9239 24.3828C33.7691 24.7564 33.4044 25.0001 33 25.0001L15 25.0001C14.4477 25.0001 14 24.5524 14 24.0001C14 23.4478 14.4477 23.0001 15 23.0001L30.5858 23.0001L25.2929 17.7072C24.9023 17.3167 24.9023 16.6835 25.2929 16.293C25.6834 15.9024 26.3166 15.9024 26.7071 16.293L33.7071 23.293C33.9931 23.579 34.0786 24.0091 33.9239 24.3828Z"
                    fill="#1C55E9"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="col-md-5 d-none d-md-block">
          <CollaboratorImg />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
