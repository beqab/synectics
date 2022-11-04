import React, { useState } from "react";
import ArrowRight from "../../svgs/arrowRight";
import Link from "next/link";
import classNames from "classnames";

import OwlCarousel from "react-owl-carousel2";

const TechnologiesObject = [
  {
    categoryName: "Cloud and Infrastructure",
    TechnologiesList: [
      {
        img: "/technologies/CloudandInfrastructur/aws.svg",
        title: "AWS",
      },
      {
        img: "/technologies/CloudandInfrastructur/GCP.svg",
        title: "GCP",
      },
      {
        img: "/technologies/CloudandInfrastructur/Kubernetes.svg",
        title: "Kubernetes",
      },
      {
        img: "/technologies/CloudandInfrastructur/Terraform.svg",
        title: "Terraform",
      },
      {
        img: "/technologies/CloudandInfrastructur/Chef.svg",
        title: "Chef",
      },
      {
        img: "/technologies/CloudandInfrastructur/Jenkins.svg",
        title: "Jenkins",
      },
      {
        img: "/technologies/CloudandInfrastructur/GitLab.svg",
        title: "GitLab",
      },
      {
        img: "/technologies/CloudandInfrastructur/GitHub.svg",
        title: "GitHub",
      },
      {
        img: "/technologies/CloudandInfrastructur/CircleCI.svg",
        title: "CircleCI",
      },
      {
        img: "/technologies/CloudandInfrastructur/ArgoCD.svg",
        title: "ArgoCD",
      },
    ],
  },
  {
    categoryName: "Web Development",
    TechnologiesList: [
      {
        img: "/technologies/web/Python.svg",
        title: "Python",
      },

      {
        img: "/technologies/web/Java.svg",
        title: "java",
      },
      {
        img: "/technologies/web/Node.svg",
        title: "Node.js",
      },
      {
        img: "/technologies/web/laravel.svg",
        title: "Laravel",
      },
      {
        img: "php.png",
        title: "php",
      },
      {
        img: "/technologies/web/React.svg",
        title: "React",
      },
      {
        img: "/technologies/web/nextjs.svg",
        title: "Next.js",
      },
      {
        img: "/technologies/web/Angular.svg",
        title: "Angular",
      },
      {
        img: "/technologies/web/Vue.svg",
        title: "Vue.js",
      },
      {
        img: "/technologies/web/vista.svg",
        title: "Vista",
      },
      {
        img: "/technologies/web/MySql.svg",
        title: "MYSQL",
      },
      {
        img: "/technologies/web/postgresql.svg",
        title: "Postgresql",
      },
      {
        img: "/technologies/web/Oracle.svg",
        title: "Oracle",
      },
    ],
  },
  {
    categoryName: "Mobile Development",
    TechnologiesList: [
      {
        img: "/technologies/mobile/Java.svg",
        title: "Java",
      },
      {
        img: "/technologies/mobile/Node.svg",
        title: "Node.js",
      },
      {
        img: "/technologies/mobile/swift.svg",
        title: "Swift",
      },
      {
        img: "/technologies/mobile/Kotlin.svg",
        title: "Kotlin",
      },
      {
        img: "/technologies/mobile/go.svg",
        title: "go",
      },
      {
        img: "/technologies/mobile/dotnet.svg",
        title: ".net",
      },

      {
        img: "/technologies/mobile/codideep.svg",
        title: "codideep",
      },

      {
        img: "/technologies/mobile/Xamarin.svg",
        title: "Xamarin",
      },
      {
        img: "/technologies/mobile/Ionic.svg",
        title: "Ionic",
      },
      {
        img: "/technologies/mobile/unity.svg",
        title: "unity",
      },
      {
        img: "/technologies/mobile/Oracle.svg",
        title: "Oracle",
      },
    ],
  },

  {
    categoryName: "BigData and Data Analytics",
    TechnologiesList: [
      {
        img: "/technologies/bgData/Python.svg",
        title: "Python",
      },
      {
        img: "/technologies/bgData/Node.svg",
        title: "node.js",
      },
      {
        img: "/technologies/bgData/r.svg",
        title: "r",
      },
      {
        img: "/technologies/bgData/Confluent.svg",
        title: "Confluent",
      },
      {
        img: "/technologies/bgData/Kafka.svg",
        title: "Kafka",
      },
      {
        img: "/technologies/bgData/Spark.svg",
        title: "Spark",
      },
      {
        img: "/technologies/bgData/Hadoop.svg",
        title: "Hadoop",
      },
      {
        img: "/technologies/bgData/Flink.svg",
        title: "Flink",
      },
      {
        img: "/technologies/bgData/bigQuery.svg",
        title: "BigQuery",
      },
      {
        img: "/technologies/bgData/Mongo.svg",
        title: "Mongo",
      },
      {
        img: "/technologies/bgData/Cassandra.svg",
        title: "Cassandra",
      },
    ],
  },

  {
    categoryName: "CRM SOlutions",
    TechnologiesList: [
      {
        img: "/technologies/crm/SAP.svg",
        title: "SAP",
      },
      {
        img: "/technologies/crm/SalesForce.svg",
        title: "SalesForce",
      },
      {
        img: "/technologies/crm/Microsoft.svg",
        title: "Microsoft",
      },
      {
        img: "/technologies/crm/ZOHO.svg",
        title: "ZOHO",
      },
      {
        img: "/technologies/crm/HubSpot.svg",
        title: "HubSpot",
      },
      {
        img: "/technologies/crm/SogarCRM.svg",
        title: "SogarCRM",
      },
    ],
  },

  {
    categoryName: "Blockchain",
    TechnologiesList: [
      {
        img: "ss/technologies/Blockchain/blockchincom.svg",
        title: "Blockchain.com",
      },
      {
        img: "/technologies/Blockchain/bnb.svg",
        title: "bnb",
      },
      {
        img: "/technologies/Blockchain/eth.svg",
        title: "eth",
      },
      {
        img: "/technologies/Blockchain/metamask.svg",
        title: "metamask",
      },
      {
        img: "/technologies/Blockchain/Java.svg",
        title: "Java",
      },
      {
        img: "/technologies/Blockchain/Python.svg",
        title: "Python",
      },
      {
        img: "/technologies/Blockchain/Node.svg",
        title: "Node.js",
      },
    ],
  },
];

