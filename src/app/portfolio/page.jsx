"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-400 to-red-300",
    title: "PC-Wheatstone LNG Project",
    desc: `
      Co-led a team of over 18,500 to deliver 37 high-quality LNG modules for the Wheatstone LNG Project, weighing 65,909MT. Proposed and implemented innovative solutions like the CA$S program and RFID tracking ensured on-time completion and superior quality, earning recognition from the project owner.
    `,
    img: "/portfolio/01.webp"
  },
  {
    id: 2,
    color: "from-blue-400 to-blue-300",
    title: "PC-Exxon Tapis R Jacket",
    desc: `
      Orchestrated the efficient execution of Malaysia’s first large-scale enhanced oil recovery initiative, ensuring timely and budget-conscious delivery. Proactive management and strategic personnel allocation facilitated smooth construction and load-out.
    `,
    img: "/portfolio/02.webp"
  },
  {
    id: 3,
    color: "from-violet-400 to-violet-300",
    title: "Refurbish of SETR DES KM-2",
    desc: `      
      Supported the refurbishment of the Self-Erecting Tender Rig Derrick Equipment Set KM-2 (8,750MT), completing the project on time and within budget through meticulous organization and performance monitoring.
      `,
    img: "/portfolio/03.webp"
  },
  {
    id: 4,
    color: "from-purple-400 to-purple-300",
    title: "MEMC UPW System Upgrade",
    desc: `
      As Management Maestro at MEMC Ipoh, I uncovered hidden water quality issues impacting production. Leading a root cause analysis and upgrade project, I secured a 30% gross profit contract, ensured system functionality, and delivered substantial cost savings through efficient project management..
    `,
    img: "/portfolio/04.webp"
  },
  {
    id: 5,
    color: "from-red-400 to-red-300",
    title: "MEMC UPW Failure Crisis",
    desc: `
      
      Identified critical resin replacement at MEMC's UPW plant, averted disaster by leading swift action under tight deadline to ensure water quality and prevent production downtime. Awarded in-house subcontracting contract for exceptional service.
    `,
    img: "/portfolio/05.webp"
  },
  {
    id: 6,
    color: "from-blue-400 to-blue-300",
    title: "MEMC IETS Sludge Crisis",
    desc: `
      Unregulated use of chemicals at MEMC's Ipoh facility escalated into a crisis, threatening environmental disaster. I led the swift response, reporting the issue and guiding the upgrade of the effluent treatment system. Our four-month effort ensured compliance and avoided hefty fines, earning praise for our proactive approach.
    `,
    img: "/portfolio/06.webp"
  },
  {
    id: 7,
    color: "from-violet-400 to-violet-300",
    title: "UNISEM UPW System Modernization",
    type: "EPC",
    desc: `
      UNISEM, a Malaysian chipmaker, struggled with aging UPW systems. Poor water quality threatened their production. I partnered with their team to design a clever, two-phase upgrade. Focusing on the most critical parts first, we ensured immediate improvement within their tight budget. The result? Crystal-clear water and a successful upgrade for UNISEM.
    `,
    img: "/portfolio/04.webp"
  },
  {
    id: 8,
    color: "from-purple-400 to-purple-300",
    title: "Carbonization Skid",
    type: "EPCI",
    desc: `
      Monash University researchers needed a unique furnace for their project. I delivered. Leading the design, fabrication, and delivery of a custom carbonization skid, I managed the entire process (engineering, procurement, installation, commissioning) for a seamless journey from concept to a happy client.
    `,
    img: "/portfolio/08.webp"
  },
  {
    id: 9,
    color: "from-red-400 to-red-300",
    title: "Membrane Skid",
    desc: `
      UTAR's research skid hit a snag when a key engineer landed in the hospital. Taking over the responsibility, I fine-tuned the prototype, ensured smooth installation, and ran successful test-runs with the client. Though a touch behind schedule, the project stayed within budget, delivering a valuable research tool for UTAR.
    `,
    img: "/portfolio/09.webp"
  },
  {
    id: 10,
    color: "from-blue-400 to-blue-300",
    title: "Aqueous 2-Phase Extraction Skid",
    type: "Commissioning",
    desc: `
      At Universiti Malaya's lab, I identified a design flaw hindering an Aqueous 2-Phase Extraction Skid. Through a novel proportional-derivative control strategy, I restored functionality within 3 months.
    `,
    img: "/portfolio/10.webp"
  },
  {
    id: 11,
    color: "from-violet-400 to-violet-300",
    title: "Vacuum Distillation Skid",
    type: "EPCI",
    desc: `
      Working with UMP researchers, I designed a novel vacuum system for their palm oil distillation skid. By replacing costly pumps with a water-jet system, I achieved a remarkable -0.6 bar pressure, significantly reducing project costs.
    `,
    img: "/portfolio/11.webp"
  },
  {
    id: 12,
    color: "from-purple-400 to-purple-300",
    title: "Educational Process Control Skid",
    type: "Project Engineer",
    desc: `
      Designed and built an Educational Process Control Skid for UTP students, providing a hands-on learning experience and empowering them to explore various control strategies6. Ensured smooth installation and successful commissioning with clear user manuals for knowledge transfer.
    `,
    img: "/portfolio/12.webp"
  },
  {
    id: 13,
    color: "from-violet-400 to-violet-300",
    title: "Vacuum Packing Machine",
    type: "EPCI",
    desc: `
      MetTube, Southeast Asia's leading copper tube producer, faced a challenge.  Through meticulous sourcing, strategic partnerships, and close collaboration throughout the process, I delivered a custom-designed vacuum packing machine exactly when they needed it. 
    `,
    img: "/portfolio/13.webp"
  },
  {
    id: 14,
    color: "from-purple-400 to-purple-300",
    color: "from-purple-400 to-purple-300",
    title: "Failure of Cracking Furnace",
    type: "EPCI",
    desc: `
      During a pivotal production surge at Titan Petrochem (now Lotte Petrochem), I blossomed as an Industrial Trainee, assisting in the resolution of critical cracking furnace failures.  Through meticulous data collection, sophisticated CFD analysis, and keen observation, I helped pinpoint thermal anomalies within the furnace.  This valuable contribution blossomed into a proposal for burner replacements, ensuring optimal performance at the company's new production capacity.
    `,
    img: "/portfolio/14.webp"
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0.15, 0.8], ["0%", "-93%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* PORTFOLIO PAGE */}

      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Portfolio
        </div>

        {items.map((item) => (
          <div
            className={`
              bg-gradient-to-b ${item.color}
            `}
            key={item.id}
          >
            <div className="flex flex-col justify-center w-screen gap-8 px-4 py-20 text-white md:min-h-screen sm:px-8 sm:pt-12 md:px-12 md:py-20 lg:px-20 lg:py-30 xl:px-48 xl:py-60 md:gap-14 lg:gap-20">
              <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl bp-6 md:pb-8">
                {item.title}
              </h1>
              <div className="flex flex-col gap-8 md:flex-row md:gap-14 lg:gap-20">
                <div className="md:w-1/2 lg:w-1/2">
                  <Image
                    className="object-cover"
                    src={item.img}
                    alt=""
                    height={1600}
                    width={1200}
                  />
                </div>
                <div className="md:w-1/2 lg:w-1/2">
                  <div className="w-full h-full p-2 overflow-y-auto text-lg md:text-xl lg:text-2xl">
                    {item.desc.split("\n").map((line, index) => {
                      // Check if the line should be a bullet point
                      if (line.trim().startsWith("*")) {
                        return (
                          <li className="pl-5 space-y-2" key={index}>
                            {line.trim().substring(1).trim()}
                          </li>
                        );
                      }
                      return <p key={index}>{line}</p>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* LAST PAGE */}
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-16 text-center">
          {/*
        <h1 className="text-8xl">Do you have a project?</h1>
        */}
          <div className="relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-60 h-60 md:w-[500px] md:h-[500px]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0"
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Want to Learn More About ME?
                </textPath>
              </text>
            </motion.svg>
            <Link
              href={"/contact"}
              className={
                "w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
              }
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
