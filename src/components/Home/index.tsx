import React from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <section className=" flex flex-1 w-full h-full  items-center justify-items-center ">
      <div className="cursor-default text-center w-full gap-10 flex flex-col items-center p-4">
        <div className="flex flex-col gap-4 max-w-screen-lg ">
          <h1 className="sm:text-2xl md:text-6xl  font-extrabold text-center textGlow">
            Elevate Your Design Game with Trendy{" "}
            <span className="wordGlow">Hover</span> Styles
          </h1>
          <h3 className="sm:text-xl md:text-xl  font-bold text-center capitalize text-slate-500">
            create &middot; customise &middot;{" "}
            <span className="cursor-copy text-gray-100 bg-blue-600 px-1">
              copy
            </span>
          </h3>
        </div>

        <div>
          <button className="primaryBtn">
            Explore{" "}
            <FontAwesomeIcon
              style={{ marginLeft: 2, marginBottom: -1 }}
              icon={faArrowRight}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
