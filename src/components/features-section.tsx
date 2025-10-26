import { ReverseFeatureSectionProps } from "@/lib/types";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function ReverseFeatureSection({
  image,
  title,
  description,
  features,
  reverse = false,
}: ReverseFeatureSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imageSection = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 30 : -30 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 30 : -30 }
      }
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex justify-center">
      <div className="relative">
        <motion.img
          src={image}
          alt={title}
          className="w-full max-w-md"
          whileHover={{ scale: 1.05, rotate: reverse ? -2 : 2 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );

  const contentSection = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -30 : 30 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -30 : 30 }
      }
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-6">
        {title}
      </h2>
      <p className="text-lg font-medium text-[#333333] mb-12 leading-relaxed">
        {description}
      </p>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}>
          <h3 className="text-2xl font-semibold text-[#111111] mb-2">
            {feature.title}
          </h3>
          <p className="text-lg text-[#333333] leading-relaxed whitespace-pre-line">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div ref={ref} className="container mx-auto max-w-7xl py-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {reverse ? (
          <>
            {contentSection}
            {imageSection}
          </>
        ) : (
          <>
            {imageSection}
            {contentSection}
          </>
        )}
      </div>
    </div>
  );
}
