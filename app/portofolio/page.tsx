import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icons from "@/constants/icons";
import { Metadata } from "next";
import AuroraHero from "@/components/aurora-effect/AuroraHero";
export const metadata: Metadata = {
  title: "My Portofolio",
};
const Page = () => {
  return (
    <main className="w-screen h-screen relative">
      <Navbar />
      <div
        className="flex items-center w-full h-full bg-cover bg-center bg-[url('/bg-portofolio.png')]"
      >
        <div className="md:pl-40 pb-56 md:pb-20 flex flex-col gap-2 z-[50]">
          <p className="text-red-500">HI, My name is</p>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Revo Faris Saifuddin
          </h1>
          <h2 className="text-4xl sm:text-4xl font-bold text-[#8892b0]">
            I'm Full Stack Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            Bachelor of majoring in Information Systems at Telkom University
            Bandung.
          </p>
          <div className="">
            <button className="rounded-lg group text-white border-2 px-6 py-3 my-2 flex item-center hover:bg-red-500 hover:border-red-500">
              <Link href="/portofolio/portofolio-project">View Experience</Link>
              <span className="mt-1 group-hover:rotate-90 duration-300">
                <Icons.HiArrowNarrowRight className="ml-3 text-bold" />
              </span>
            </button>
          </div>
        </div>
        <Image
          src="/stars.png"
          alt="stars"
          height={300}
          width={300}
          className="absolute top-10 left-0 z-[40]"
        />
        <Image
          src="/stars.png"
          alt="stars"
          height={300}
          width={500}
          className="absolute top-0 right-0 z-[40]"
        />
      </div>
      <div className="absolute bottom-0 z-[10] w-full h-auto">
        <AuroraHero />
      </div>
      <div className="absolute bottom-0 right-0 z-[20]">
        <Image
          src="/bg3-portofolio.png"
          alt="bg3-portofolio"
          height={200}
          width={200}
          className="absolute right-30 top-48"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>
      <div className="absolute bottom-0 z-[10] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
    </main>
  );
};

export default Page;
