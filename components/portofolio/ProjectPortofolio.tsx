"use client";

import { Projects } from "@/constants";
import { motion } from "framer-motion";
import React, { useState } from "react";

const ProjectPortofolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index: any) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "640px",
    },
    collapsed: {
      width: "200px",
    },
  };
  return (
    <div className="flex flex-col gap-20 max-h-[70%] max-w-[80%] text-center items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-semibold text-white text-[50px] border-b-4 border-cyan-400">
          Experience{" "}
        </h1>
        <p className="text-gray-400 text-[20px]">
          Check out our latest creations
        </p>
      </div>
      {/* project */}
      <div className="flex flex-wrap justify-center items-center">
          {Projects.map((project, index) => (
            <motion.div
              key={project.name}
              className={`cursor-pointer h-[500px] me-4 mt-4 bg-cover bg-center rounded-xl shadow-lg overflow-hidden max-w-lg p-2 hover:shadow-blue-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6`}
              variants={cardVariants}
              animate={index !== expandedIndex ? "collapsed" : "expanded"}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundImage: `url(${project.src})`,
              }}
            >
              <div className="h-full flex flex-col justify-end">
                <div className="rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center rounded-md shadow-lg overflow-hidden max-w-lg p-2 hover:shadow-blue-300">
                  <h2 className="text-xl font-semibold text-white text-center">
                    {project.name}
                  </h2>
                  {index === expandedIndex && (
                    <div>
                      <p className="mt-2 text-gray-300 text-center">
                        {project.description}
                      </p>
                      <a href={project.demo}>
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Demo
                        </button>
                      </a>
                      <a href={project.code}>
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Code
                        </button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default ProjectPortofolio;
