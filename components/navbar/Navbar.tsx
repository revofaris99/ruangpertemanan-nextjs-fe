"use client";
import { useEffect, useState } from "react";
import Icons from "@/constants/icons";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import TransitionPortofolio from "../transition/TransitionPortofolio";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [isRouting, setIsRouting] = useState(false);
  const [prevPath, setPrevPath] = useState("/");

  const path = usePathname();

  useEffect(() => {
    if (prevPath != path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);

      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRouting]);

  return (
    <div className="fixed w-[96%] z-[99] mt-4 ms-[2%] rounded-2xl h-[70px] flex justify-between item-center p-6 text-gray-300 font-bold shadow-lg">
      <div className="font-bold text-xl">
        <h1>
          <Link href={""} className="cursor-pointer">
            Portofolio
          </Link>
        </h1>
      </div>
      {/* nav menu */}
      <AnimatePresence mode="wait">
        {isRouting && <TransitionPortofolio key="uniqueKey" />}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:dark:transparant">
            <li>
              <Link
                href={"/portofolio"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/portofolio/portofolio-about"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/portofolio/portofolio-skills"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                href={"/portofolio/portofolio-project"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href={"/portofolio/portofolio-contact"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </AnimatePresence>
      {/* end nav menu */}
      {/* mobile menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {/* <FaBars /> */}
        {!nav ? <Icons.FaBars size={20} /> : <Icons.FaTimes size={20} />}
        <AnimatePresence mode="wait">
          {isRouting && <TransitionPortofolio key="uniqueKey" />}
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-20 left-0 w-full h-auto bg-[#8892b0] rounded-xl"
            }
          >
            <li className="px-4">
              <Link
                href={"/portofolio"}
                className="flex items-center py-2  px-2 text-white rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 hover:shadow-blue-300"
                aria-current="page"
              >
                <Icons.IoHome size={20} className="me-2" />
                Home
              </Link>
            </li>
            <li className="px-4">
              <Link
                href={"/portofolio/portofolio-about"}
                className="flex items-center py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <Icons.IoManSharp size={20} className="me-2" />
                About
              </Link>
            </li>
            <li className="px-4">
              <Link
                href={"/portofolio/portofolio-skills"}
                className="flex items-center py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <Icons.GiSkills size={20} className="me-2" />
                Skill
              </Link>
            </li>
            <li className="px-4">
              <Link
                href={"/portofolio/portofolio-project"}
                className="flex items-center py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <Icons.BsPersonWorkspace size={20} className="me-2" />
                Experience
              </Link>
            </li>
            <li className="px-4">
              <Link
                href={"/portofolio/portofolio-contact"}
                className="flex items-center py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <Icons.MdContactMail size={20} className="me-2" />
                Contact
              </Link>
            </li>
          </ul>
        </AnimatePresence>
      </div>
      {/* end mobile menu */}
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
        <ul>
          <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-md shadow-lg overflow-hidden max-w-lg p-2 hover:shadow-blue-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="https://www.linkedin.com/in/revofarissaifuddin/"
            >
              LinkedIn
              <div className="rounded- bg-slate-600 mr-2">
                <Icons.FaLinkedin size={40} />
              </div>
            </a>
          </li>
          <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-md shadow-lg overflow-hidden max-w-lg p-2 hover:shadow-blue-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="https://github.com/revofarissaifuddin"
            >
              Github
              <div className="rounded-full bg-slate-600 mr-2">
                <Icons.FaGithub size={40} />
              </div>
            </a>
          </li>
          <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e63f3f] rounded-md shadow-lg overflow-hidden max-w-lg p-2 hover:shadow-blue-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="revofaris99@gmail.com"
            >
              Email
              <div className="rounded-full bg-slate-600 mr-2">
                <Icons.HiOutlineMail size={40} />
              </div>
            </a>
          </li>
          <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-md shadow-lg overflow-hidden max-w-lg p-2 hover:shadow-blue-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="https://medium.com/@revofaris79"
            >
              Medium
              <div className="rounded-full bg-slate-600 mr-2">
                <Icons.BsFillPersonLinesFill size={40} />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:hidden fixed flex-col top-[70%] right-4">
        <ul>
          <li className="w-[170px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[10px] duration-300 bg-transparant rounded-md shadow-lg overflow-hidden max-w-lg p-2 hover:shadow-blue-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="https://www.linkedin.com/in/revofarissaifuddin/"
            >
              <div className="rounded-full  bg-slate-600 mr-2">
                <Icons.FaLinkedin size={40} />
              </div>
              LinkedIn
            </a>
          </li>
          <li className="w-[170px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-transparant rounded-md shadow-lg overflow-hidden max-w-lg p-2 hover:shadow-blue-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="https://github.com/revofarissaifuddin"
            >
              <div className="rounded-full bg-slate-600 mr-2">
                <Icons.FaGithub size={40} />
              </div>
              Github
            </a>
          </li>
          <li className="w-[170px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-transparant rounded-md shadow-lg overflow-hidden max-w-lg p-2 hover:shadow-blue-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="revofaris99@gmail.com"
            >
              <div className="rounded-full bg-slate-600 mr-2">
                <Icons.HiOutlineMail size={40} />
              </div>
              Email
            </a>
          </li>
          <li className="w-[170px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-transparant rounded-md shadow-lg overflow-hidden max-w-lg p-2 hover:shadow-blue-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="https://medium.com/@revofaris79"
            >
              <div className="rounded-full bg-slate-600 mr-2">
                <Icons.BsFillPersonLinesFill size={40} />
              </div>
              Medium
            </a>
          </li>
        </ul>
      </div>
      {/* end Social icons */}
    </div>
  );
};

export default Navbar;
