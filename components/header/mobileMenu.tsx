import Link from "next/link";
import React, { useState } from "react";
import X from "../svgs/x";
import classnames from "classnames";
import ServicesDropdown from "./servicesDropdown";

interface IProps {
  setOpenMenu?: () => void;
  openMenu: boolean;
}

const MobileMenu: React.FC<IProps> = ({ setOpenMenu, openMenu }) => {
  const [service, setService] = useState(false);
  return (
    <div
      className={classnames("mobileMenu", {
        mobileMenu_open: openMenu,
      })}
    >
      <div className="mobileMenu_wrapper">
        <div className="mobileMenu_header">
          <div className="mobileMenu_header_title">Menu</div>{" "}
          <div onClick={() => setOpenMenu()}>
            <X />
          </div>
        </div>
        <ServicesDropdown
          serviceIsOpen={service}
          closeService={() => setService(false)}
          closeMenu={() => {
            setService(false);
            setOpenMenu();
          }}
        />
        <div
          className={classnames("mobileMenu_nav", {
            ["d-none"]: service,
          })}
        >
          <ul className="list-inline">
            <li>
              <Link href="/">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setService(true);
                  }}
                >
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Technologies</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Our Approach</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Price Estimation</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
