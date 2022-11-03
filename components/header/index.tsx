import Link from "next/link";
import React, { useEffect, useState } from "react";
import ServicesDropdown from "./servicesDropdown";
import X from "../svgs/x";
import MobileMenu from "./mobileMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = (flag?: boolean) => {
    setOpenMenu(flag);
  };

  useEffect(() => {
    const closeMenu = () => {
      setOpenMenu(false);
    };

    window.addEventListener("click", closeMenu);

    return () => window.removeEventListener("click", closeMenu);
  }, []);

  return (
    <header>
      <MobileMenu openMenu={openMenu} setOpenMenu={() => setOpenMenu(false)} />
      <div className="container ">
        <div className="d-flex align-items-center justify-content-between">
          <Link href={"/"}>
            <a>
              <img className="headerLogo" src="/imgs/Group 53 (1).svg" />
            </a>
          </Link>
          <div
            onClick={() => toggleMenu(!openMenu)}
            className="menuIcon_wrapper d-block d-md-none"
          >
            {!openMenu ? (
              <svg
                className="openIcon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H11C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12ZM3 17.25C2.58579 17.25 2.25 17.5858 2.25 18C2.25 18.4142 2.58579 18.75 3 18.75H16C16.4142 18.75 16.75 18.4142 16.75 18C16.75 17.5858 16.4142 17.25 16 17.25H3Z"
                  fill="#050F2B"
                />
              </svg>
            ) : (
              <X />
            )}
          </div>
          <div className="nav d-none d-md-block ">
            <ul className="list-inline mb-0 headerMenu">
              {/* <li className="withSubmenu">
                <Link href={"/"}>
                  <a>
                    <span>Services</span>
                  </a>
                </Link>
                <ServicesDropdown />
              </li> */}
              <li>
                <Link href={"/"}>
                  <a>Home</a>
                </Link>
              </li>
              <li className="withSubmenu">
                <Link href={"/"}>
                  <a
                    onMouseOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenMenu(true);
                    }}
                  >
                    <span>
                      Services
                      <svg
                        width="12"
                        height="6"
                        viewBox="0 0 12 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.666 0.666504L6.0239 5.30862L1.38179 0.666504"
                          stroke="#182939"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </Link>
                {/* <ServicesDropdown /> */}
              </li>
              <li>
                <Link href={"/#technologies"}>
                  <a>Technologies</a>
                </Link>
              </li>
              <li>
                <Link href={"/#ourApproach"}>
                  <a>Our Approach</a>
                </Link>
              </li>
              <li>
                <Link href={"/aboutUs"}>
                  <a>About us</a>
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href={"/estimatePrice"}>
                  <a className="menuBtn">
                    <span className="btn btn-primary">Price Estimation</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {openMenu ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="dropDownMenu"
        >
          <ServicesDropdown
            closeMenu={() => {
              setOpenMenu(false);
            }}
          />
        </div>
      ) : null}
    </header>
  );
};

export default Header;
