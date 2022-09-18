import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import DigitalHead from "../components/svgs/digitalHead";
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
                  <div className="acceptCrypto">
                    <svg
                      width="39"
                      height="39"
                      viewBox="0 0 39 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="19.5" cy="19.5" r="19.5" fill="#1C55E9" />
                      <path
                        d="M19.476 26.3064C19.3165 26.3064 19.1678 26.2059 19.1126 26.0465C18.9247 25.4937 18.8335 24.8857 18.8335 24.1881C18.8335 21.9226 19.7512 21.0041 20.192 20.5625L20.2488 20.5058C20.3001 20.4544 20.3745 20.3885 20.4657 20.3126C20.6298 20.1792 20.8713 20.2029 21.0055 20.367C21.1396 20.5311 21.1159 20.7726 20.951 20.9067C20.8836 20.9612 20.8291 21.0095 20.7931 21.0455L20.7341 21.1045C20.3369 21.5017 19.6002 22.2392 19.6002 24.1873C19.6002 24.7999 19.6791 25.3266 19.8394 25.7988C19.9076 25.9997 19.8003 26.2174 19.5994 26.2857C19.5595 26.2995 19.5174 26.3064 19.476 26.3064Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M27.0995 20.9383L25.005 26.3387C24.9881 26.3832 24.9789 26.43 24.9789 26.4775V27.5508H25.7456V26.5488L27.811 21.2243C28.2097 20.2675 28.0617 18.8492 27.479 18.0035L24.4837 13.4242C24.3763 13.2686 24.2238 13.1199 24.0436 12.9934C23.8688 12.8722 23.6311 12.9136 23.51 13.0884C23.3889 13.2625 23.431 13.5009 23.6051 13.622C23.7101 13.6949 23.7975 13.7784 23.8473 13.8513L26.8427 18.4306C27.282 19.0692 27.4008 20.2138 27.0995 20.9383Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M26.4831 27.5501V29.0834H25.7164V27.9334H19.5831V29.0834H18.8164V27.5501C18.8164 27.3385 18.9751 27.1667 19.1859 27.1667H26.0859C26.2991 27.1667 26.4831 27.3385 26.4831 27.5501Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M27.2498 30.6166C27.2498 30.8282 27.0781 31 26.8665 31C26.6549 31 26.4831 30.8282 26.4831 30.6166V29.4666H18.8165V30.6166C18.8165 30.8282 18.6447 31 18.4331 31C18.2215 31 18.0498 30.8282 18.0498 30.6166V29.0833C18.0498 28.8717 18.2085 28.7 18.4193 28.7H26.8527C27.0658 28.7 27.2498 28.8717 27.2498 29.0833V30.6166Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M14.2151 19.9539C14.1576 19.9539 14.0994 19.9409 14.0434 19.9133C11.5494 18.669 10 16.1612 10 13.3675C10 13.1559 10.1717 12.9841 10.3833 12.9841C10.5949 12.9841 10.7667 13.1559 10.7667 13.3675C10.7667 15.8683 12.1536 18.1131 14.3869 19.2279C14.5762 19.3222 14.6529 19.5529 14.5586 19.7423C14.4911 19.8757 14.3562 19.9539 14.2151 19.9539Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M17.6667 16.4334H15.3667C15.1551 16.4334 14.9834 16.2617 14.9834 16.0501C14.9834 15.8385 15.1551 15.6668 15.3667 15.6668H17.6667C18.3008 15.6668 18.8167 15.1508 18.8167 14.5168C18.8167 13.8827 18.3008 13.3668 17.6667 13.3668H16.1334V12.6001H17.6667C18.724 12.6001 19.5834 13.4603 19.5834 14.5168C19.5834 15.5732 18.724 16.4334 17.6667 16.4334Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M17.2834 13.3667H16.1334V12.6H17.2834C17.7058 12.6 18.0501 12.2566 18.0501 11.8334C18.0501 11.4102 17.7058 11.0667 17.2834 11.0667H15.3667C15.1551 11.0667 14.9834 10.895 14.9834 10.6834C14.9834 10.4718 15.1551 10.3 15.3667 10.3H17.2834C18.1298 10.3 18.8167 10.9877 18.8167 11.8334C18.8167 12.679 18.1298 13.3667 17.2834 13.3667Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M16.8999 17.1986C16.6883 17.1986 16.5166 17.0269 16.5166 16.8153V16.0486H17.2833V16.8153C17.2833 17.0269 17.1115 17.1986 16.8999 17.1986Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M16.5166 10.6834V9.91678C16.5166 9.70518 16.6883 9.53345 16.8999 9.53345C17.1115 9.53345 17.2833 9.70518 17.2833 9.91678V10.6834H16.5166Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M16.5167 10.3H15.75V16.4334H16.5167V10.3Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M22.2664 13.7508C22.0548 13.7508 21.8831 13.579 21.8831 13.3674C21.8831 10.8298 19.82 8.76667 17.2831 8.76667C16.4421 8.76667 15.6194 8.9959 14.9034 9.4283C14.7224 9.53717 14.4878 9.47967 14.3782 9.29873C14.2678 9.1178 14.3261 8.88167 14.507 8.7728C15.3427 8.26757 16.3025 8 17.2831 8C20.2417 8 22.6498 10.4081 22.6498 13.3674C22.6498 13.579 22.478 13.7508 22.2664 13.7508Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M20.3606 16.7814C19.5149 17.5465 18.4362 17.9682 17.2832 17.9682C14.7463 17.9682 12.6832 15.9051 12.6832 13.3674C12.6832 12.3286 13.0213 11.348 13.6607 10.5323C13.791 10.3651 13.7626 10.1244 13.5955 9.99329C13.4291 9.86296 13.1884 9.89286 13.0573 10.0592C12.3113 11.0114 11.9165 12.1553 11.9165 13.3674C11.9165 16.3267 14.3246 18.7348 17.2832 18.7348C18.4554 18.7348 19.5617 18.3592 20.4794 17.673L20.3606 16.7814Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M20.8601 20.9059C20.6715 20.9059 20.5066 20.7656 20.4806 20.5732L19.9301 16.4616C19.8718 16.033 19.9838 15.6083 20.2444 15.2663C20.5036 14.9259 20.8792 14.7074 21.3047 14.6492C21.7379 14.5894 22.1642 14.7028 22.5061 14.965C22.8488 15.2265 23.0688 15.606 23.1263 16.0322L23.6638 20.0833C23.6914 20.2934 23.5442 20.4858 23.3333 20.5149C23.1263 20.5387 22.9316 20.3953 22.9025 20.1853L22.3658 16.1334C22.3045 15.6719 21.8767 15.343 21.4151 15.4089C21.1844 15.4404 20.9881 15.5538 20.8539 15.7309C20.7175 15.9103 20.6592 16.1334 20.6899 16.3588L21.2403 20.4712C21.2679 20.6805 21.1215 20.8737 20.9107 20.9021C20.8946 20.9052 20.8769 20.9059 20.8601 20.9059Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M10.7666 11.8333C10.555 11.8333 10.3833 11.6616 10.3833 11.45C10.3833 11.2384 10.555 11.0667 10.7666 11.0667C10.9782 11.0667 11.15 11.2384 11.15 11.45C11.15 11.6616 10.9782 11.8333 10.7666 11.8333Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                    </svg>
                    We accept Crypto!
                  </div>
                  <h1>
                    Software Development Company for Your Digital{" "}
                    <span> Transformation</span>
                  </h1>
                  <p>
                    We deliver, scale and implement custom Software for Startups
                    and Enterprises to grow Your Business
                  </p>
                  <Link href="/contact">
                    <a className="btn btn-primary  btn-primary-fill">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 d-none  d-md-block">
                <DigitalHead />
              </div>
            </div>
          </div>
        </section>
        <section className="servicesSection">
          <Services />
        </section>
        <section id="technologies" className="technology">
          <Technologies />
        </section>
        <section className="collaboration">
          <Collaboration />
        </section>
        <section id="ourApproach" className="ourApproach">
          <Approach />
        </section>
        <section className="ourGlobal">
          <OutGlobal />
        </section>
        <Link href={"/?t=dsf"} scroll={false}>
          <a>fdsf</a>
        </Link>
        <Link href={"/?t=dsfds"} scroll={false}>
          <a>fdsfdsadsad</a>
        </Link>
        <section className="estimatePrice">
          <EstimatePrice />
        </section>
        <section className="contactSection">
          <Contact />
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
