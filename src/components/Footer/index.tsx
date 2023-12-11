import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <h3 className="p-3 ">
      Made with Next JS, Tailwind and{" "}
      <FontAwesomeIcon icon={faHeart} color="red" /> by{" "}
      <Link
        target="_blank"
        href={"https://vpawar.me"}
        className="underline relative top-0.5"
      >
        <span className=" relative bottom-0.5">Vineeth Pawar</span>
      </Link>
    </h3>
  );
};

export default Footer;
