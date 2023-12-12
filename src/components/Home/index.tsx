import React from "react";
import Hero from "./Hero";
import Layout from "@/layouts";
import { LAYOUTS } from "@/utils/constants";

const Home = () => {
  return (
    <Layout type={LAYOUTS.ONLY_FOOTER}>
      <Hero />
    </Layout>
  );
};

export default Home;
