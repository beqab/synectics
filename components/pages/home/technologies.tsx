import React, { useState } from "react";
import ArrowRight from "../../svgs/arrowRight";
import Link from "next/link";
import classNames from "classnames";

import OwlCarousel from "react-owl-carousel2";

export const TechnologiesObject = [
  {
    categoryName: "Cloud and Infrastructure",
    TechnologiesList: [
      {
        img: "/technologies/bgData/aws.svg",
        title: "AWS",
      },
      {
        img: "/technologies/CloudandInfrastructur/azure.svg",
        title: "azure",
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
        img: "/technologies/CloudandInfrastructur/doker.svg",
        title: "Docker",
      },
      {
        img: "/technologies/CloudandInfrastructur/Terraform.svg",
        title: "Terraform",
      },

      {
        img: "/technologies/CloudandInfrastructur/Puppet.svg",
        title: "Puppet",
      },
      {
        img: "/technologies/CloudandInfrastructur/Ansible.svg",
        title: "Ansible",
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
        img: "/technologies/CloudandInfrastructur/ArgoCD.svg",
        title: "ArgoCD",
      },
      {
        img: "/technologies/CloudandInfrastructur/CircleCI.svg",
        title: "CircleCI",
      },
      {
        img: "/technologies/CloudandInfrastructur/Prometheus.svg",
        title: "Prometheus",
      },

      {
        img: "/technologies/CloudandInfrastructur/Grafana.svg",
        title: "Grafana",
      },
      {
        img: "/technologies/CloudandInfrastructur/k6s.svg",
        title: "k6s",
      },
      {
        img: "/technologies/CloudandInfrastructur/dynotrace.svg",
        title: "dynotrace",
      },
      {
        img: "/technologies/CloudandInfrastructur/NewRelic.svg",
        title: "New Relic",
      },
      {
        img: "/technologies/CloudandInfrastructur/dataDog.svg",
        title: "dataDog",
      },
      {
        img: "/technologies/CloudandInfrastructur/zabbix.svg",
        title: "zabbix",
      },
      {
        img: "/technologies/CloudandInfrastructur/nagios.svg",
        title: "nagios",
      },
      {
        img: "/technologies/CloudandInfrastructur/pagerduty.svg",
        title: "PagerDuty",
      },
      {
        img: "/technologies/CloudandInfrastructur/cisofy.svg",
        title: "cisofy",
      },
      {
        img: "/technologies/CloudandInfrastructur/blackduck.svg",
        title: "blackduck",
      },
      {
        img: "/technologies/CloudandInfrastructur/Rapid7.svg",
        title: "Rapid7",
      },
      {
        img: "/technologies/CloudandInfrastructur/sonarCube.svg",
        title: "SonarQube",
      },
      {
        img: "/technologies/CloudandInfrastructur/phython.svg",
        title: "Python",
      },
      {
        img: "/technologies/CloudandInfrastructur/go.svg",
        title: "GO",
      },
      {
        img: "/technologies/CloudandInfrastructur/Yaml.svg",
        title: "Yaml",
      },
      {
        img: "/technologies/CloudandInfrastructur/bash.svg",
        title: "Bash",
      },
    ],
  },
  {
    categoryName: "Web Development",
    TechnologiesList: [
      {
        img: "/technologies/web/PHP.svg",
        title: "PHP",
      },
      {
        img: "/technologies/web/Python.svg",
        title: "Python",
      },

      {
        img: "/technologies/web/Node.svg",
        title: "NodeJS",
      },
      // {
      //   img: "/technologies/web/laravel.svg",
      //   title: "Laravel",
      // },

      {
        img: "/technologies/web/Angular.svg",
        title: "Angular",
      },
      {
        img: "/technologies/web/React.svg",
        title: "ReactJS",
      },

      {
        img: "/technologies/web/Vue.svg",
        title: "VueJS",
      },
      {
        img: "/technologies/web/vista.svg",
        title: "Vuetify",
      },
      {
        img: "/technologies/web/nextjs.svg",
        title: "NextJS",
      },
      {
        img: "/technologies/web/MySql.svg",
        title: "MySQL",
      },
      {
        img: "/technologies/web/postgresql.svg",
        title: "PostgreSQL",
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
        img: "/technologies/mobile/Kotlin.svg",
        title: "Kotlin",
      },
      {
        img: "/technologies/mobile/swift.svg",
        title: "Swift",
      },
      {
        img: "/technologies/mobile/Ionic.svg",
        title: "Ionic",
      },

      {
        img: "/technologies/mobile/Xamarin.svg",
        title: "Xamarin",
      },

      {
        img: "/technologies/mobile/Flutter.svg",
        title: "Flutter",
      },
      {
        img: "/technologies/mobile/unity.svg",
        title: "Unity",
      },
      {
        img: "/technologies/mobile/ObjectC.svg",
        title: "ObjectC",
      },
      {
        img: "/technologies/mobile/go.svg",
        title: "GO",
      },
      {
        img: "/technologies/mobile/net.svg",
        title: ".NET",
      },

      {
        img: "/technologies/mobile/Node.svg",
        title: "NodeJS",
      },

      {
        img: "/technologies/web/Oracle.svg",
        title: "Oracle",
      },

      {
        img: "/technologies/mobile/MySql.svg",
        title: "MySQL",
      },

      {
        img: "/technologies/mobile/postgresql.svg",
        title: "PostgreSQL",
      },
    ],
  },

  {
    categoryName: "BigData and Data Analytics",
    TechnologiesList: [
      {
        img: "/technologies/bgData/aws.svg",
        title: "AWS",
      },
      {
        img: "/technologies/bgData/GSP.svg",
        title: "GCP",
      },
      {
        img: "/technologies/bgData/readHead.svg",
        title: "RedHat",
      },
      {
        img: "/technologies/web/Oracle.svg",
        title: "Oracle",
      },
      {
        img: "/technologies/bgData/Kafka.svg",
        title: "Kafka",
      },
      {
        img: "/technologies/bgData/Flink.svg",
        title: "Flink",
      },
      {
        img: "/technologies/bgData/Spark.svg",
        title: "Spark",
      },
      {
        img: "/technologies/bgData/bigQuery.svg",
        title: "Big Query",
      },
      {
        img: "/technologies/bgData/r.svg",
        title: "r",
      },
      {
        img: "/technologies/bgData/java.svg",
        title: "Java",
      },
      {
        img: "/technologies/bgData/Python.svg",
        title: "Python",
      },
      {
        img: "/technologies/web/Node.svg",
        title: "nodeJS",
      },
      {
        img: "/technologies/bgData/Mongo.svg",
        title: "Mongo",
      },

      {
        img: "/technologies/bgData/Cassandra.svg",
        title: "Cassandra",
      },
      {
        img: "/technologies/bgData/ELK.svg",
        title: "ELK",
      },

      {
        img: "/technologies/mobile/MySql.svg",
        title: "MySQL",
      },

      {
        img: "/technologies/mobile/postgresql.svg",
        title: "PostgreSQL",
      },

      {
        img: "/technologies/bgData/Metabace.svg",
        title: "Metabase",
      },
    ],
  },

  {
    categoryName: "CRM SOlutions",
    TechnologiesList: [
      {
        img: "/technologies/crm/Microsoft.svg",
        title: "Microsoft",
      },
      {
        img: "/technologies/crm/SAP.svg",
        title: "SAP",
      },
      {
        img: "/technologies/crm/SalesForce.svg",
        title: "Salesforce",
      },
      {
        img: "/technologies/crm/HubSpot.svg",
        title: "HubSpot",
      },

      {
        img: "/technologies/crm/ZOHO.svg",
        title: "ZOHO",
      },

      {
        img: "/technologies/crm/SogarCRM.svg",
        title: "SugarCRM",
      },
    ],
  },

  {
    categoryName: "Blockchain",
    TechnologiesList: [
      {
        img: "/technologies/bgData/aws.svg",
        title: "AWS",
      },
      {
        img: "/technologies/Blockchain/blockchincom.svg",
        title: "Blockchain",
      },
      {
        img: "/technologies/Blockchain/Bitcoin.svg",
        title: "Bitcoin",
      },
      {
        img: "/technologies/Blockchain/eth.svg",
        title: "Ethereum",
      },
      {
        img: "/technologies/Blockchain/Solidity.svg",
        title: "Solidity",
      },

      {
        img: "/technologies/Blockchain/bnb.svg",
        title: "Binance",
      },
      {
        img: "/technologies/Blockchain/Web3.svg",
        title: "Web3",
      },

      {
        img: "/technologies/Blockchain/metamask.svg",
        title: "metamask",
      },
      {
        img: "/technologies/Blockchain/Python.svg",
        title: "Python",
      },
      {
        img: "/technologies/Blockchain/Java.svg",
        title: "Java",
      },

      {
        img: "/technologies/web/Node.svg",
        title: "nodeJS",
      },
      {
        img: "/technologies/web/MySql.svg",
        title: "MySQL",
      },
      {
        img: "/technologies/web/postgresql.svg",
        title: "PostgreSQL",
      },
      {
        img: "/technologies/web/Oracle.svg",
        title: "Oracle",
      },
    ],
  },
];

const options = {
  items: 6,
  nav: true,
  navText: [
    `
    <svg class="servicePrev" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M37.334 13.3335L18.7655 31.902L37.334 50.4704" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


    `,
    `

<svg
class="serviceNext"
 width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M26.666 13.3335L45.2345 31.902L26.666 50.4704" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


  `,
  ],
  // rewind: true,
  // autoplay: true,
  loop: true,

  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 6,
      nav: true,
      loop: true,
    },
  },

  // navigator:
};

export const categories = [
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
        {/* <div className="technologies_mobile d-block d-md-none">
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
        </div> */}
        <div className=" d-block d-md-block">
          <div className="owlOut">
            <div className="owlWrapper">
              {categories.map((el, index) => {
                return (
                  <div
                    className={classNames({
                      "d-none": index !== activeCategory,
                    })}
                  >
                    <OwlCarousel options={options}>
                      {TechnologiesObject[index].TechnologiesList.map(
                        (el, i) => {
                          return (
                            <div className="technology_item">
                              <img
                                src={"/imgs/" + el.img}
                                alt="The Last of us"
                              />
                              <h4>{el.title}</h4>
                            </div>
                          );
                        }
                      )}
                    </OwlCarousel>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
