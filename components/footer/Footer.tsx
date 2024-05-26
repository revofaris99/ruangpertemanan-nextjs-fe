import Image from "next/image";
import Link from "next/link";
import Images from "@/constants/images";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
const Footer = () => {
  return (
    <div
      className="p-2 bg-white dark:bg-gray-600 dark:text-black rounded-2xl w-full"
      style={{ backgroundImage: "url(/bg-footer.jpg)" }}
    >
      <div className="rounded-lg m-4 shadow-2xl">
        <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
              <Image
                src={Images.logoR}
                className="mr-3 rounded-2xl bg-gray-800 -mt-10 w-[100px] h-[100px]"
                alt="Logo"
              />
              <div className="grid grid-cols-1">
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Ruang Pertemanan
                </span>
                <p className="max-w-sm">
                  Ruang Pertemanan ini merupakan sebuah coretan kecil dari
                  sebuah perjalanan kita untuk menjadi manusia yang seutuhnya
                </p>
              </div>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-lg font-bold text-black sm:mb-0 xl:-mt-10">
              <li>
                <Link
                  href="/"
                  className="mr-4 hover:underline md:mr-6"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="mr-4 hover:underline md:mr-6"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center my-6">
            <ul className="flex justify-between ms-4">
              <li>
                <Link href="https://www.youtube.com/@ruangpertemanan4194">
                  <AiFillYoutube className="w-8 h-8 me-4 hover:translate-y-1 fill-red-700" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsInstagram className="w-8 h-8 me-4 hover:translate-y-1 fill-red-600" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsDiscord className="w-8 h-8 me-4 hover:translate-y-1 fill-gray-900" />
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            @2023{" "}
            <a href="/" className="hover:underline">
              Ruang Pertemanan
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
