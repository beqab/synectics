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
          <div className="col-md-6 contact">
            <h2>Let’s Discuss your Project</h2>
            <p className="contact_p">
              Fill out the form below to receive a free consultation and find
              out how Andersen can help your business grow.
            </p>
            <div className="contact_steps">
              <h3>What happens next?</h3>
              <div className="contact_step">
                <div className="contact_stepNumber">1</div>
                <div className="contact_stepText">
                  An expert contacts you shortly after having analyzed your
                  business requirements;
                </div>
              </div>
              <div className="contact_step">
                <div className="contact_stepNumber">2</div>
                <div className="contact_stepText">
                  When required by you, we sign an NDA to ensure the highest
                  privacy level;
                </div>
              </div>
              <div className="contact_step">
                <div className="contact_stepNumber">3</div>
                <div className="contact_stepText">
                  A Pre-Sales Manager submits a comprehensive project proposal.
                  It may include estimates, timelines, lists of CVs, etc., for a
                  particular situation;
                </div>
              </div>
              <div className="contact_step">
                <div className="contact_stepNumber">4</div>
                <div className="contact_stepText">
                  The team assembled for your IT project can start delivering
                  within ten business days.
                </div>
              </div>
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
