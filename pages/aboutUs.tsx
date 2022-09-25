import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Contact from "../components/pages/home/contact/contactFrom";
import ArrowRight from "../components/svgs/arrowRight";

const aboutUs = () => {
  return (
    <Layout title="about synectics">
      <section className="about_mainSection">
        <div className="container">
          <div className="row">
            <div className="col-md-6 about_mainSection_content">
              <div className="pageTitle">ABOUT US</div>
              <h1>
                Work with one of the fastest-growing digital consultancies in EU
              </h1>
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
            </div>
            <div className="col-md-6">
              <img src="/imgs/Group 1108.svg" />
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
                <h3>Advanced Technology Expertise</h3>
                <p>
                  We at Synectics, have a very well-coordinated and dynamic
                  delivery team who can perfectly harmonize the advanced,
                  scalable solutions to make your business stand apart from.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="whyUsSection_card">
                <img src="/imgs/business 1.svg" />
                <h3>Flexible Collaboration Models</h3>
                <p>
                  We at Synectics, have a very well-coordinated and dynamic
                  delivery team who can perfectly harmonize the advanced,
                  scalable solutions to make your business stand apart from.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="whyUsSection_card">
                <img src="/imgs/ideas 1.svg" />
                <h3>Predictable Pricing</h3>
                <p>
                  We at Synectics, have a very well-coordinated and dynamic
                  delivery team who can perfectly harmonize the advanced,
                  scalable solutions to make your business stand apart from.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourMissionSection">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ourMissionSection_content">
              <h2>Our Mission</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
            </div>
            <div className="col-md-5">
              <div className="text-right">
                <img src="/imgs/Rectangle 107.png" />
              </div>
              <div className="my-3">
                <img src="/imgs/Rectangle 108.png" />
              </div>
              <div className="text-right">
                <img src="/imgs/Rectangle 109.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_serviceSection">
        <div className="container">
          <h2 className="text-center">IT Services we provide</h2>
          <div className="row">
            <div className="col-md-4">
              {" "}
              <div className="servicesSection_item">
                <img src="/imgs/Layer 2 (1).svg" alt="The Last of us" />
                <h3>
                  Software <br />
                  Engineering
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link href={"/"}>
                  <a className="btn btn-primary">
                    MORE
                    <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <div className="servicesSection_item">
                <img src="/imgs/Layer 2.svg" alt="GTA V" />
                <h3>
                  Cloud And <br />
                  Infrastructure
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a
                </p>
                <Link href={"/"}>
                  <a className="btn btn-primary">
                    MORE
                    <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="servicesSection_item">
                <img
                  src="/imgs/negotiation, interview, conversation, communication.svg"
                  alt="Mirror Edge"
                />
                <h3>
                  Digital <br />
                  Transformation
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link href={"/"}>
                  <a className="btn btn-primary">
                    MORE
                    <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="servicesSection_item">
                <img
                  src="/imgs/negotiation, interview, conversation, communication.svg"
                  alt="Mirror Edge"
                />
                <h3>
                  Software <br />
                  Engineering
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link href={"/"}>
                  <a className="btn btn-primary">
                    MORE
                    <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="servicesSection_item">
                <img
                  src="/imgs/negotiation, interview, conversation, communication.svg"
                  alt="Mirror Edge"
                />
                <h3>IT Consulting</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link href={"/"}>
                  <a className="btn btn-primary">
                    MORE
                    <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="servicesSection_item">
                <img
                  src="/imgs/negotiation, interview, conversation, communication.svg"
                  alt="Mirror Edge"
                />
                <h3>
                  Cooperation <br />
                  Models
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link href={"/"}>
                  <a className="btn btn-primary">
                    MORE
                    <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </Layout>
  );
};

export default aboutUs;
