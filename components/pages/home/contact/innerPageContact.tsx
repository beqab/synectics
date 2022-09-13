import React from "react";
import Contact from "./contactFrom";

const InnerPageContact = () => {
  return (
    <section className="innerPageContactSection">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Let’s Discuss your Project</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <Contact />
          </div>
          <div className="col-md-6 pt-3">
            <img src="/imgs/contactGuy.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerPageContact;
