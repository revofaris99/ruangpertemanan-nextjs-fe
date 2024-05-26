import AuroraHero from "@/components/aurora-effect/AuroraHero";
import Navbar from "@/components/navbar/Navbar";
import SkillsPortofolio from "@/components/portofolio/SkillsPortofolio";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "portofolio-skills",
};
const Page = () => {
  return (
    <div className="">
      <Navbar />
      <div
        className="bg-cover flex items-center justify-center w-screen h-screen overflow-x-hidden relative"
        style={{ backgroundImage: "url(/bg6-portofolio.png)" }}
      >
        <SkillsPortofolio />
        <div className="absolute bottom-0 z-[10] w-full h-auto">
          <AuroraHero />
        </div>
      </div>
    </div>
  );
};

export default Page;
