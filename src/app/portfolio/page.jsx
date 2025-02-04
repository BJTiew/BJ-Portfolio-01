"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "O&G", "Environmental", "Water", "Research", "Automation", "EPC", "EPCI"];

  const items = [
    {
      id: 1,
      title: "PC-Wheatstone LNG Project",
      category: "O&G",
      tags: ["O&G", "Construction", "Project Management"],
      description: "Co-led a team of over 18,500 to deliver 37 high-quality LNG modules.",
      img: "/portfolio/01.webp",
      date: "2019",
    },
    {
      id: 2,
      title: "PC-Exxon Tapis R Jacket",
      category: "O&G",
      tags: ["O&G", "Construction", "Project Management"],
      desc: `Orchestrated Malaysia&apos;s first large-scale enhanced oil recovery initiative.`,
      img: "/portfolio/02.webp",
      date: "2016",
    },
    {
      id: 3,
      title: "Refurbish of SETR DES KM-2",
      category: "O&G",
      tags: ["O&G", "Maintenance", "Project Management"],
      desc: `Supported the refurbishment of the Self-Erecting Tender Rig Derrick Equipment Set.`,
      img: "/portfolio/03.webp",
      date: "2015",
    },
    {
      id: 4,
      title: "MEMC UPW System Upgrade",
      category: "Water",
      tags: ["Water", "EPC", "Process Improvement"],
      desc: `Led root cause analysis and upgrade project for water quality issues.`,
      img: "/portfolio/04.webp",
      date: "2012",
    },
    {
      id: 5,
      title: "MEMC UPW Failure Crisis",
      category: "Water",
      tags: ["Water", "Crisis Management", "Maintenance"],
      desc: `Identified critical resin replacement and led swift action to prevent downtime.`,
      img: "/portfolio/05.webp",
      date: "2011",
    },
    {
      id: 6,
      title: "MEMC IETS Sludge Crisis",
      category: "Environmental",
      tags: ["Environmental", "Crisis Management", "Process Improvement"],
      desc: `Led the upgrade of effluent treatment system to ensure compliance.`,
      img: "/portfolio/06.webp",
      date: "2011",
    },
    {
      id: 7,
      title: "UNISEM UPW System Modernization",
      category: "Water",
      tags: ["Water", "EPC", "Process Improvement"],
      desc: `Designed and implemented two-phase UPW system upgrade.`,
      img: "/portfolio/04.webp",
      date: "2010",
    },
    {
      id: 8,
      title: "Carbonization Skid",
      category: "Research",
      tags: ["Research", "EPCI", "Automation"],
      desc: `Custom-designed carbonization skid for research purposes.`,
      img: "/portfolio/08.webp",
      date: "2009",
    },
    {
      id: 9,
      title: "Membrane Skid",
      category: "Research",
      tags: ["Research", "EPCI", "Water"],
      desc: `Fine-tuned prototype and managed installation of research membrane skid.`,
      img: "/portfolio/09.webp",
      date: "2009",
    },
    {
      id: 10,
      title: "Aqueous 2-Phase Extraction Skid",
      category: "Research",
      tags: ["Research", "Process Control", "Automation"],
      desc: `Implemented novel control strategy for extraction process.`,
      img: "/portfolio/10.webp",
      date: "2008",
    },
    {
      id: 11,
      title: "Vacuum Distillation Skid",
      category: "Research",
      tags: ["Research", "EPCI", "Process Innovation"],
      desc: `Innovative vacuum system design for palm oil distillation.`,
      img: "/portfolio/11.webp",
      date: "2008",
    },
    {
      id: 12,
      title: "Educational Process Control Skid",
      category: "Automation",
      tags: ["Education", "Automation", "Process Control"],
      desc: `Designed educational skid for hands-on control strategy learning.`,
      img: "/portfolio/12.webp",
      date: "2008",
    },
    {
      id: 13,
      title: "Vacuum Packing Machine",
      category: "Automation",
      tags: ["Automation", "EPCI", "Manufacturing"],
      desc: `Custom-designed vacuum packing machine for industrial use.`,
      img: "/portfolio/13.webp",
      date: "2009",
    },
    {
      id: 14,
      title: "Failure of Cracking Furnace",
      category: "O&G",
      tags: ["O&G", "Research", "Process Analysis"],
      desc: `Analysis and optimization of cracking furnace performance.`,
      img: "/portfolio/14.webp",
      date: "2008",
    },
  ];

  const filteredItems = selectedCategory === "All" 
    ? items 
    : items.filter(item => 
        item.category === selectedCategory || 
        item.tags.includes(selectedCategory)
      );

  return (
    <div className="min-h-screen pt-20 bg-ios-bg-light dark:bg-ios-bg-dark">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-12 text-center"
        >
          <h1 className="mb-4 text-3xl font-bold text-ios-text-light dark:text-ios-text-dark sm:text-4xl">
            Portfolio
          </h1>
          <p className="text-lg text-ios-gray-light dark:text-ios-gray-dark">
            Explore my journey through various projects and achievements
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm rounded-full transition-colors
                ${selectedCategory === category
                  ? 'bg-ios-primary-light dark:bg-ios-primary-dark text-white'
                  : 'bg-ios-card-light dark:bg-ios-card-dark text-ios-text-light dark:text-ios-text-dark hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <Link href={`/portfolio/${item.id}`} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full flex flex-col bg-ios-card-light dark:bg-ios-card-dark rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-ios-primary-light/10 dark:bg-ios-primary-dark/10 text-ios-primary-light dark:text-ios-primary-dark">
                      {item.category}
                    </span>
                    <span className="text-sm text-ios-gray-light dark:text-ios-gray-dark">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-ios-text-light dark:text-ios-text-dark">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-ios-gray-light dark:text-ios-gray-dark">
                    {item.desc}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-ios-secondary-light/10 dark:bg-ios-secondary-dark/10 text-ios-secondary-light dark:text-ios-secondary-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
