"use client";

import Link from "next/link";
import React from "react";
import NavLink from "../link/NavLink";

const NavbarRuangPertemanan = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
  [x: string]: any;
}) => {
  const { onOpenSidenav, brandText, mini, hovered } = props;
  // const [darkmode, setDarkmode] = React.useState(
  //   document.body.classList.contains('dark'),
  // );
  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark::bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <NavLink
            href="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </NavLink>
        </div>
        <div className="h-6 w-[224px] pt-1">
          <Link
            href={""}
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </Link>
          <NavLink
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href="#"
          >
            {brandText}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavbarRuangPertemanan;
