import Link from "next/link";
import React from "react";
import Earth from "../../svgs/earth";

const OutGlobal = () => {
  return (
    <div className="sutGlobal_wrapper">
      <div className="container">
        <h2>Our Global Presence</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div className="sutGlobal_count">
          <div>
            <span>55+</span>
            <h3>Professional Team Members</h3>
          </div>
          <div>
            <span>4</span>
            <h3 className="onelINe">Countries </h3>
          </div>
          <div>
            <span>150+</span>
            <h3 className="b-0">Projects Completed </h3>
          </div>
        </div>
        <div className="d-flex align-items-center sutGlobal_aboutLink">
          <h4>Get to know us better</h4>
          <Link href={"/"}>
            <a className="btn btn-primary btn-primary-fill">About Us</a>
          </Link>
        </div>
      </div>
      <Earth />
    </div>
  );
};

export default OutGlobal;