const options = {
  items: 6,
  nav: true,
  navText: [
    `
    <svg
    class="servicePrev"
     width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.5 4.6188C34.4504 1.76068 40.5496 1.76068 45.5 4.6188L61.976 14.1312C66.9264 16.9893 69.976 22.2714 69.976 27.9876V47.0124C69.976 52.7286 66.9264 58.0107 61.976 60.8688L45.5 70.3812C40.5496 73.2393 34.4504 73.2393 29.5 70.3812L13.024 60.8688C8.07363 58.0107 5.02405 52.7286 5.02405 47.0124V27.9876C5.02405 22.2714 8.07363 16.9893 13.024 14.1312L29.5 4.6188Z" fill="#5B5E7B" fill-opacity="0.3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.9054 26.0322C35.1982 26.3251 35.1982 26.7999 34.9054 27.0928L28.6554 33.3428C28.3625 33.6357 27.8876 33.6357 27.5947 33.3428C27.3018 33.0499 27.3018 32.5751 27.5947 32.2822L33.8447 26.0322C34.1376 25.7393 34.6125 25.7393 34.9054 26.0322ZM22.7446 37.2129C22.8607 36.9326 23.1342 36.7499 23.4375 36.7499H51.5625C51.9767 36.7499 52.3125 37.0857 52.3125 37.4999C52.3125 37.9141 51.9767 38.2499 51.5625 38.2499H25.2482L34.9054 47.9071C35.1982 48.2 35.1982 48.6748 34.9054 48.9677C34.6125 49.2606 34.1376 49.2606 33.8447 48.9677L22.9072 38.0302C22.6927 37.8157 22.6285 37.4931 22.7446 37.2129Z" fill="white"/>
</svg>

    `,
    `
  <svg
  class="serviceNext"
   width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.5 4.6188C34.4504 1.76068 40.5496 1.76068 45.5 4.6188L61.976 14.1312C66.9264 16.9893 69.976 22.2714 69.976 27.9876V47.0124C69.976 52.7286 66.9264 58.0107 61.976 60.8688L45.5 70.3812C40.5496 73.2393 34.4504 73.2393 29.5 70.3812L13.024 60.8688C8.07363 58.0107 5.02405 52.7286 5.02405 47.0124V27.9876C5.02405 22.2714 8.07363 16.9893 13.024 14.1312L29.5 4.6188Z" fill="#5B5E7B" fill-opacity="0.3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.0947 26.0322C40.3876 25.7393 40.8624 25.7393 41.1553 26.0322L47.4054 32.2822C47.6983 32.5751 47.6983 33.0499 47.4054 33.3428C47.1125 33.6357 46.6376 33.6357 46.3447 33.3428L40.0947 27.0928C39.8018 26.7999 39.8018 26.3251 40.0947 26.0322ZM22.6875 37.4999C22.6875 37.0857 23.0233 36.7499 23.4375 36.7499H51.5625C51.8658 36.7499 52.1393 36.9326 52.2554 37.2129C52.3715 37.4931 52.3073 37.8157 52.0928 38.0302L41.1553 48.9677C40.8624 49.2606 40.3876 49.2606 40.0947 48.9677C39.8018 48.6748 39.8018 48.2 40.0947 47.9071L49.7518 38.2499H23.4375C23.0233 38.2499 22.6875 37.9141 22.6875 37.4999Z" fill="white"/>
</svg>

  `,
  ],
  rewind: true,
  autoplay: true,
  loop: true,
  Infinity: true,

  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 6,
      nav: true,
      loop: false,
    },
  },

  // navigator:
};

