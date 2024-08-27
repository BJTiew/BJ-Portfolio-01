"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";

const biography = `Tiew, your Management Maestro, transforms ideas into reality. Leveraging meticulous planning, strategic execution, and a collaborative spirit.`;

const biography_quote = `"Building success brick by efficient brick."`;

const skills = [
  { category: "Language", skill: "English" },
  { category: "Language", skill: "Malay" },
  { category: "Language", skill: "Chinese" },
  { category: "Technical", skill: "Math Modeling" },
  { category: "Technical", skill: "Optimization" },
  { category: "Management", skill: "Team" },
  { category: "Management", skill: "Operations" },
  { category: "Management", skill: "Project" },
  { category: "Management", skill: "Resources" },
  { category: "Management", skill: "Talent" },
  { category: "Management", skill: "Performance" },
  { category: "Management", skill: "Warehouse" },
  { category: "Management", skill: "Maintenance" },
  { category: "Software", skill: "AutoCAD" },
  { category: "Software", skill: "Inventor" },
  { category: "Software", skill: "GAMS" },
  { category: "Software", skill: "Fluent" },
  { category: "Software", skill: "Microsoft Offices" },
  { category: "Software", skill: "Photoshop" },
  { category: "Software", skill: "Illustrator" },
  { category: "Software", skill: "Premier Pro" },
];

const jitems = [
  {
    jid: 1,
    jtitle: "Managing Director",
    jdesc: "Food processing and trading.",
    jdate: "2019 Mar",
    jcomp: "Tizzel (M) Sdn Bhd",
  },
  {
    jid: 2,
    jtitle: "Operations Manager",
    jdesc: "Environmental Engineering - Dust control.",
    jdate: "2016 Dec",
    jcomp: "Pureman Venture (M) Sdn Bhd",
  },
  {
    jid: 3,
    jtitle: "Senior Production Engineer",
    jdesc: "Oil and Gas - Construction & steel works.",
    jdate: "2013 Jan",
    jcomp: "SapuraKencana Petroleum Bhd ",
  },
  {
    jid: 4,
    jtitle: "Project & Service Engineer",
    jdesc: "Water specialist - UPW and Industrial Effluents.",
    jdate: "2010 Jun",
    jcomp: "Darco Industrial Water (M) Sdn Bhd",
  },
  {
    jid: 5,
    jtitle: "Project Engineer",
    jdesc: "Automation and fabrication of customised machines.",
    jdate: "2009 Apr",
    jcomp: "Lotus Scientific (M) Sdn Bhd",
  },
  {
    jid: 6,
    jtitle: "Research Assistant",
    jdesc: "Education - Research.",
    jdate: "2007 Oct",
    jcomp: "PROSPECT",
  },
  {
    jid: 7,
    jtitle: "Industrial Trainee",
    jdesc: "Oil and Gas - Research.",
    jdate: "2008 Apr",
    jcomp: "Titan Petrochem (M) Sdn Bhd",
  },
];

const edus = [
  {
    id: 1,
    course: "MSc in Chemical Engineering",
    uni: "Universiti Teknologi Petronas (UTP)",
    grad: "2013",
  },
  {
    id: 2,
    course: "Bachelor of Engineering (Chemical)",
    uni: "Universiti Teknologi Malaysia (UTM)",
    grad: "2009",
  },
];

function renderSkills(category) {
  return (
    <div className="p-4 mb-4 bg-opacity-75 bg-sky-200 rounded-2xl">
      <h2 className="mb-3 text-xl font-semibold md:text-xl lg:text-2xl">{category}</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill.skill}
            className={`rounded p-2 text-sm cursor-default md:text-lg lg:text-xl bg-red-500 text-white hover:bg-white hover:text-black ${
              skill.category === category ? "" : "hidden"
            }`}
          >
            <div>{skill.category === category && skill.skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true})
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  // const isExperienceRefInView = useInView(experienceRef, {once:true})
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const eduRef = useRef();
  // const isEduRefInView = useInView(eduRef, {once:true})
  const isEduRefInView = useInView(eduRef, { margin: "-100px" });

  return (
    <motion.div>
      <div className="" ref={containerRef}>

        {/* BIOGRAPHY */}
        <div className="flex items-center justify-center py-8 md:py-12 lg:py-16 w-screen h-[calc(100vh-6rem)]">
          <div className="lg:w-4/5">
            <div className="flex flex-col gap-6 px-10 py-16 m-6 bg-white md:py-24 lg:py-24 bg-opacity-70 rounded-2xl md:m-12 lg:m-0 lg:w-2/3">
              <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">BIOGRAPHY</h1>
              <p className="text-md md:text-xl lg:text-2xl">{biography}</p>
              <span className="pt-6 italic md:pt-10 lg:pt-14">{biography_quote}</span>
            </div>
          </div>
        </div>

        {/* EDUCATION CONTAINER*/}
        <div
          className="flex items-center justify-center w-screen h-screen py-8 bg-purple-300 md:py-12 lg:py-16"
          ref={eduRef}
        >
          <div className="lg:w-4/5">
            <div className="flex flex-col gap-6 p-10 m-6 bg-white bg-opacity-50 rounded-2xl md:m-12 lg:m-0 lg:w-2/3">
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isEduRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold md:text-5xl lg:text-6xl"
              >
                EDUCATION
              </motion.h1>

              <motion.div
                initial={{ x: "-300px" }}
                animate={isEduRefInView ? { x: "0" } : {}}
                className="container flex flex-wrap gap-4 text-lg md:gap-8 lg:gap-8 md:flex-nowrap"
              >
                {edus.map((edu) => (
                  <div key={edu.id} className="flex flex-col gap-3 p-4 bg-purple-300 md:w-1/2 rounded-2xl">
                    <div className="flex px-2 text-xs italic font-semibold text-white bg-red-500 max-w-fit md:text-sm lg:text-md">{edu.grad}</div>
                    <div className="p-3 text-base font-semibold bg-white rounded-xl md:text-lg lg:text-2xl">{edu.course}</div>
                    <div className="px-3 mb-3 text-sm italic text-gray-800 md:text-base lg:text-md">{edu.uni}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>


        {/* SKILL CONTAINER */}
        <div
          className="flex items-center justify-center w-screen min-h-screen py-8 md:py-12 lg:py-16 bg-sky-200"
          ref={skillRef}
        >
          <div className="lg:w-4/5">
            {/* SKILL TITLE */}
            <div className="flex flex-col gap-6 p-10 m-6 bg-white bg-opacity-50 rounded-2xl md:m-12 lg:m-0 lg:w-2/3">
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold md:text-5xl lg:text-6xl"
              >
                SKILLS
              </motion.h1>
              {/* SKILL LIST */}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                className=""
              >
                <div>
                  {["Language", "Technical", "Management", "Software"].map(
                    (category) => renderSkills(category)
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex items-center justify-center w-screen min-h-screen py-8 md:py-12 lg:py-16 bg-emerald-200"
            ref={experienceRef}
          >
          <div className="lg:w-4/5">
            {/* EXPERIENCE TITLE */}
            <div className="flex flex-col gap-6 p-10 m-6 bg-white bg-opacity-50 rounded-2xl md:m-12 lg:m-0 lg:w-2/3">
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isExperienceRefInView ? { x: "0" } : {}}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold md:text-5xl lg:text-6xl"
              >
                EXPERIENCE
              </motion.h1>
              {/* EXPERIENCE LIST */}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isExperienceRefInView ? { x: "0" } : {}}
                className=""
              >
                <div className="">
                  {jitems.map((jitem, index) => (
                    <div className={"flex justify-between"} key={jitem.jid}>
                      <div className="w-1/24"></div>
                      <div className="w-1/12">
                        {/* LINE */}
                        <div className="relative w-1 h-full bg-gray-600 rounded">
                          {/* LINE CIRCLE */}
                          <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                        </div>
                      </div>
                      <div className="w-4/5">
                        <div className="p-3 mb-8 border bg-emerald-300 rounded-xl">
                          <div className="p-3 text-base font-semibold bg-white rounded-b-lg rounded-s-lg md:text-lg lg:text-xl">
                            {jitem.jtitle}
                          </div>
                          <div className="p-3 text-sm italic md:text-md lg:text-lg ">{jitem.jdesc}</div>
                          <div className="p-3 text-sm font-semibold text-red-400 lg:absolute lg:text-lg md:text-md lg:right-2 lg:text-white">
                            {jitem.jdate}
                          </div>
                          <div className="p-1 text-sm font-semibold text-white rounded lg:text-lg md:text-md w-fit">
                            {jitem.jcomp}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default AboutPage;
