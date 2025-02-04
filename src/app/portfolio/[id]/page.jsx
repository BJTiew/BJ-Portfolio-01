"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ResponsiveImage from "@/components/ResponsiveImage";
import ParallaxText from "@/components/ParallaxText";
import { projects } from "@/data/projects";
import { useState, useEffect } from 'react';

const ProjectPage = ({ params }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState(null);
  const projectId = parseInt(params.id);

  useEffect(() => {
    if (projectId && projects[projectId]) {
      setProject(projects[projectId]);
    }
    setIsLoading(false);
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 bg-ios-bg-light dark:bg-ios-bg-dark flex items-center justify-center">
        <div className="text-ios-text-light dark:text-ios-text-dark">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-20 bg-ios-bg-light dark:bg-ios-bg-dark">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-ios-text-light dark:text-ios-text-dark mb-4">
              Project Not Found
            </h1>
            <button
              onClick={() => router.push('/portfolio')}
              className="px-4 py-2 text-white bg-ios-primary-light dark:bg-ios-primary-dark rounded-full"
            >
              Return to Portfolio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-ios-bg-light dark:bg-ios-bg-dark">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          onClick={() => router.back()}
          className="mb-8 px-4 py-2 flex items-center space-x-2 text-ios-text-light dark:text-ios-text-dark hover:text-ios-primary-light dark:hover:text-ios-primary-dark"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Portfolio</span>
        </motion.button>

        {/* Project Header */}
        <ParallaxText speed={-0.2}>
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-ios-text-light dark:text-ios-text-dark mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-ios-primary-light/10 dark:bg-ios-primary-dark/10 text-ios-primary-light dark:text-ios-primary-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-ios-gray-light dark:text-ios-gray-dark">
              {project.description}
            </p>
          </motion.div>
        </ParallaxText>

        {/* Project Images */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ResponsiveImage
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  aspectRatio="landscape"
                  className="rounded-2xl shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-ios-text-light dark:text-ios-text-dark mb-4">
                Challenges
              </h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-ios-text-light dark:text-ios-text-dark"
                  >
                    <span className="text-ios-primary-light dark:text-ios-primary-dark">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ios-text-light dark:text-ios-text-dark mb-4">
                Solutions
              </h2>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-ios-text-light dark:text-ios-text-dark"
                  >
                    <span className="text-ios-primary-light dark:text-ios-primary-dark">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-ios-text-light dark:text-ios-text-dark mb-4">
                Outcomes
              </h2>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-ios-text-light dark:text-ios-text-dark"
                  >
                    <span className="text-ios-primary-light dark:text-ios-primary-dark">•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-ios-text-light dark:text-ios-text-dark">Client</h3>
                <p className="text-ios-gray-light dark:text-ios-gray-dark">{project.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-ios-text-light dark:text-ios-text-dark">Role</h3>
                <p className="text-ios-gray-light dark:text-ios-gray-dark">{project.role}</p>
              </div>
              <div>
                <h3 className="font-semibold text-ios-text-light dark:text-ios-text-dark">Date</h3>
                <p className="text-ios-gray-light dark:text-ios-gray-dark">{project.date}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage; 