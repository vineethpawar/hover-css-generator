import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Icon from "../Icon";

const Footer = () => {
  return (
    <footer>
      <h3 className="p-3 inline-flex">
        Made with <Icon name="nextjs" className="w-9 ml-1 -mt-1" />
        <Icon name="tailwindcss" className="w-5 mx-1 -mt-1" /> and
        <FontAwesomeIcon
          icon={faHeart}
          className="mx-1 my-1.5"
          color="red"
          size="sm"
        />
        by
        <Link
          target="_blank"
          href={"https://vpawar.me"}
          className="underline relative top-0.5 ml-1"
        >
          <span className=" relative bottom-0.5">Vineeth Pawar</span>
        </Link>
      </h3>
    </footer>
  );
};

export default Footer;
