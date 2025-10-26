"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-[#5D48EC] text-white overflow-hidden">
      {/* Main Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 container max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <img
                src="/logo_white.png"
                alt="Cloudify Logo"
                className="h-10 w-auto"
              />
            </motion.div>
            <p className="text-sm text-purple-100 leading-relaxed md:w-[80%] w-full">
              Streamline your business's financial management with our
              intuitive, scalable SaaS platform. Designed for U.S. enterprises
              and startups equally, complete in modules.
            </p>
          </motion.div>

          {/* Useful Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4">Useful Link</h3>
            <ul className="space-y-2 text-sm text-purple-100">
              {[
                "Home",
                "Features",
                "Deployment and Services",
                "Contact Us",
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4">
              Get In Touch With Us!
            </h3>
            <p className="text-sm text-purple-100 mb-4">
              If you're ready to sign up with us or if you have any questions,
              you are glad to touch.
            </p>
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}>
              <div className="rounded-full">
                <img
                  src="/phone_icon.png"
                  alt="Phone Icon"
                  className="w-10 h-10"
                />
              </div>
              <div>
                <div className="text-sm font-medium">Contact Us:</div>
                <div className="text-sm font-semibold">+1 (801) 893-3654</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-6 border-t border-purple-500/30 text-center text-sm text-purple-100">
          © 2025 Cloudify. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
}
