import React from "react";
import Icon from "../Icon";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logoWhite.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex w-full align-end justify-between gap-4 p-3">
      <Link href={"/"}>
        <Image
          src={logo}
          width={150}
          className="cursor-pointer select-none"
          alt="logo"
        />
      </Link>
      <div className="flex items-center gap-3 -mt-5">
        <Link
          target="_blank"
          href={"https://github.com/vineethpawar/hover-css-generator"}
          className="underline"
        >
          {/* <FontAwesomeIcon size="lg" icon={faUser} /> */}
          <Icon name="github" className="w-8 cursor-pointer" />
        </Link>
        <button className="primaryBtn">Hire me </button>
      </div>
    </div>
  );
};

export default Header;
