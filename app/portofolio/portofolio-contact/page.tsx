import Navbar from "@/components/navbar/Navbar";
import ContactPortofolio from "@/components/portofolio/ContactPortofolio";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'portofolio-contact',
};
const Page = () => {
  return (
    <div className="">
      <Navbar />
      <div
        className="bg-cover bg-black flex items-center justify-center w-screen h-screen overflow-x-hidden relative"
        style={{ backgroundImage: "url(/bg8-portofolio.png)" }}
      >
        <ContactPortofolio />
      </div>
    </div>
  );
};

export default Page;
