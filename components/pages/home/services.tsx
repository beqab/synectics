import React from "react";
import ArrowRight from "../../svgs/arrowRight";
import Link from "next/link";

import OwlCarousel from "react-owl-carousel2";

const options = {
  items: 4,
  nav: true,
  navText: [
    `<svg
      class="servicePrev"
       width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.05" d="M29.5 4.6188C34.4504 1.76068 40.5496 1.76068 45.5 4.6188L61.976 14.1312C66.9264 16.9893 69.976 22.2714 69.976 27.9876V47.0124C69.976 52.7286 66.9264 58.0107 61.976 60.8688L45.5 70.3812C40.5496 73.2393 34.4504 73.2393 29.5 70.3812L13.024 60.8688C8.07363 58.0107 5.02405 52.7286 5.02405 47.0124V27.9876C5.02405 22.2714 8.07363 16.9893 13.024 14.1312L29.5 4.6188Z" fill="#1C55E9"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4357 25.5018C36.0215 26.0876 36.0215 27.0374 35.4357 27.6232L29.1857 33.8732C28.5999 34.4589 27.6502 34.4589 27.0644 33.8732C26.4786 33.2874 26.4786 32.3376 27.0644 31.7518L33.3144 25.5018C33.9002 24.9161 34.8499 24.9161 35.4357 25.5018ZM22.0517 36.9259C22.2839 36.3654 22.8309 35.9999 23.4375 35.9999H51.5625C52.391 35.9999 53.0625 36.6715 53.0625 37.4999C53.0625 38.3283 52.391 38.9999 51.5625 38.9999H27.0589L35.4357 47.3767C36.0215 47.9625 36.0215 48.9123 35.4357 49.4981C34.8499 50.0838 33.9002 50.0838 33.3144 49.4981L22.3769 38.5606C21.9479 38.1316 21.8196 37.4864 22.0517 36.9259Z" fill="#1C55E9"/>
    </svg>
    `,
    `
      <svg
      class="serviceNext"
       width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.05" d="M29.5 4.6188C34.4504 1.76068 40.5496 1.76068 45.5 4.6188L61.976 14.1312C66.9264 16.9893 69.976 22.2714 69.976 27.9876V47.0124C69.976 52.7286 66.9264 58.0107 61.976 60.8688L45.5 70.3812C40.5496 73.2393 34.4504 73.2393 29.5 70.3812L13.024 60.8688C8.07363 58.0107 5.02405 52.7286 5.02405 47.0124V27.9876C5.02405 22.2714 8.07363 16.9893 13.024 14.1312L29.5 4.6188Z" fill="#1C55E9"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5643 25.5018C40.1501 24.9161 41.0999 24.9161 41.6857 25.5018L47.9357 31.7518C48.5215 32.3376 48.5215 33.2874 47.9357 33.8732C47.3499 34.4589 46.4002 34.4589 45.8144 33.8732L39.5643 27.6232C38.9786 27.0374 38.9785 26.0876 39.5643 25.5018ZM21.9375 37.4999C21.9375 36.6715 22.6091 35.9999 23.4375 35.9999H51.5625C52.1692 35.9999 52.7161 36.3654 52.9483 36.9259C53.1805 37.4864 53.0522 38.1316 52.6232 38.5606L41.6857 49.4981C41.0999 50.0838 40.1501 50.0838 39.5643 49.4981C38.9786 48.9123 38.9786 47.9625 39.5643 47.3767L47.9412 38.9999H23.4375C22.6091 38.9999 21.9375 38.3283 21.9375 37.4999Z" fill="#1C55E9"/>
  </svg>
  `,
  ],
  rewind: true,
  autoplay: true,
  loop: true,
  Infinity: true,
  // navigator:
};

const Services = () => {
  return (
    <>
      <div className="container">
        <h2>Services</h2>
        <p>
          Software design and development provided by carefully selected and
          talented people who see the bigger picture - your daily business
          challenges and your customers’ needs.
        </p>
        <div className="serviceMobile d-block d-md-none">
          <div>
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
                <Link href={"/softwareengineering"}>
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
                <Link href={"/cloudinfrastructure"}>
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
        <div className="d-none d-md-block">
          <OwlCarousel options={options} n>
            <div className="servicesSection_item">
              <img src="/imgs/Layer 2 (1).svg" alt="The Last of us" />
              <h3>
                Software <br />
                Engineering
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link href={"/"}>
                <a className="btn btn-primary">
                  MORE
                  <ArrowRight />
                </a>
              </Link>
            </div>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link href={"/"}>
                <a className="btn btn-primary">
                  MORE
                  <ArrowRight />
                </a>
              </Link>
            </div>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link href={"/"}>
                <a className="btn btn-primary">
                  MORE
                  <ArrowRight />
                </a>
              </Link>
            </div>
            <div className="servicesSection_item">
              <img
                src="/imgs/negotiation, interview, conversation, communication.svg"
                alt="Mirror Edge"
              />
              <h3>IT Consulting</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link href={"/"}>
                <a className="btn btn-primary">
                  MORE
                  <ArrowRight />
                </a>
              </Link>
            </div>
            <div className="servicesSection_item">
              <img
                src="/imgs/negotiation, interview, conversation, communication.svg"
                alt="Mirror Edge"
              />
              <h3>IT Outsourcing</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link href={"/"}>
                <a className="btn btn-primary">
                  MORE
                  <ArrowRight />
                </a>
              </Link>
            </div>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link href={"/"}>
                <a className="btn btn-primary">
                  MORE
                  <ArrowRight />
                </a>
              </Link>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Services;
