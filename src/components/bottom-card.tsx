"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { BottomCardProps } from "@/lib/types";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const BottomCard = ({
  title,
  description,
  buttonText,
  buttonLink,
  image,
}: BottomCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto py-12">
      <div className="bg-[#F4F8FC] rounded-3xl overflow-hidden relative px-8 md:px-16 pt-10 md:pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left space-y-6 md:space-y-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] leading-tight mt-6">
                {title}
              </h2>
              <p className="text-base font-normal text-[#909090] leading-relaxed">
                {description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#5D48EC] hover:bg-indigo-700 text-white px-8 py-6 shadow-lg">
                  <Link href={buttonLink}>{buttonText}</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end items-start">
              <div className="relative w-full max-w-sm">
                <motion.img
                  src={image}
                  alt={title}
                  className="w-auto max-h-[400px] h-auto object-contain relative z-10 shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Fade overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F4F8FC] via-[#F4F8FC]/80 to-transparent z-20 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BottomCard;
