"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import React from "react";

const biography = [
  `Tiew, your Management Maestro, transforms ideas into reality. Leveraging meticulous planning, strategic execution, and a collaborative spirit, Tiew has a proven track record of success across diverse projects and industries.  His expertise in leading teams, optimizing processes, and ensuring efficient resource allocation fosters seamless workflows, guaranteeing on-time project completion and exceeding expectations.`
];

const biography_quote = [`"Building success brick by efficient brick."`];

const skills = [
  { category: "Language", skill: "English" },
  { category: "Language", skill: "Malay" },
  { category: "Language", skill: "Chinese" },
  { category: "Technical", skill: "Math Modeling" },
  { category: "Technical", skill: "Optimization" },
  { category: "Management", skill: "Team Mgmt" },
  { category: "Management", skill: "Operations Mgmt" },
  { category: "Management", skill: "Project Mgmt" },
  { category: "Management", skill: "Resources Mgmt" },
  { category: "Management", skill: "Talent Mgmt" },
  { category: "Management", skill: "Performance Mgmt" },
  { category: "Management", skill: "Warehouse Mgmt" },
  { category: "Management", skill: "Maintenance Mgmt" },
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
    jcomp: "Pureman Engineering (M) Sdn Bhd",
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
    <div className="p-3 mb-3 bg-white bg-opacity-50 rounded-2xl">
      <h2 className="mb-3 font-semibold">{category}</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill.skill}
            className={`rounded p-2 text-xs cursor-pointer bg-red-500 text-white hover:bg-white hover:text-black ${
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
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-24 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col justify-center gap-12 ">
            {/* BIOGRAPHY TITLE */}
            <h1 className="text-2xl font-bold">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">{biography}</p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">{biography_quote}</span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-bookmarks"
                viewBox="0 0 16 16"
              >
                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />{" "}
                <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 384 512"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </motion.svg>
          </div>

          {/* EXCLUDED FOR NOW */}
          {/* EDUCATION CONTAINER*
          <div className="flex flex-col justify-center gap-12 " ref={eduRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isEduRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              EDUCATION
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isEduRefInView ? { x: "0" } : {}}
              className="container flex flex-wrap gap-3 text-lg md:flex-nowrap"
            >
              {edus.map((edu) => (
                <div
                  key={edu.id}
                  className="flex flex-col gap-3 p-1 border border-white rounded-xl "
                >
                  <div className="flex px-2 text-xs italic font-semibold text-white bg-red-500 max-w-fit">
                    {edu.grad}
                  </div>
                  <div className="p-3 text-base font-semibold bg-white rounded-xl">
                    {edu.course}
                  </div>
                  <div className="px-3 mb-3 text-sm italic text-gray-800">
                    {edu.uni}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          */}

          {/* SKILL CONTAINER */}
          <div className="flex flex-col justify-center gap-12" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
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
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 384 512"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col justify-center gap-12 pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
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
                  <div className={"flex justify-between h-60"} key={jitem.jid}>
                    <div className="w-1/24"></div>
                    <div className="w-1/12">
                      {/* LINE */}
                      <div className="relative w-1 h-full bg-gray-600 rounded">
                        {/* LINE CIRCLE */}
                        <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                      </div>
                    </div>
                    <div className="w-2/3">
                      <div className="p-1 border border-white rounded">
                        <div className="p-3 text-sm font-semibold bg-white rounded-b-lg rounded-s-lg">
                          {jitem.jtitle}
                        </div>
                        <div className="p-3 text-xs italic">{jitem.jdesc}</div>
                        <div className="p-3 text-xs font-semibold text-red-400">
                          {jitem.jdate}
                        </div>
                        <div className="p-1 text-xs font-semibold rounded bg-slate-300 w-fit">
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
        {/* SVG CONTAINER */}
        <div className="sticky top-0 z-30 hidden w-1/3 lg:block xl:1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
