import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Contact from "../components/pages/home/contact/contactFrom";
import ArrowRight from "../components/svgs/arrowRight";

const aboutUs = () => {
  return (
    <Layout title="about synectics">
      <section className="about_mainSection roundBottom roundBottom-wight ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 about_mainSection_content">
              <div className="pageTitle">ABOUT US</div>
              <h1>
                Do what you do best, we’ll take care <br />
                of the rest!
              </h1>
              <p>
                We offer a wide range of Software Development, DevOps, and
                consulting services with the necessary tools and expertise to
                help grow your business.
              </p>
              <p>
                Starting from building the digital establishment for your
                business to incorporating the best engineering productivity
                tools and practices into your software platform - we do it all
                with the utmost efficiency
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img src="/imgs/Group 1000001884.svg" />
            </div>
          </div>
        </div>
      </section>
      <section className="whyUsSection">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="whyUsSection_card">
                <img src="/imgs/goals 3.svg" />
                <h3>Technology Expertise</h3>
                <p>
                  We are experienced professionals, continuously educating,
                  creating a collaborative environment within a company and
                  prepare ourselves for new era challenges.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="whyUsSection_card">
                <img src="/imgs/business 1.svg" />
                <h3>Flexible Collaboration</h3>
                <p>
                  With years of experience, we understand the different
                  outsourcing engagement models and how to best use them to suit
                  your needs and requirements
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="whyUsSection_card">
                <img src="/imgs/ideas 1.svg" />
                <h3>Globality</h3>
                <p>
                  In the digital era, there are no boundaries anymore. We
                  leverage the power of digitalization, delivering an
                  exceptional and highly secured services to you wherever your
                  business is located
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourMissionSection roundBottom roundBottom-top roundBottom-wight">
        <div className="container">
          <div className="row">
            <div className="col-md-5 ourMissionSection_content">
              <h2>Our Vision</h2>
              <p>
                We work proactively with you, relying on years of experience in
                digital consulting and software services as well as mature
                experts with technological and business backgrounds who focus on
                delivering tangible results.
              </p>
            </div>
            <div className="col-md-7 d-md-block d-none pl-3">
              <h2>Our Mission</h2>
              <p>
                Our main goal is your successful result. We strive not only to
                meet your objectives but also to optimize and reduce your IT
                costs. We help you push the boundaries of opportunity and scale
                your business. We give companies unlimited growth potential.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-5 ourMissionSection_content ">
              <img src="/imgs/unsplash_ocnsb17U6FE.png" />
            </div>
            <div className="col-md-7 d-md-block d-none pl-3">
              <h2>Who are we?</h2>
              <p>
                Synectics is a global technology partner enabling change and
                transformation across industries, and generating long-lasting
                value for businesses, people, and the wider world.
              </p>
              <p>
                Our people-centric approach and passion for clients’ success
                unite engineers, creators, and innovators around the globe who
                breathe life into great ideas with the power of digital
                technology.
              </p>
              <p>
                With over 8 years of market experience, we help our partners
                thrive in a digital-first world by combining engineering
                craftsmanship and industry insights to solve challenges of any
                nature, scale, and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default aboutUs;
