import Link from "next/link";
import React from "react";
import Estimate from "../../svgs/estimate";

const EstimatePrice = () => {
  return (
    <div className="estimatePrice_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Estimate the Price.</h2>
            <p>
              An estimated price is a forecast that is related to the price of
              project. The primary reason of price estimation is to give
              businesses some numbers which can be used to determine future
              costs.
            </p>
            <div className="text-center w-100">
              <Link href="/estimatePrice">
                <a className="btn btn-primary d-none d-md-flex">
                  Estimate Price
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="col-md-6 text-center">
            <Estimate />
            <div className="text-center">
              <Link href="/estimatePrice">
                <a className="btn m-auto btn-primary btn-primary-fill d-flex d-md-none">
                  Estimate Price
                </a>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EstimatePrice;
