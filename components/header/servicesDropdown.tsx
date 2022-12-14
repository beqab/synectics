import Link from "next/link";
import React, { useEffect, useState } from "react";
import X from "../svgs/x";
import classNames from "classnames";
import { useRouter } from "next/router";

interface IProps {
  serviceIsOpen?: boolean;
  closeService?: () => void;
  closeMenu?: () => void;
}

export const menuObject = [
  {
    title: "Cloud And Infrastructure",
    items: [
      {
        title: "DevOps Service",
        href: "/cloudinfrastructure?page=devops",
      },
      {
        title: "Virtualization",
        href: "/cloudinfrastructure?page=virtualization",
      },
      {
        title: "Database Management",
        href: "/cloudinfrastructure?page=databasemanagement",
      },
      {
        title: "Storage",
        href: "/cloudinfrastructure?page=storage",
      },
      {
        title: "Security",
        href: "/cloudinfrastructure?page=security",
      },
      {
        title: "Monitoring",
        href: "/cloudinfrastructure?page=monitoring",
      },
    ],
  },
  {
    title: "Software Engineering",
    items: [
      {
        title: "Web Development",
        href: "/softwareengineering?page=webdevelopment",
      },
      {
        title: "Mobile Development",
        href: "/softwareengineering?page=mobiledevelopment",
      },
      {
        title: "Software Testing and QA",
        href: "/softwareengineering?page=SoftwareTestingAndQA",
      },
      {
        title: "CRM Solutions",
        href: "/softwareengineering?page=CRMSolution",
      },
      {
        title: "BigData and Data Analytics",
        href: "/softwareengineering?page=BigDataandDataAnalytics",
      },
      {
        title: "Blockchain",
        href: "/softwareengineering?page=blockchain",
      },
      {
        title: "Software Development Assessment",
        href: "/softwareengineering?page=SoftwareDevelopmentAssessment",
      },
    ],
  },
  {
    title: "IT Consulting",
    items: [
      {
        title: "Technology Consulting",
        href: "/itConsulting?page=TechnologyConsulting",
      },
      {
        title: "Project Management Consulting",
        href: "/itConsulting?page=ProjectManagementConsulting",
      },
      {
        title: "Delivery Management Consulting",
        href: "/itConsulting?page=DeliveryManagementConsulting",
      },
      {
        title: "IT Process Optimization Consulting",
        href: "/itConsulting?page=ITProcessOptimizationConsulting",
      },
      {
        title: "Documentation Service",
        href: "/itConsulting?page=DocumentationService",
      },
    ],
  },
  {
    title: "Digital Transformation",
    items: [
      {
        title: "Cloud Transformation",
        href: "/digitalTransformation?page=CloudTransformation",
      },
      {
        title: "Agile Transformation",
        href: "/digitalTransformation?page=AgileTransformation",
      },
      {
        title: "IT Strategy Development",
        href: "/digitalTransformation?page=ITStrategyDevelopment",
      },
    ],
  },
  {
    title: "IT outsourcing",
    href: "/itOutsourcing",
    items: [],
  },
];

const ServicesDropdown: React.FC<IProps> = ({
  serviceIsOpen = false,
  closeService,
  closeMenu,
}) => {
  const [activeSubMenu, setActiveSubMenu] = useState(0);

  const router = useRouter();

  useEffect(() => {
    let closeM = () => closeMenu();

    window.addEventListener("scroll", closeM);

    return () => window.removeEventListener("scroll", closeM);
  }, []);

  return (
    <div
      className={classNames("serviceSubmenu", {
        isMobile: "serviceIsOpen",
      })}
    >
      <div className=" d-flex">
        <div className="mainSubMenu">
          <ul className="list-inline">
            {menuObject.map((el, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    if (el.href) {
                      router.push(el.href);
                      return;
                    }
                  }}
                  onMouseOver={() => {
                    setActiveSubMenu(i);
                  }}
                  className={classNames(
                    "d-flex align-items-center justify-content-between",
                    {
                      active: activeSubMenu === i,
                    }
                  )}
                >
                  <span>{el.title}</span>
                  {el.href ? null : (
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33398 12.8335L7.13663 7.03085L1.33398 1.22821"
                        stroke="#182939"
                        stroke-opacity="0.7"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classNames("chidSubmenu", "img" + activeSubMenu)}>
          <h2>{menuObject[activeSubMenu].title}</h2>
          <ul className="list-inline">
            {menuObject[activeSubMenu].items.map((el) => {
              return (
                <li
                  key={el.title}
                  onClick={() => {
                    closeMenu();
                  }}
                >
                  <Link href={el.href}>
                    <a>{el.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
