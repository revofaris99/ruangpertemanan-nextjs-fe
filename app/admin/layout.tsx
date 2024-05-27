"use client";
// Layout components
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import routes from "routes";
import {
  getActiveNavbar,
  getActiveRoute,
  isWindowAvailable,
} from "@/utils/navigator";
import React from "react";
import AdminSidebar from "@/components/sidebar";
import Footer from "@/components/footer/Footer";
import NavbarRuangPertemanan from "@/components/navbar/NavbarRuangPertemanan";

export default function Admin({ children }: { children: React.ReactNode }) {
  // states and function
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="flex h-full w-full bg-[#212121] dark:bg-[#212121]">
      {/* sidebar */}
      <AdminSidebar
        routes={routes}
        open={open}
        setOpen={setOpen}
        variant="admin"
      />
      {/* Navbar & Main Content */}
      <div className="h-full w-full font-dm dark:bg-[#212121]">
        {/* Main Content */}
        <main
          className={`mx-2.5  flex-none transition-all dark:bg-[#212121] 
              md:pr-2 xl:ml-[323px]`}
        >
          {/* Routes */}
          <div className="">
            <NavbarRuangPertemanan
              onOpenSidenav={() => setOpen(!open)}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
            />
            <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
              {children}
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
