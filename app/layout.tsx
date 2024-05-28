import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../css/loader.css"
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Ruang Pertemanan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <NextTopLoader
          color="linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px ##21d4fd,0 0 5px #21d4fd"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
                    <div class="loader spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        {children}
      </body>
    </html>
  );
}
