import Link from "next/link";
import React from "react";

interface IProp {
  menuArray: { title: string; href: string }[];
}

const ServiceMenu: React.FC<IProp> = ({ menuArray }) => {
  return (
    <div className="ServiceMenu">
      <ul className="list-inline">
        {menuArray.map((el, i) => {
          return (
            <li>
              <Link href={el.href}>
                <a>{el.title}</a>
              </Link>
            </li>
          );
        })}
        {/* <li>
          <Link href="/">
            <a>Web Development</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Mobile Development</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>ERP Solutions</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>CRM Solutions</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>BigData and Data Analytics</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Blockchain</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Software Development Assessment</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Software Testing and QA</a>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default ServiceMenu;
