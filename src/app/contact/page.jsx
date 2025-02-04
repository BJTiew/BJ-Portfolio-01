"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ContactPage = () => {
  const text = "Say Hello";
  const letters = text.split("");

  const contactMethods = [
    {
      title: "WhatsApp",
      description: "Quick Response within 24 hours",
      image: "/contact/whatsapp-qr.svg",
      link: "https://wa.me/60166684985",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-500",
      availability: "Available 9AM-6PM MYT"
    },
    {
      title: "WeChat",
      description: "Scan to connect",
      image: "/contact/wechat-qr.svg",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      iconColor: "text-emerald-500"
    }
  ];

  return (
    <div className="bg-ios-bg-light dark:bg-ios-bg-dark pt-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-8 text-center"
        >
          <h1 className="mb-4 text-3xl font-bold text-ios-text-light dark:text-ios-text-dark sm:text-4xl">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="ml-2">👋</span>
          </h1>
          <p className="text-lg text-ios-gray-light dark:text-ios-gray-dark">
          Let&apos;s connect and discuss how we can work together
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid max-w-4xl gap-6 mx-auto md:grid-cols-2">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 ${method.bgColor} rounded-2xl shadow-sm`}
            >
              <div className="flex flex-col items-center space-y-4">
                <h2 className={`text-2xl font-semibold ${method.iconColor}`}>
                  {method.title}
                </h2>
                {/* <p className="text-ios-gray-light dark:text-ios-gray-dark">
                  {method.description}
                </p> */}
                <div className="p-0 bg-white rounded-xl overflow-hidden w-48 h-48 md:w-64 md:h-64">
                  <Image
                    src={method.image}
                    alt={`${method.title} QR Code`}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain"
                  />
                </div>
                {method.link && (
                  <a
                    href={method.link}
                    className={`inline-flex items-center px-4 py-2 space-x-2 text-white rounded-full bg-ios-primary-light dark:bg-ios-primary-dark hover:opacity-90 transition-opacity`}
                  >
                    <span>Open {method.title}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
