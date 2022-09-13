import Link from "next/link";
import React from "react";

const ServiceMenu = () => {
  return (
    <div className="ServiceMenu">
      <ul className="list-inline">
        <li>
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
        </li>
      </ul>
    </div>
  );
};

export default ServiceMenu;
