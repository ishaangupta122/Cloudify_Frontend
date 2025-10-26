import { FeatureSectionProps } from "@/lib/types";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function RightImgFeatureSection({
  image,
  title,
  description,
  features,
}: FeatureSectionProps) {
  const ref = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });

  return (
    <div className={`container`}>
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center text-[#111111] mb-6">
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-[#333333] mb-8 text-center max-w-4xl mx-auto leading-relaxed">
        {description}
      </motion.p>
      <div ref={ref} className={`grid md:grid-cols-2 gap-12 items-center`}>
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 order-2 md:order-1">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}>
              <h3 className="text-xl font-semibold text-[#111111] mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-[#333333] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center">
          <motion.img
            src={image}
            alt={title}
            className="w-full max-w-md"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
