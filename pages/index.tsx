import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Services from "../components/pages/home/services";
import Technologies from "../components/pages/home/technologies";
import Collaboration from "../components/pages/home/collaboration";
import Approach from "../components/pages/home/approach";
import OutGlobal from "../components/pages/home/outGlobal";
import EstimatePrice from "../components/pages/home/estimatePrice";
import Contact from "../components/pages/home/contact";

// import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css";

// import "react-owl-carousel2/style.css";

const IndexPage = () => {
  let { t } = useTranslation("common");
  const router = useRouter();

  console.log(router.locales, "ttttttttt");
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="home">
        <section className="welcomeSection">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="welcomeSection_content">
                  <h1>
                    Your Journey to <br />
                    <span>Digital Transformation </span>
                    Starts Here
                  </h1>
                  <p>
                    Synectics works in collaboration with it's customers to
                    deliver next-gen solutions that turn complex business
                    challenges into real business outcomes
                  </p>
                  <div className="d-flex align-items-center">
                    <Link href="/contact">
                      <a className="btn btn-primary  btn-primary-fill">
                        Contact Us
                      </a>
                    </Link>
                    <svg
                      className="curlSvg"
                      width="69"
                      height="49"
                      viewBox="0 0 69 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M52.0755 5.63124C49.8302 6.49845 50.8951 10.5992 53.1387 9.73279C55.759 8.72114 58.3788 7.70938 60.999 6.69728C54.7661 15.0957 46.1494 22.0741 36.0093 24.7386C34.1818 25.2187 31.7919 25.6199 29.404 25.6299C26.4326 18.8591 21.1622 10.3462 16.6537 15.7915C14.5331 18.3527 15.7941 22.9704 17.794 25.1932C19.9702 27.6116 23.26 28.5424 26.4565 28.7706C26.9567 30.105 27.3716 31.465 27.6666 32.8314C28.3438 35.9673 29.0539 42.4596 25.8178 44.5943C23.3097 46.2482 19.1838 42.9575 17.3222 41.502C12.2774 37.5565 7.88193 32.4644 4.12937 27.2626C2.99887 25.6959 -0.685812 27.7025 0.386735 29.1882C5.06202 35.6687 10.7994 42.8018 17.9018 46.6027C28.0514 52.0355 33.4899 41.1365 31.7045 32.0712C31.5754 31.4164 31.207 30.2074 30.6565 28.7198C43.508 27.6777 55.1047 19.1003 63.1007 9.02152C62.675 11.4417 62.2494 13.8619 61.8242 16.2822C61.3953 18.7224 64.9663 20.2399 65.4437 17.524C66.2913 12.7029 67.1389 7.88198 67.9865 3.06133C68.2033 1.82944 67.1823 -0.20377 65.6454 0.389354C61.1211 2.13702 56.5979 3.88359 52.0747 5.63032L52.0755 5.63124ZM19.6918 19.4033C19.6767 19.2986 19.6928 18.992 19.7107 18.64C20.5142 19.4879 21.7552 20.3772 22.3306 21.1523C23.2276 22.3603 24.0427 23.6637 24.7677 25.0238C22.1776 24.2253 20.1472 22.5416 19.6917 19.4034L19.6918 19.4033Z"
                        fill="#2F80ED"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-md-5 d-block  d-md-flex align-items-center flex-column justify-content-center">
                <img
                  className="mainSectionImg"
                  src="/imgs/Group 1000001860.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="servicesSection roundBottom roundBottom-wight">
          <Services />
        </section>
        <section id="technologies" className="technology">
          <Technologies />
        </section>
        <section className="collaboration  roundBottom roundBottom-top">
          <Collaboration />
        </section>
        <section id="ourApproach" className="ourApproach">
          <Approach />
        </section>
        <section className="ourGlobal roundBottom roundBottom-top">
          <OutGlobal />
        </section>

        <section className="estimatePrice">
          <EstimatePrice />
        </section>
        <section className="contactSection roundBottom roundBottom-top">
          <Contact />
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
