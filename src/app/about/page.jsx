"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const biography = [
  `Tiew, your Management Maestro, transforms ideas into reality. Leveraging meticulous planning, strategic execution, and a collaborative spirit, Tiew has a proven track record of success across diverse projects and industries.`
];

const biography_quote = [`"Building success brick by efficient brick."`];

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

const SkillCard = ({ category, skills }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="p-6 bg-ios-card-light dark:bg-ios-card-dark rounded-2xl shadow-sm"
    >
      <h3 className="mb-4 text-xl font-semibold text-ios-text-light dark:text-ios-text-dark">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.skill}
            className="px-3 py-1 text-sm rounded-full bg-ios-primary-light/10 dark:bg-ios-primary-dark/10 text-ios-primary-light dark:text-ios-primary-dark"
          >
            {skill.skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const TimelineItem = ({ jitem, isLast }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-8 w-0.5 h-full bg-ios-gray-light/20 dark:bg-ios-gray-dark/20" />
      )}
      
      {/* Timeline content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative flex gap-6 ml-4 mb-10"
      >
        {/* Timeline dot */}
        <div className="absolute -left-4 w-8 h-8 rounded-full bg-ios-card-light dark:bg-ios-card-dark border-4 border-ios-primary-light dark:border-ios-primary-dark flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-ios-primary-light dark:bg-ios-primary-dark" />
        </div>

        {/* Content card */}
        <div className="flex-1 ml-4">
          <div className="p-6 bg-ios-card-light dark:bg-ios-card-dark rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            {/* Date badge */}
            <div className="inline-block px-3 py-1 mb-3 text-sm rounded-full bg-ios-primary-light/10 dark:bg-ios-primary-dark/10 text-ios-primary-light dark:text-ios-primary-dark">
              {jitem.jdate}
            </div>
            
            {/* Job title */}
            <h3 className="text-xl font-semibold text-ios-text-light dark:text-ios-text-dark">
              {jitem.jtitle}
            </h3>
            
            {/* Company name */}
            <p className="mt-1 text-ios-gray-light dark:text-ios-gray-dark font-medium">
              {jitem.jcomp}
            </p>
            
            {/* Job description */}
            <p className="mt-2 text-sm text-ios-text-light dark:text-ios-text-dark opacity-80">
              {jitem.jdesc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AboutPage = () => {
  const bioRef = useRef();
  const isBioInView = useInView(bioRef, { once: true });

  return (
    <div className="min-h-screen pt-20 bg-ios-bg-light dark:bg-ios-bg-dark">
      <div className="container px-4 mx-auto space-y-16 sm:px-6 lg:px-8">
        {/* Biography Section */}
        <motion.section
          ref={bioRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isBioInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-bold text-ios-text-light dark:text-ios-text-dark sm:text-4xl">
            Biography
          </h2>
          <p className="text-lg text-ios-text-light dark:text-ios-text-dark">
            {biography}
          </p>
          <p className="text-lg italic text-ios-gray-light dark:text-ios-gray-dark">
            {biography_quote}
          </p>
        </motion.section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-ios-text-light dark:text-ios-text-dark sm:text-4xl">
            Skills
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {["Language", "Technical", "Management", "Software"].map((category) => (
              <SkillCard
                key={category}
                category={category}
                skills={skills.filter((s) => s.category === category)}
              />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-ios-text-light dark:text-ios-text-dark sm:text-4xl mb-8">
            Experience
          </h2>
          <div className="pl-4">
            {jitems.map((jitem, index) => (
              <TimelineItem 
                key={jitem.jid} 
                jitem={jitem} 
                isLast={index === jitems.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Education Section (if you want to add it) */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-ios-text-light dark:text-ios-text-dark sm:text-4xl mb-8">
            Education
          </h2>
          <div className="pl-4">
            {edus.map((edu, index) => (
              <div key={edu.id} className="relative">
                {index !== edus.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-full bg-ios-gray-light/20 dark:bg-ios-gray-dark/20" />
                )}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6 ml-4 mb-10"
                >
                  <div className="absolute -left-4 w-8 h-8 rounded-full bg-ios-card-light dark:bg-ios-card-dark border-4 border-ios-secondary-light dark:border-ios-secondary-dark flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-ios-secondary-light dark:bg-ios-secondary-dark" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="p-6 bg-ios-card-light dark:bg-ios-card-dark rounded-2xl shadow-sm">
                      <div className="inline-block px-3 py-1 mb-3 text-sm rounded-full bg-ios-secondary-light/10 dark:bg-ios-secondary-dark/10 text-ios-secondary-light dark:text-ios-secondary-dark">
                        {edu.grad}
                      </div>
                      <h3 className="text-xl font-semibold text-ios-text-light dark:text-ios-text-dark">
                        {edu.course}
                      </h3>
                      <p className="mt-1 text-ios-gray-light dark:text-ios-gray-dark">
                        {edu.uni}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
