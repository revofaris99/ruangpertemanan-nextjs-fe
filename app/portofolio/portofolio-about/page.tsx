import Navbar from "@/components/navbar/Navbar";
import AboutPortofolio from "@/components/portofolio/AboutPortofolio";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "portofolio-about",
};
const Page = () => {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <div
        className="flex items-center justify-center w-screen h-screen overflow-x-hidden relative"
        style={{ backgroundImage: "url(/bg2-portofolio.png)" }}
      >
        <div className="z-[5]">
          <AboutPortofolio />
        </div>
      </div>
    </div>
  );
};

export default Page;