const categories = [
  "Cloud and Infrastructure",
  "Web Development",
  "Mobile Development",
  "BigData and Data Analytics",
  "CRM Solutions",
  "Blockchain",
];

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      <div className="container">
        <h2>Technologies</h2>
        <p>Get an expert for extensive range of technologies</p>

        <ul className="categoryMenu list-inline d-flex ">
          {categories.map((el, i) => {
            return (
              <li
                onClick={() => {
                  setActiveCategory(i);
                }}
                className={classNames({
                  active: i === activeCategory,
                })}
              >
                {el}
              </li>
            );
          })}
          {/* <li>Web Development</li>
          <li>Mobile Development</li>
          <li>ERP Solutions</li>
          <li>CRM SOlutions</li>
          <li>BigData and Data Analytics</li>
          <li>Blockchain</li> */}
        </ul>
        <div className="technologies_mobile d-block d-md-none">
          <div className="roww">
            {TechnologiesObject[activeCategory].TechnologiesList.map(
              (el, i) => {
                return (
                  <div className="">
                    <div className="technology_item">
                      <img
                        src={"/imgs/php.svg" + el.img}
                        alt="The Last of us"
                      />
                      <h4>{el.title}</h4>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className=" d-none d-md-block">
          <OwlCarousel options={options}>
            {TechnologiesObject[activeCategory].TechnologiesList.map(
              (el, i) => {
                return (
                  <div className="technology_item">
                    <img src={"/imgs/" + el.img} alt="The Last of us" />
                    <h4>{el.title}</h4>
                  </div>
                );
              }
            )}
            {/* <div className="technology_item">
              <img src="/imgs/php.svg" alt="The Last of us" />
              <h4>PHP</h4>
            </div>
            <div className="technology_item">
              <img src="/imgs/python.png" alt="The Last of us" />
              <h4>PYTHON</h4>
            </div>
            <div className="technology_item">
              <img src="/imgs/php.png" alt="The Last of us" />
              <h4>PHP</h4>
            </div>
            <div className="technology_item">
              <img src="/imgs/php.png" alt="The Last of us" />
              <h4>PHP</h4>
            </div>
            <div className="technology_item">
              <img src="/imgs/php.png" alt="The Last of us" />
              <h4>PHP</h4>
            </div>
            <div className="technology_item">
              <img src="/imgs/php.png" alt="The Last of us" />
              <h4>PHP</h4>
            </div>
            <div className="technology_item">
              <img src="/imgs/php.png" alt="The Last of us" />
              <h4>PHP</h4>
            </div> */}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Technologies;
