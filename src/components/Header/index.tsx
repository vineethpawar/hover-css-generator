import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logoWhite.png";
import githubService from "@/services/githubService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex w-full align-end justify-between gap-4 p-3">
      <Link href={"/"}>
        <Image
          src={logo}
          width={100}
          className="cursor-pointer select-none"
          alt="logo"
        />
      </Link>
      <div className="mt-1">
        <button className="primaryBtn">Login </button>
      </div>
    </div>
  );
};

export default Header;
