import Navbar from "@/components/navbar/Navbar";
import ProjectPortofolio from "@/components/portofolio/ProjectPortofolio";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'portofolio-project',
};
const Page = () => {
  return (
    <div className="">
      <Navbar />
      <div
        className="bg-cover flex items-center justify-center w-screen h-screen overflow-x-hidden relative"
        style={{ backgroundImage: "url(/bg7-portofolio.png)" }}
      >
        <ProjectPortofolio />
      </div>
    </div>
  );
};

export default Page;
