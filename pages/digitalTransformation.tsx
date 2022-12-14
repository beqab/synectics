import React, { useRef, useEffect } from "react";
import Layout from "../components/Layout";
import ServiceHeading from "../components/pages/services/serviceHeading";
import InnerPageContact from "../components/pages/home/contact/innerPageContact";
import { useRouter } from "next/router";

const ItOutsourcing = () => {
  const CloudTransformation = useRef(null);
  const AgileTransformation = useRef(null);
  const ITStrategyDevelopment = useRef(null);

  const router = useRouter();

  const executeScroll = () => {
    if (router.query.page === "CloudTransformation") {
      CloudTransformation.current.scrollIntoView();
    } else if (router.query.page === "AgileTransformation") {
      AgileTransformation.current.scrollIntoView();
    } else if (router.query.page === "ITStrategyDevelopment") {
      ITStrategyDevelopment.current.scrollIntoView();
    }
  };

  useEffect(() => {
    executeScroll();
  }, [router.query]);

  return (
    <div>
      <Layout>
        <ServiceHeading
          title="Digital Transformation"
          text="Business Transformation offers identification of techniques and processes that maximize the capacity of a business and its proper implementation"
          icon={
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62 72.0002C61.4696 72.0002 60.9609 71.7895 60.5858 71.4145C60.2107 71.0394 60 70.5307 60 70.0002V46.0002C60 45.4698 60.2107 44.9611 60.5858 44.586C60.9609 44.211 61.4696 44.0002 62 44.0002C62.5304 44.0002 63.0391 44.211 63.4142 44.586C63.7893 44.9611 64 45.4698 64 46.0002V70.0002C64 70.5307 63.7893 71.0394 63.4142 71.4145C63.0391 71.7895 62.5304 72.0002 62 72.0002Z"
                fill="white"
              />
              <path
                d="M53.998 72.0012C53.4676 72.0012 52.9589 71.7905 52.5838 71.4154C52.2088 71.0404 51.998 70.5317 51.998 70.0012V42.0012C51.998 41.4708 52.2088 40.9621 52.5838 40.587C52.9589 40.2119 53.4676 40.0012 53.998 40.0012C54.5285 40.0012 55.0372 40.2119 55.4123 40.587C55.7873 40.9621 55.998 41.4708 55.998 42.0012V70.0012C55.998 70.5317 55.7873 71.0404 55.4123 71.4154C55.0372 71.7905 54.5285 72.0012 53.998 72.0012Z"
                fill="white"
              />
              <path
                d="M46 72.0007C45.4696 72.0007 44.9609 71.79 44.5858 71.4149C44.2107 71.0399 44 70.5312 44 70.0007V44.0007C44 43.4703 44.2107 42.9616 44.5858 42.5865C44.9609 42.2114 45.4696 42.0007 46 42.0007C46.5304 42.0007 47.0391 42.2114 47.4142 42.5865C47.7893 42.9616 48 43.4703 48 44.0007V70.0007C48 70.5312 47.7893 71.0399 47.4142 71.4149C47.0391 71.79 46.5304 72.0007 46 72.0007Z"
                fill="white"
              />
              <path
                d="M37.998 71.9983C37.4676 71.9983 36.9589 71.7876 36.5838 71.4125C36.2088 71.0374 35.998 70.5287 35.998 69.9983V53.9983C35.998 53.4679 36.2088 52.9591 36.5838 52.5841C36.9589 52.209 37.4676 51.9983 37.998 51.9983C38.5285 51.9983 39.0372 52.209 39.4123 52.5841C39.7873 52.9591 39.998 53.4679 39.998 53.9983V69.9983C39.998 70.5287 39.7873 71.0374 39.4123 71.4125C39.0372 71.7876 38.5285 71.9983 37.998 71.9983Z"
                fill="white"
              />
              <path
                d="M30 72.001C29.4696 72.001 28.9609 71.7903 28.5858 71.4152C28.2107 71.0401 28 70.5314 28 70.001V58.001C28 57.4705 28.2107 56.9618 28.5858 56.5868C28.9609 56.2117 29.4696 56.001 30 56.001C30.5304 56.001 31.0391 56.2117 31.4142 56.5868C31.7893 56.9618 32 57.4705 32 58.001V70.001C32 70.5314 31.7893 71.0401 31.4142 71.4152C31.0391 71.7903 30.5304 72.001 30 72.001Z"
                fill="white"
              />
              <path
                d="M21.998 72.0015C21.4676 72.0015 20.9589 71.7908 20.5838 71.4157C20.2088 71.0406 19.998 70.5319 19.998 70.0015V56.0015C19.998 55.471 20.2088 54.9623 20.5838 54.5872C20.9589 54.2122 21.4676 54.0015 21.998 54.0015C22.5285 54.0015 23.0372 54.2122 23.4123 54.5872C23.7873 54.9623 23.998 55.471 23.998 56.0015V70.0015C23.998 70.5319 23.7873 71.0406 23.4123 71.4157C23.0372 71.7908 22.5285 72.0015 21.998 72.0015Z"
                fill="white"
              />
              <path
                d="M6 71.999C5.46957 71.999 4.96086 71.7883 4.58579 71.4132C4.21071 71.0382 4 70.5295 4 69.999V65.999C4 65.4686 4.21071 64.9599 4.58579 64.5848C4.96086 64.2097 5.46957 63.999 6 63.999C6.53043 63.999 7.03914 64.2097 7.41421 64.5848C7.78929 64.9599 8 65.4686 8 65.999V69.999C8 70.5295 7.78929 71.0382 7.41421 71.4132C7.03914 71.7883 6.53043 71.999 6 71.999Z"
                fill="white"
              />
              <path
                d="M14 72.001C13.4696 72.001 12.9609 71.7903 12.5858 71.4152C12.2107 71.0401 12 70.5314 12 70.001V58.001C12 57.4705 12.2107 56.9618 12.5858 56.5868C12.9609 56.2117 13.4696 56.001 14 56.001C14.5304 56.001 15.0391 56.2117 15.4142 56.5868C15.7893 56.9618 16 57.4705 16 58.001V70.001C16 70.5314 15.7893 71.0401 15.4142 71.4152C15.0391 71.7903 14.5304 72.001 14 72.001Z"
                fill="white"
              />
              <path
                d="M4.00217 58.0021C3.73986 58.0053 3.4798 57.9536 3.23868 57.8503C2.99757 57.7469 2.78075 57.5943 2.60217 57.4021C2.41084 57.2226 2.25836 57.0057 2.15412 56.7649C2.04987 56.5241 1.99609 56.2645 1.99609 56.0021C1.99609 55.7397 2.04987 55.4801 2.15412 55.2393C2.25836 54.9985 2.41084 54.7817 2.60217 54.6021L18.6022 38.6021C18.7817 38.4108 18.9986 38.2583 19.2394 38.1541C19.4802 38.0498 19.7398 37.996 20.0022 37.996C20.2646 37.996 20.5242 38.0498 20.7649 38.1541C21.0057 38.2583 21.2226 38.4108 21.4022 38.6021L28.0022 45.1621L48.6022 24.6021C48.7817 24.4108 48.9986 24.2583 49.2394 24.1541C49.4802 24.0498 49.7398 23.996 50.0022 23.996C50.2646 23.996 50.5242 24.0498 50.7649 24.1541C51.0057 24.2583 51.2226 24.4108 51.4022 24.6021L60.0022 33.1621L78.6022 14.6021C78.9735 14.2308 79.4771 14.0222 80.0022 14.0222C80.5273 14.0222 81.0309 14.2308 81.4022 14.6021C81.7735 14.9734 81.9821 15.477 81.9821 16.0021C81.9821 16.5272 81.7735 17.0308 81.4022 17.4021L61.4022 37.4021C61.2226 37.5934 61.0057 37.7459 60.7649 37.8502C60.5242 37.9544 60.2646 38.0082 60.0022 38.0082C59.7398 38.0082 59.4802 37.9544 59.2394 37.8502C58.9986 37.7459 58.7817 37.5934 58.6022 37.4021L50.0022 28.8421L29.4022 49.4021C29.2226 49.5934 29.0057 49.7459 28.7649 49.8502C28.5242 49.9544 28.2646 50.0082 28.0022 50.0082C27.7398 50.0082 27.4802 49.9544 27.2394 49.8502C26.9986 49.7459 26.7817 49.5934 26.6022 49.4021L20.0022 42.8421L5.40217 57.4021C5.22359 57.5943 5.00677 57.7469 4.76565 57.8503C4.52454 57.9536 4.26447 58.0053 4.00217 58.0021Z"
                fill="white"
              />
              <path
                d="M79.9987 32.0018H79.7587C79.2311 31.9318 78.7518 31.6584 78.423 31.2399C78.0942 30.8214 77.9419 30.291 77.9987 29.7618L79.6787 16.3218L66.2387 18.0018C65.7083 18.0655 65.1743 17.9158 64.7542 17.5857C64.3341 17.2557 64.0624 16.7722 63.9987 16.2418C63.9351 15.7114 64.0848 15.1774 64.4148 14.7573C64.7449 14.3372 65.2283 14.0655 65.7587 14.0018L81.7587 12.0018C82.0599 11.9682 82.3647 12.005 82.6492 12.1091C82.9338 12.2132 83.1903 12.3818 83.3987 12.6018C83.6213 12.8083 83.7917 13.0646 83.896 13.3496C84.0003 13.6347 84.0355 13.9405 83.9987 14.2418L81.9987 30.2418C81.9316 30.7262 81.6928 31.1703 81.3257 31.4934C80.9586 31.8164 80.4877 31.9968 79.9987 32.0018Z"
                fill="white"
              />
              <path
                d="M74 83.9988H2C1.46957 83.9988 0.960859 83.7881 0.585786 83.413C0.210714 83.0379 0 82.5292 0 81.9988C0 81.4683 0.210714 80.9596 0.585786 80.5846C0.960859 80.2095 1.46957 79.9988 2 79.9988H74C74.5304 79.9988 75.0391 80.2095 75.4142 80.5846C75.7893 80.9596 76 81.4683 76 81.9988C76 82.5292 75.7893 83.0379 75.4142 83.413C75.0391 83.7881 74.5304 83.9988 74 83.9988Z"
                fill="white"
              />
              <path
                d="M98.002 66C97.4715 66 96.9628 65.7893 96.5877 65.4142C96.2127 65.0391 96.002 64.5304 96.002 64V6C96.002 5.46957 95.7913 4.96086 95.4162 4.58579C95.0411 4.21071 94.5324 4 94.002 4H10.002C9.47152 4 8.96281 3.78929 8.58774 3.41421C8.21267 3.03914 8.00195 2.53043 8.00195 2C8.00195 1.46957 8.21267 0.960859 8.58774 0.585786C8.96281 0.210714 9.47152 0 10.002 0L94.002 0C95.5933 0 97.1194 0.632141 98.2446 1.75736C99.3698 2.88258 100.002 4.4087 100.002 6V64C100.002 64.5304 99.7913 65.0391 99.4162 65.4142C99.0411 65.7893 98.5324 66 98.002 66Z"
                fill="white"
              />
              <path
                d="M86.3982 98.8419C86.1206 98.8438 85.8456 98.7878 85.5908 98.6777C85.336 98.5675 85.1069 98.4054 84.9182 98.2019C82.6345 95.6748 81.2168 92.485 80.8715 89.0965C80.5262 85.708 81.2712 82.2977 82.9982 79.3619C83.2719 78.9146 83.7103 78.5927 84.2191 78.4655C84.7278 78.3383 85.2662 78.416 85.7182 78.6819C85.947 78.8103 86.1477 78.9834 86.3084 79.1908C86.4691 79.3983 86.5865 79.6359 86.6537 79.8896C86.7208 80.1432 86.7363 80.4078 86.6993 80.6676C86.6623 80.9274 86.5735 81.1771 86.4382 81.4019C85.1611 83.615 84.6237 86.1779 84.9043 88.7175C85.1849 91.2572 86.2688 93.641 87.9982 95.5219C88.253 95.8119 88.4184 96.1695 88.4745 96.5515C88.5306 96.9335 88.4749 97.3235 88.3142 97.6745C88.1535 98.0256 87.8946 98.3226 87.5688 98.5297C87.243 98.7369 86.8642 98.8453 86.4782 98.8419H86.3982Z"
                fill="white"
              />
              <path
                d="M84.7222 82.4009C84.4606 82.3993 84.202 82.3455 83.9615 82.2424C83.7211 82.1394 83.5037 81.9892 83.3222 81.8009L74.0022 72.4809C72.7324 71.3183 71.7205 69.9025 71.0315 68.3247C70.3425 66.747 69.9919 65.0424 70.0022 63.3209C70.3898 58.9892 72.371 54.9555 75.5622 52.0009C75.932 51.6579 76.4178 51.4673 76.9222 51.4673C77.4266 51.4673 77.9123 51.6579 78.2822 52.0009L101.402 74.4009C101.591 74.5847 101.742 74.804 101.847 75.0462C101.951 75.2885 102.007 75.5489 102.01 75.8126C102.014 76.0763 101.966 76.3382 101.868 76.5832C101.771 76.8283 101.626 77.0518 101.442 77.2409C101.258 77.43 101.039 77.581 100.797 77.6854C100.555 77.7897 100.294 77.8453 100.03 77.849C99.7667 77.8528 99.5049 77.8045 99.2598 77.707C99.0147 77.6095 98.7913 77.4647 98.6022 77.2809L77.0022 56.2809C75.2856 58.2373 74.2351 60.6886 74.0022 63.2809C74.0082 64.4567 74.2646 65.6178 74.7542 66.6868C75.2439 67.7559 75.9557 68.7083 76.8422 69.4809L86.1622 78.8009C86.5312 79.1815 86.7375 79.6908 86.7375 80.2209C86.7375 80.751 86.5312 81.2603 86.1622 81.6409C85.9872 81.8596 85.769 82.04 85.5213 82.1708C85.2735 82.3015 85.0015 82.3798 84.7222 82.4009Z"
                fill="white"
              />
              <path
                d="M79.9987 103.999C79.9951 103.61 79.8802 103.23 79.6676 102.904C79.4549 102.578 79.1535 102.319 78.7987 102.159C76.2734 100.975 74.05 99.2334 72.2968 97.0644C70.5436 94.8955 69.3064 92.3563 68.6787 89.6389C68.6131 89.3763 68.4963 89.1292 68.3352 88.9116C68.174 88.6941 67.9715 88.5105 67.7394 88.3712C67.5073 88.2319 67.2499 88.1397 66.9822 88.0998C66.7144 88.06 66.4414 88.0733 66.1787 88.1389C65.9161 88.2046 65.669 88.3214 65.4514 88.4825C65.2339 88.6437 65.0503 88.8461 64.911 89.0783C64.7717 89.3104 64.6795 89.5677 64.6396 89.8355C64.5998 90.1033 64.6131 90.3763 64.6787 90.6389C65.4397 93.7339 66.84 96.6354 68.7896 99.1568C70.7392 101.678 73.1949 103.764 75.9987 105.279V111.999H79.9987V103.999Z"
                fill="white"
              />
              <path
                d="M116.002 73.7591C115.886 70.7027 114.696 67.785 112.642 65.5191L98.002 50.5591V56.2791L109.762 68.2791C111.087 69.8122 111.874 71.7369 112.002 73.7591V111.999H116.002V73.7591Z"
                fill="white"
              />
              <path
                d="M120 118C120 118.53 119.789 119.039 119.414 119.414C119.039 119.789 118.53 120 118 120C117.469 120 116.961 119.789 116.585 119.414C116.21 119.039 116 118.53 116 118V112H71.9997V118C71.9997 118.53 71.789 119.039 71.4139 119.414C71.0389 119.789 70.5301 120 69.9997 120C69.4693 120 68.9606 119.789 68.5855 119.414C68.2104 119.039 67.9997 118.53 67.9997 118V110C67.9889 109.741 68.0306 109.483 68.1223 109.24C68.2139 108.998 68.3536 108.777 68.533 108.59C68.7124 108.403 68.9277 108.255 69.166 108.153C69.4043 108.052 69.6607 107.999 69.9197 108H117.92C118.188 107.994 118.454 108.042 118.703 108.14C118.953 108.237 119.181 108.383 119.374 108.569C119.567 108.754 119.722 108.976 119.829 109.222C119.937 109.467 119.995 109.732 120 110V118Z"
                fill="white"
              />
              <path
                d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                fill="white"
              />
              <path
                d="M90 47.9985C89.4696 47.9985 88.9609 47.7878 88.5858 47.4127C88.2107 47.0377 88 46.529 88 45.9985V37.9985C88 37.4681 88.2107 36.9594 88.5858 36.5843C88.9609 36.2092 89.4696 35.9985 90 35.9985C90.5304 35.9985 91.0391 36.2092 91.4142 36.5843C91.7893 36.9594 92 37.4681 92 37.9985V45.9985C92 46.529 91.7893 47.0377 91.4142 47.4127C91.0391 47.7878 90.5304 47.9985 90 47.9985Z"
                fill="white"
              />
            </svg>
          }
        ></ServiceHeading>
        <div className="pb-5 pb-md-0 roundBottom roundBottom-top">
          <div className="container serviceContent cooperation ">
            <div
              ref={CloudTransformation}
              style={{ position: "relative", top: "-70px" }}
            />
            <div className="row pt-0">
              <div className="col-md-9 pt-5 pt-md-0">
                <div className=" pr-90">
                  <h2 className="serviceContent_title">Cloud Transformation</h2>
                  <p>
                    Deciding to transition to the cloud isn???t a decision to be
                    taken lightly, but it can provide a wealth of benefits for
                    companies who take the plunge. However, a company???s
                    readiness plays an important role in determining whether
                    their cloud migration will be successful. Often, the
                    confidence that comes with expert migration support can be
                    the deciding factor that empowers a business to begin the
                    cloud transformation process.
                  </p>
                  <p>
                    If you are considering making the transition to the cloud,
                    Synectics is here to help you in many ways. We can
                    accelerate cloud implementation, reduce the risk of
                    disruption, optimize cloud costs, and simplify the
                    governance of cloud data.
                  </p>
                </div>
              </div>
              <div className="col-md-3 text-center text-md-left">
                <img src="/imgs/Group 1000001938.svg" />
              </div>
            </div>
            <div
              ref={AgileTransformation}
              style={{ position: "relative", top: "-70px" }}
            />
            <div className="row flex-column-reverse flex-md-row">
              <div className="col-md-3 text-center text-md-left mt-3 mt-md-0 ">
                <img src="/imgs/Group 1000001923.svg" />
              </div>
              <div className="col-md-9">
                <div className="pl-90">
                  <h2>Agile Transformation</h2>
                  <p>
                    Agile is a way to improve a team???s overall capability to
                    deliver tangible results, such as faster growth and higher
                    profits, quickly. It helps to
                  </p>
                  <ul className="list-unstyled AgileList">
                    <li>
                      <svg
                        width="8"
                        height="9"
                        viewBox="0 0 8 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4.00195" r="4" fill="#2F80ED" />
                      </svg>

                      <span>
                        Reduce time to market new products and services
                      </span>
                    </li>
                    <li>
                      <svg
                        width="8"
                        height="9"
                        viewBox="0 0 8 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4.00195" r="4" fill="#2F80ED" />
                      </svg>
                      Respond to changes quickly
                    </li>
                    <li>
                      <svg
                        width="8"
                        height="9"
                        viewBox="0 0 8 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4.00195" r="4" fill="#2F80ED" />
                      </svg>
                      Improve customer satisfaction
                    </li>
                    <li>
                      <svg
                        width="8"
                        height="9"
                        viewBox="0 0 8 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4.00195" r="4" fill="#2F80ED" />
                      </svg>
                      Reduce risks, substantially.
                    </li>
                  </ul>
                  <p>
                    Agile companies have been found to create 37% higher ROE and
                    generate 30% higher profits. This is the reason why many
                    organizations and teams are moving to Agile
                  </p>
                </div>
              </div>
            </div>
            <div
              ref={ITStrategyDevelopment}
              style={{ position: "relative", top: "-70px" }}
            />
            <div className="row">
              <div className="col-md-9">
                <div className="pr-90">
                  <h2>IT Strategy Development</h2>
                  <p>
                    IT has become an essential part of every organization that
                    is integrated across departments and across industries, yet,
                    many businesses are lacking a comprehensive strategy that
                    integrates IT systems, processes and strategy into the
                    overall business strategy.
                  </p>
                  <p>
                    Leveraging the latest technology trends and identifying the
                    ideal solutions that will fit with your business needs helps
                    us bring you through your ideal state of technology and rise
                    above the competition.
                  </p>
                </div>
              </div>
              <div className="col-md-3 text-center text-md-left">
                <img src="/imgs/IT Strategy Development.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="whySynectics">
          <div className="container">
            <div className="row">
              <h2>Why Synectics Digital Transformation?</h2>
              <p>
                Our digital transformation consultants help leading companies
                build and deliver their next-gen software products to unlock the
                transformative benefits of digitalization.
              </p>

              <div className="col-12">
                <div className=" d-flex flex-column flex-md-row justify-content-between">
                  <div className="flip-card" tabIndex={0}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="whySynectics_card">
                          <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.8335 12.6429H53.524V8L61.262 15.7381L53.524 23.4762V18.8333H25.6668"
                              stroke="white"
                              stroke-miterlimit="10"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M58.1665 40.5002H68.9999V35.8574L76.738 43.5955L68.9999 51.3336V46.6907H59.7141"
                              stroke="white"
                              stroke-miterlimit="10"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M50.4284 62.1668H58.1665V57.5239L65.9046 65.262L58.1665 73.0001V68.3572H27.2141"
                              stroke="white"
                              stroke-miterlimit="10"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M4 59.0713H22.5714"
                              stroke="white"
                              stroke-miterlimit="10"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M36.5 48.2383C39.0642 48.2383 41.1429 46.1596 41.1429 43.5955C41.1429 41.0313 39.0642 38.9526 36.5 38.9526C33.9359 38.9526 31.8572 41.0313 31.8572 43.5955C31.8572 46.1596 33.9359 48.2383 36.5 48.2383Z"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M54.7621 39.4168L52.7502 34.3097L48.1073 35.8573C47.1787 34.4644 46.0954 33.3811 44.8573 32.4525L46.5597 27.6549L41.6073 25.4882L39.2859 29.9763C37.7383 29.6668 36.1906 29.6668 34.643 29.8216L32.4764 25.3335L27.3692 27.3454L28.7621 32.143C27.3692 33.0716 26.2859 34.1549 25.3573 35.393L20.5597 33.6906L18.393 38.643L22.8811 40.9644C22.5716 42.512 22.5716 44.0597 22.7264 45.6073L18.2383 47.774L20.2502 52.8811L25.0478 51.4882C25.9764 52.8811 27.0597 53.9644 28.2978 54.893L26.5954 59.6906L31.5478 61.8573L33.8692 57.3692C35.4168 57.6787 36.9644 57.6787 38.5121 57.524L40.6787 62.012L45.7859 60.0001L44.2383 55.2025C45.6311 54.274 46.7145 53.1906 47.643 51.9525L52.4406 53.6549L54.6073 48.7025L50.1192 46.3811C50.4287 44.8335 50.4287 43.2859 50.274 41.7382L54.7621 39.4168Z"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M22.5714 26.5713H8.64282"
                              stroke="white"
                              stroke-miterlimit="10"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <h3>
                            Refined Digital <br />
                            Transformation Strategy
                          </h3>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="whySynectics_card whySynectics_card-back">
                          <p>
                            By implementing cost-effective, customer-focused
                            digital transformation strategies, we help
                            businesses acquire, retain, and assist customers
                            most innovatively, using new technologies that
                            ongoingly create capabilities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flip-card" tabIndex={0}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="whySynectics_card">
                          <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M69.0652 56.1953L49.5652 42.0649V66.0866C49.5652 66.7931 50.2717 67.0758 50.8369 66.5105L56.3478 61.2823L61.5761 70.6084C62 71.3149 63.1304 71.4562 63.8369 70.891L66.0978 69.4779C66.9456 68.9127 67.2282 67.9236 66.8043 67.2171L61.7174 58.4562H68.3587C69.2065 58.4562 69.6304 56.6192 69.0652 56.1953Z"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M49.5652 35.8476V31.6084"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M43.9132 41.5H39.6741"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M59.4566 41.5H55.2175"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M45.3261 37.2607L42.5 34.4346"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M45.3261 45.7388L42.5 48.5649"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M53.8044 37.2607L56.6305 34.4346"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M28.3696 34.4348V35.8478C28.3696 37.4022 29.6413 38.6739 31.1957 38.6739H34.0217C35.5761 38.6739 36.8478 37.4022 36.8478 35.8478V35C36.8478 33.7282 36.1413 32.7391 34.8696 32.3152L30.2065 30.7608C29.0761 30.3369 28.2283 29.3478 28.2283 28.0761V27.3695C28.2283 25.8152 29.5 24.5435 31.0544 24.5435H33.8804C35.4348 24.5435 36.7065 25.8152 36.7065 27.3695V28.7826"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M32.6086 24.5434V20.3042"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M32.6086 38.6738V42.9129"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M41.087 52.5217C38.5435 53.5109 35.5761 54.2174 32.6087 54.2174C20.1739 54.2174 10 44.0435 10 31.6087C10 19.1739 20.1739 9 32.6087 9C44.6196 9 54.5109 18.3261 55.2174 30.1957"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                          </svg>

                          <h3>
                            Reduced R&D <br />
                            Costs
                          </h3>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="whySynectics_card whySynectics_card-back">
                          <p>
                            IT leaders around the globe move beyond cost
                            efficiency to help power their growth and improve
                            value. We help clients to consider digital business
                            transformation as an efficient process that helps
                            organizations execute their end-to-end
                            transformation at speed and scale.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flip-card" tabIndex={0}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="whySynectics_card">
                          <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M53.0051 53.1021V67.6939"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M53.0051 70.3467V72.9998"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M29.3728 42.4839V59.2912"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M34.154 49.4387L39.2252 50.7427V42.484L32.7051 35.9639C32.7051 35.9639 32.7051 21.6197 32.7051 19.5912C32.7051 17.5628 30.8215 11.0427 26.185 8C21.5485 11.0427 19.5201 17.4179 19.5201 19.4464V35.819L13 42.484V50.7427L18.0712 49.4387"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M26.1848 19.4463V22.7788"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M22.1284 66.9705V53.061"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M41.022 37.3247L53.0054 23.9185L67.0666 41.1634L65.6074 42.7553H59.24V64.643"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M47.052 50.8911V63.9554"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                          </svg>

                          <h3>
                            Refined Digital <br />
                            Transformation Strategy
                          </h3>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="whySynectics_card whySynectics_card-back">
                          <p>
                            As digital technology progresses, organizations
                            start generating ideas for using business technology
                            in new ways. With evolved technologies and new ways
                            of implementing them ??? the idea of digital
                            transformation is taking a new shape.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flip-card" tabIndex={0}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="whySynectics_card">
                          <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.3523 30.1589C16.3068 22.9203 21.9205 17.3066 29.1591 14.3521"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M39.5 72.9998C41.9476 72.9998 43.9318 71.0156 43.9318 68.568C43.9318 66.1203 41.9476 64.1362 39.5 64.1362C37.0523 64.1362 35.0681 66.1203 35.0681 68.568C35.0681 71.0156 37.0523 72.9998 39.5 72.9998Z"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M39.5 16.8636C41.9476 16.8636 43.9318 14.8794 43.9318 12.4318C43.9318 9.98419 41.9476 8 39.5 8C37.0523 8 35.0681 9.98419 35.0681 12.4318C35.0681 14.8794 37.0523 16.8636 39.5 16.8636Z"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M67.5683 44.9321C70.0159 44.9321 72.0001 42.9479 72.0001 40.5003C72.0001 38.0526 70.0159 36.0684 67.5683 36.0684C65.1206 36.0684 63.1365 38.0526 63.1365 40.5003C63.1365 42.9479 65.1206 44.9321 67.5683 44.9321Z"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M11.4318 44.9321C13.8794 44.9321 15.8636 42.9479 15.8636 40.5003C15.8636 38.0526 13.8794 36.0684 11.4318 36.0684C8.98419 36.0684 7 38.0526 7 40.5003C7 42.9479 8.98419 44.9321 11.4318 44.9321Z"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M21.7725 12.7271L29.1589 14.3521L27.5339 21.8862"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M66.091 51.1362C63.2842 58.3748 57.5228 63.9884 50.2842 66.943"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M57.8183 68.5679L50.2842 66.943L51.9092 59.5566"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M29.1591 67.091C22.0682 64.1365 16.3068 58.3751 13.5 51.2842"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M11.875 58.6705L13.5 51.2842L20.8864 52.9092"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M50.2842 14.3521C57.3751 17.1589 63.1365 22.9203 66.091 30.1589"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M67.5682 22.625L66.091 30.1591L58.5569 28.5341"
                              stroke="white"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M43.9318 40.5003C43.9318 43.0116 41.8636 44.9321 39.5 44.9321C36.9886 44.9321 35.0681 42.8639 35.0681 40.5003C35.0681 37.9889 37.1363 36.0684 39.5 36.0684C42.0113 36.0684 43.9318 37.9889 43.9318 40.5003Z"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M49.8409 40.5C49.8409 39.6137 49.6932 38.875 49.5455 38.1364L52.5 36.5114L49.5455 31.341L46.5909 32.966C45.4091 31.7841 43.9318 31.0455 42.4545 30.6023V27.2046H36.5455V30.6023C34.9205 31.0455 33.5909 31.9319 32.4091 32.966L29.4545 31.341L26.5 36.5114L29.4545 38.2841C29.3068 39.0228 29.1591 39.7614 29.1591 40.6478C29.1591 41.5341 29.3068 42.2728 29.4545 43.0114L26.5 44.7841L29.4545 49.9546L32.4091 48.1819C33.5909 49.216 34.9205 50.1023 36.5455 50.5455V53.7955H42.4545V50.3978C44.0795 49.9546 45.4091 49.0682 46.5909 48.0341L49.5455 49.8069L52.5 44.6364L49.5455 43.0114C49.6932 42.125 49.8409 41.2387 49.8409 40.5V40.5Z"
                              stroke="#2F80ED"
                              stroke-miterlimit="10"
                            />
                          </svg>

                          <h3>
                            Refined Digital <br />
                            Transformation Strategy
                          </h3>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="whySynectics_card whySynectics_card-back">
                          <p>
                            By implementing the advanced digital business
                            transformation changes, innovative businesses become
                            more responsive and flexible to market trends and
                            demands.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="roundBottom roundBottom-top  pt-5">
          <InnerPageContact />
        </div>
      </Layout>
    </div>
  );
};

export default ItOutsourcing;
