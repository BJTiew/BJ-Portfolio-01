"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "PC-Wheatstone LNG Project",
    desc: "O&G Fabrication project: Acting as the subcon in this world largest LNG Project, fabricated and delivered 37 modules weighted 65,909MT in total.",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "PC-Exxon Tapis R Jacket",
    desc: "O&G Fabrication project: Acting as the subcon in this project, fabricated and delivered jacket weighted 5,475MT to client",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Refurbish of SETR DES KM-2",
    desc: "Leaded the progress of O&G Fabrication project: Acting as the subcon in this project, fabricated and delivered jacket weighted 5,475MT to client",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "MEMC UPW System Upgrade",
    desc: "asdfljasl fsadf jlskjd f;lkjasd flkjsa;dlfkj lks f;lkjas dl;fkjs ;adf aslkdj flsakfskadj falskdj flask lsa d",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "MEMC UPW Failure Crisis",
    desc: "asdfljasl fsadf jlskjd f;lkjasd flkjsa;dlfkj lks f;lkjas dl;fkjs ;adf aslkdj flsakfskadj falskdj flask lsa d",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 6,
    color: "from-blue-300 to-violet-300",
    title: "MEMC IETS Sludge Crisis",
    desc: "asdfljasl fsadf jlskjd f;lkjasd flkjsa;dlfkj lks f;lkjas dl;fkjs ;adf aslkdj flsakfskadj falskdj flask lsa d",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 7,
    color: "from-violet-300 to-purple-300",
    title: "UNISEM UPW System Modernization",
    type: "EPC",
    desc: "asdfljasl fsadf jlskjd f;lkjasd flkjsa;dlfkj lks f;lkjas dl;fkjs ;adf aslkdj flsakfskadj falskdj flask lsa d",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "Cabonization Skid",
    type: "EPCI",
    desc: "asdfljasl fsadf jlskjd f;lkjasd flkjsa;dlfkj lks f;lkjas dl;fkjs ;adf aslkdj flsakfskadj falskdj flask lsa d",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 9,
    color: "from-red-300 to-blue-300",
    title: "Membrane Skid",
    desc: "Commissioning",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 10,
    color: "from-blue-300 to-violet-300",
    title: "Aqueous 2-Phase Extraction Skid",
    type: "Commissioning",
    desc: "asdfljasl fsadf jlskjd f;lkjasd flkjsa;dlfkj lks f;lkjas dl;fkjs ;adf aslkdj flsakfskadj falskdj flask lsa d",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 11,
    color: "from-violet-300 to-purple-300",
    title: "Vacuum Distillation Skid",
    type: "EPCI",
    desc: "asdfljasl fsadf jlskjd f;lkjasd flkjsa;dlfkj lks f;lkjas dl;fkjs ;adf aslkdj flsakfskadj falskdj flask lsa d",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 12,
    color: "from-purple-300 to-red-300",
    title: "Educational Process Control Skid",
    type: "Project Engineer",
    desc: "asdfljasl fsadf jlskjd f;lkjasd flkjsa;dlfkj lks f;lkjas dl;fkjs ;adf aslkdj flsakfskadj falskdj flask lsa d",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 13,
    color: "from-violet-300 to-purple-300",
    title: "Vacuum Packing Machine",
    type: "EPCI",
    desc: "asdfljasl fsadf jlskjd f;lkjasd flkjsa;dlfkj lks f;lkjas dl;fkjs ;adf aslkdj flsakfskadj falskdj flask lsa d",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  },
  {
    id: 14,
    color: "from-purple-300 to-red-300",
    title: "Failure of Cracking Furnace",
    type: "EPCI",
    desc: "asdfljasl fsadf jlskjd f;lkjasd flkjsa;dlfkj lks f;lkjas dl;fkjs ;adf aslkdj flsakfskadj falskdj flask lsa d",
    img: "/portfolio/0001.webp",
    link: "https://www.yahoo.com/"
  }
];


const PortfolioPage = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({target:ref})
  const x = useTransform(scrollYProgress, [0.15,0.8],["0%","-93%"])

  return (
    <motion.div 
      className="h-full" 
      initial={{y:"-200vh"}} 
      animate={{y:"0%"}} 
      transition={{duration:1}}
    >
      {/* EXPERIENCE PAGE */}
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Project Experience
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center">
          <motion.div 
            style={{x}}
            className="flex"
          >
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
            {items.map((item)=>(
              <div 
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} 
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill/>
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* LAST PAGE */}
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg animate={{rotate:360}} transition={{duration:8, ease:"linear", repeat:Infinity}} viewBox="0 0 300 300" className="w-60 h-60 md:w-[500px] md:h-[500px]">
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">Front-End Developer and UI Designer</textPath>
            </text>
          </motion.svg>
          <Link href={"/contact"} className={"w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"}>Hire Me</Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioPage