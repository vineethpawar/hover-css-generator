import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Indie_Flower } from "next/font/google";
import Link from "next/link";
import githubService from "@/services/githubService";
import Icon from "../Icon";
import Layout from "@/layouts";
import { LAYOUTS } from "@/utils/constants";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  const [githubStars, setGithhubStars] = useState<number>();
  useEffect(() => {
    const fetchStars = async () => {
      const githubRepoStars = await githubService?.githubRepoStars();
      setGithhubStars(githubRepoStars);
    };
    fetchStars();
  }, []);

  return (
    <Layout type={LAYOUTS.HERO}>
      <section className=" flex flex-1 w-full h-screen items-center justify-items-center ">
        <div className="cursor-default text-center w-full gap-1 flex flex-col items-center p-4">
          <div className="flex flex-col gap-4 max-w-screen-lg ">
            <h1 className="text-4xl md:text-6xl  font-extrabold text-center textGlow">
              Elevate Your Design Game with Trendy{" "}
              <span className={`wordGlow ${indieFlower.className}`}>Hover</span>{" "}
              Styles
            </h1>
            <h3 className="sm:text-xl md:text-xl  font-bold text-center capitalize text-slate-500">
              create &middot; customise &middot;{" "}
              <span className="cursor-copy text-gray-100 bg-blue-600 px-1">
                copy
              </span>
            </h3>
          </div>

          <div className="mt-10">
            <button className="primaryBtn">
              Explore{" "}
              <FontAwesomeIcon
                style={{ marginLeft: 2, marginBottom: -1 }}
                icon={faArrowRight}
              />
            </button>
          </div>
          <div className="h-10 mt-7">
            {githubStars && (
              <Link
                target="_blank"
                href={"https://github.com/vineethpawar/hover-css-generator"}
              >
                <div className="flex justify-items-start align-bottom border-2 border-slate-500 rounded-lg px-2 py-1.5 gap-1 ">
                  <div className="mr-1">
                    <Icon name="github" className="w-6 text-slate-500" />
                  </div>
                  <span className="my-auto">
                    <FontAwesomeIcon
                      // className="text-slate-500"
                      icon={faStar}
                      size="xs"
                      className="mr-0.5"
                    />
                    {Intl.NumberFormat("en", { notation: "compact" }).format(
                      githubStars
                    )}
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hero;
