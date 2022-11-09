import React from "react";
import Envelop from "../../../svgs/envelop";
import ContactForm from "./contactFrom";
import { Input, FormGroup, Button } from "../../../common/form";
import { useContext, useState } from "react";
import { PriceCalculatorContext } from "../../priceEstimation/priceContainerContext";

// import { FormGroup } from "../../../common/form";

const Contact = ({ formPriceContainer }: any) => {
  const { currentStepIndex, setCurrentStepIndex, values } = useContext(
    PriceCalculatorContext
  );

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
            {formPriceContainer ? (
              <div className="stepsIndicator">
                Step <span>4</span>/4
              </div>
            ) : null}
            <ContactForm />
            {formPriceContainer ? (
              <svg
                onClick={() => {
                  setCurrentStepIndex(currentStepIndex - 1);
                }}
                className="mt-4 pointer"
                width="102"
                height="48"
                viewBox="0 0 102 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="102" height="48" rx="12" fill="#F5F8FD" />
                <path
                  d="M39.758 24.002C40.2807 24.0953 40.724 24.3707 41.088 24.828C41.452 25.2853 41.634 25.8033 41.634 26.382C41.634 26.8767 41.5033 27.3247 41.242 27.726C40.99 28.118 40.6213 28.4307 40.136 28.664C39.6507 28.888 39.086 29 38.442 29H34.55V19.27H38.26C38.9227 19.27 39.492 19.382 39.968 19.606C40.444 19.83 40.8033 20.1333 41.046 20.516C41.2887 20.8893 41.41 21.3093 41.41 21.776C41.41 22.336 41.2607 22.8027 40.962 23.176C40.6633 23.5493 40.262 23.8247 39.758 24.002ZM36.146 23.358H38.12C38.6427 23.358 39.0487 23.2413 39.338 23.008C39.6367 22.7653 39.786 22.42 39.786 21.972C39.786 21.5333 39.6367 21.1927 39.338 20.95C39.0487 20.698 38.6427 20.572 38.12 20.572H36.146V23.358ZM38.302 27.698C38.8433 27.698 39.268 27.5673 39.576 27.306C39.884 27.0447 40.038 26.6807 40.038 26.214C40.038 25.738 39.8747 25.36 39.548 25.08C39.2213 24.8 38.7873 24.66 38.246 24.66H36.146V27.698H38.302ZM42.8364 25.108C42.8364 24.3333 42.995 23.6473 43.3124 23.05C43.639 22.4527 44.0777 21.9907 44.6284 21.664C45.1884 21.328 45.8044 21.16 46.4764 21.16C47.083 21.16 47.6104 21.2813 48.0584 21.524C48.5157 21.7573 48.8797 22.0513 49.1504 22.406V21.286H50.7604V29H49.1504V27.852C48.8797 28.216 48.511 28.5193 48.0444 28.762C47.5777 29.0047 47.0457 29.126 46.4484 29.126C45.7857 29.126 45.179 28.958 44.6284 28.622C44.0777 28.2767 43.639 27.8007 43.3124 27.194C42.995 26.578 42.8364 25.8827 42.8364 25.108ZM49.1504 25.136C49.1504 24.604 49.0384 24.142 48.8144 23.75C48.5997 23.358 48.315 23.0593 47.9604 22.854C47.6057 22.6487 47.223 22.546 46.8124 22.546C46.4017 22.546 46.019 22.6487 45.6644 22.854C45.3097 23.05 45.0204 23.344 44.7964 23.736C44.5817 24.1187 44.4744 24.576 44.4744 25.108C44.4744 25.64 44.5817 26.1067 44.7964 26.508C45.0204 26.9093 45.3097 27.2173 45.6644 27.432C46.0284 27.6373 46.411 27.74 46.8124 27.74C47.223 27.74 47.6057 27.6373 47.9604 27.432C48.315 27.2267 48.5997 26.928 48.8144 26.536C49.0384 26.1347 49.1504 25.668 49.1504 25.136ZM52.3246 25.136C52.3246 24.3427 52.4833 23.6473 52.8006 23.05C53.1273 22.4433 53.5753 21.9767 54.1446 21.65C54.714 21.3233 55.3673 21.16 56.1046 21.16C57.038 21.16 57.808 21.384 58.4146 21.832C59.0306 22.2707 59.446 22.9007 59.6606 23.722H57.9386C57.7986 23.3393 57.5746 23.0407 57.2666 22.826C56.9586 22.6113 56.5713 22.504 56.1046 22.504C55.4513 22.504 54.9286 22.7373 54.5366 23.204C54.154 23.6613 53.9626 24.3053 53.9626 25.136C53.9626 25.9667 54.154 26.6153 54.5366 27.082C54.9286 27.5487 55.4513 27.782 56.1046 27.782C57.0286 27.782 57.64 27.376 57.9386 26.564H59.6606C59.4366 27.348 59.0166 27.9733 58.4006 28.44C57.7846 28.8973 57.0193 29.126 56.1046 29.126C55.3673 29.126 54.714 28.9627 54.1446 28.636C53.5753 28.3 53.1273 27.8333 52.8006 27.236C52.4833 26.6293 52.3246 25.9293 52.3246 25.136ZM64.3032 25.15L67.8592 29H65.7032L62.8472 25.682V29H61.2512V18.64H62.8472V24.66L65.6472 21.286H67.8592L64.3032 25.15Z"
                  fill="#182939"
                />
              </svg>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
