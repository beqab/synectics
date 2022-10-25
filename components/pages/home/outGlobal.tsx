import Link from "next/link";
import React from "react";
import Earth from "../../svgs/earth";

const OutGlobal = () => {
  return (
    <div className="sutGlobal_wrapper">
      <div className="container">
        <h2>Our Global Presence</h2>
        <p>
          Our expanding market presence brings us closer to our local and
          regional customers and gives us greater capability to serve these
          customers through a global workforce that is dedicated to establishing
          and maintaining true partnerships.
        </p>
        <div className="sutGlobal_count">
          <div>
            <span>100+</span>
            <h3>Professional Team Members</h3>
          </div>
          <div>
            <span>150+</span>
            <h3 className="onelINe"> Projects Completed </h3>
          </div>
          <div>
            <span>4</span>
            <h3 className="b-0">Countries </h3>
          </div>
        </div>
        {/* <div className="d-flex align-items-center sutGlobal_aboutLink">
          <h4>Get to know us better</h4>
          <Link href={"/aboutUs"}>
            <a className="btn btn-primary btn-primary-fill">About Us</a>
          </Link>
        </div> */}
      </div>

      <Earth />
    </div>
  );
};

export default OutGlobal;
