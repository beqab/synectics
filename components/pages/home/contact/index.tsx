import React from "react";
import Envelop from "../../../svgs/envelop";
import ContactForm from "./contactFrom";
import { Input, FormGroup, Button } from "../../../common/form";
// import { FormGroup } from "../../../common/form";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Let’s Discuss your Project</h2>
            <p>
              Get your project estimations for well-informed business decisions
              and top-notch digital outcomes.
            </p>
            <div className="img-wrapper">
              <img src="/imgs/email 1.svg" />
            </div>
          </div>
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
