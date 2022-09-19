import Link from "next/link";
import React from "react";
import Estimate from "../../svgs/estimate";

const EstimatePrice = () => {
  return (
    <div className="estimatePrice_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>
              Estimate the Price.
              <span>We Can Help.</span>
            </h2>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
            <Link href="/">
              <a className="btn btn-light d-none d-md-flex">Estimate Price</a>
            </Link>
          </div>
          <div className="col-md-6 text-center">
            <Estimate />
            <div className="text-center">
              <Link href="/estimatePrice">
                <a className="btn m-auto btn-primary btn-primary-fill d-flex d-md-none">
                  Estimate Price
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimatePrice;
