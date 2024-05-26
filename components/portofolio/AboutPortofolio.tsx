"use client";
import React,{useEffect, useRef} from "react";
import AboutPhotoPorto from "./AboutPhotoPorto";
import styles from "@/css/page.module.scss";
import { useScroll, motion } from "framer-motion";
const AboutPortofolio = () => {
  const element = useRef(null);
  const {scrollYProgress}=useScroll({
    target:element,
    offset:['start 0.9','start 0.25']
  })
  useEffect(()=>{
    scrollYProgress.on("change",e=> console.log(e))
  },[])
  return (
    <>
      <section className="h-full w-full">
        <div className="mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 mt-[20%] xl:order-none">
            {/* text */}
            <div className="text-center xl:text-left leanding-[1.1] ">
              <h1 className="text-[48px] xl:text-[80px] font-semibold text-white border-b-4 border-cyan-400 ms:mt-50">
                About me
              </h1>
              <div className="">
                <motion.p
                  ref={element}
                  style={{opacity:scrollYProgress}}
                  className={styles.paragraph}
                  // className="max-w-[500px] mb-9 text-white mt-4"
                >
                  Bachelor of majoring in Information Systems at Telkom
                  University Bandung. Interest in Information Technology and
                  Data Analytics. Have a training certificate to support
                  knowledge about web and mobile applications and data analysis
                  for industry standards. Has internship experience at PT Kereta
                  Api Indonesia (KAI) Bandung in the IT Development section,
                  tasked to process of developing desktop applications using the
                  programming language C#. Have boot camp experience as
                  full-stack Web and Mobile developer training using javascript,
                  react, react js, react native, node js, bootstrap, and express
                  js. Having capabilities in the field of data analysis and
                  visualization, and application development, and supported by
                  system development and statistics capabilities, Revo is ready
                  to work in a professional field in Web and Mobile Development,
                  data analysis, and business intelligence. Able to work
                  effectively both as individuals and as part of a team. Having
                  curiosity makes it easier to adapt to new technology, and
                  uphold the value of integrity, hardworking, and earnestness in
                  carrying out trust and responsibilities.
                </motion.p>
              </div>
            </div>
            {/* photo */}
            <div className="ms-[10%] order-1 xl:order-none mb-8 xl:mb-0">
              <AboutPhotoPorto />
            </div>
          </div>
        </div>
      </section>

      {/*  <motion.div
        className="flex flex-col gap-6 pt-10 absolute left-72 max-w-[500px]"
        // animate={textControls}
        // transition={{ duration: 2 }}
      >
        <h1 className="text-6xl text-[#2dceff]">About me</h1>
        <p className="text-gray-200 text-[18px] max-w-[700px]">
          Bachelor of majoring in Information Systems at Telkom University
          Bandung. Interest in Information Technology and Data Analytics. Have a
          training certificate to support knowledge about web and mobile
          applications and data analysis for industry standards. Has internship
          experience at PT Kereta Api Indonesia (KAI) Bandung in the IT
          Development section, tasked to process of developing desktop
          applications using the programming language C#. Have boot camp
          experience as full-stack Web and Mobile developer training using
          javascript, react, react js, react native, node js, bootstrap, and
          express js. Having capabilities in the field of data analysis and
          visualization, and application development, and supported by system
          development and statistics capabilities, Revo is ready to work in a
          professional field in Web and Mobile Development, data analysis, and
          business intelligence. Able to work effectively both as individuals
          and as part of a team. Having curiosity makes it easier to adapt to
          new technology, and uphold the value of integrity, hardworking, and
          earnestness in carrying out trust and responsibilities.
        </p>
        <button
          className="bg-[#2dceff] p-4 rounded-xl text-white"
          //   onClick={handleClick}
        >
          Learn more
        </button>
      </motion.div>
      <motion.img
        src="/bg5-portofolio.jpg"
        alt="bg5-portofolio"
        width={476}
        height={476}
        // animate={imageControls}
        transition={{ duration: 2 }}
        className="absolute right-72"
      /> */}
    </>
  );
};

export default AboutPortofolio;
