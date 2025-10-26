"use client";

import BottomCard from "@/components/bottom-card";
import HeroBanner from "@/components/home-banner";
import { RightImgFeatureSection } from "@/components/heading-features-section";
import { FeaturesPageData as heroData } from "@/lib/data";
import { FeatureCardProps } from "@/lib/types";
import ReverseFeatureSection from "@/components/features-section";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Feature Card Component
function FeatureCard({ image, title, description }: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-[#FAF9FF] rounded-xl px-6 py-10 hover:shadow-lg transition-shadow duration-300 md:last:col-span-2 xl:last:col-span-1">
      <div className="flex justify-start mb-6">
        <motion.div
          className="w-16 h-16 rounded-full mb-3"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}>
          <img
            src={image}
            alt={`${title} icon`}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
      <h3 className="text-2xl font-semibold text-[#111111] mb-3">{title}</h3>
      <p className="text-[#333333] font-regular text-lg leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

// Template Card Component
function TemplateCard({ image, title, description }: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-[#FAF9FF] flex flex-col justify-between rounded-3xl hover:shadow-lg transition-shadow duration-300 pt-14 md:last:col-span-2 xl:last:col-span-1">
      <div className="px-6 text-center">
        <h3 className="text-2xl font-semibold text-[#111111] mb-3">{title}</h3>
        <p className="text-[#333333] font-regular text-lg leading-relaxed">
          {description}
        </p>
      </div>
      <motion.div
        className="mt-8 w-[85%] ml-auto"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}>
        <img
          src={image}
          alt={`${title} image`}
          className="w-full h-[300px] object-cover object-top-left rounded-tl-3xl rounded-br-3xl"
        />
      </motion.div>
    </motion.div>
  );
}

// Security Card Component
function SecurityCard({ image, title, description }: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-[#FAF9FF] rounded-3xl px-6 py-14 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-start mb-6">
        <motion.div
          className="w-16 h-16 rounded-full mb-3"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}>
          <img
            src={image}
            alt={`${title} icon`}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
      <h3 className="text-2xl font-semibold text-[#111111] mb-3">{title}</h3>
      <p className="text-[#333333] font-regular text-lg leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

// SDN Integration Section Component
function SDNIntegrationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="container">
      {/* Title */}
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-[#111111] mb-4">
        {heroData.sdnIntegration.title}
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-[#333333] max-w-5xl mb-12 leading-relaxed">
        {heroData.sdnIntegration.description}
      </motion.p>

      {/* Features Cards */}
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {heroData.sdnIntegration.cards.map((card, index) => (
          <FeatureCard
            key={index}
            image={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

// Monetization Templates Section Component
function MonetizationTemplatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="container">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center text-[#111111] mb-8">
        {heroData.monetizationTemplates.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-[#333333] text-center mb-16 leading-relaxed">
        {heroData.monetizationTemplates.description}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {heroData.monetizationTemplates.templates.map((template, index) => (
          <TemplateCard
            key={index}
            image={template.icon}
            title={template.title}
            description={template.description}
          />
        ))}
      </div>
    </div>
  );
}

// Security Section Component
function SecuritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="container">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center text-[#111111] mb-8">
        {heroData.security.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-[#333333] text-center mb-16 leading-relaxed max-w-4xl mx-auto">
        {heroData.security.description}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {heroData.security.features.map((feature, index) => (
          <SecurityCard
            key={index}
            image={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

// Main Features Page Component
export default function FeaturesPage() {
  return (
    <div className="">
      {/* Hero Banner */}
      <HeroBanner
        title={heroData.homeBanner.title}
        backgroundImage={heroData.homeBanner.backgroundImage}
        backgroundOverlayImage={heroData.homeBanner.backgroundOverlayImage}
      />

      {/* Single Agent Section */}
      <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <RightImgFeatureSection
          image={heroData.singleAgent.image}
          title={heroData.singleAgent.title}
          description={heroData.singleAgent.description}
          features={heroData.singleAgent.features}
        />
      </div>

      {/* SDN Integration Section */}
      <div className="bg-[#F5F3FF] py-20">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <SDNIntegrationSection />
        </div>
      </div>

      {/* Advanced Scheduling Section */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <ReverseFeatureSection
          image={heroData.advancedScheduling.image}
          title={heroData.advancedScheduling.title}
          description={heroData.advancedScheduling.description}
          features={heroData.advancedScheduling.features}
        />
      </div>

      {/* Monetization Templates Section */}
      <div className="bg-[#F5F3FF] py-20">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <MonetizationTemplatesSection />
        </div>
      </div>

      {/* Simple Predictable Pricing Section */}
      <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <RightImgFeatureSection
          image={heroData.simplePricing.image}
          title={heroData.simplePricing.title}
          description={heroData.simplePricing.description}
          features={heroData.simplePricing.features}
        />
      </div>

      {/* Security & Encryption Section */}
      <div className="bg-[#F5F3FF] py-20">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <SecuritySection />
        </div>
      </div>

      {/* Bottom Card */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <BottomCard
          title={heroData.bottomCard.title}
          description={heroData.bottomCard.description}
          buttonText={heroData.bottomCard.buttonText}
          buttonLink={heroData.bottomCard.buttonLink}
          image={heroData.bottomCard.image}
        />
      </div>
    </div>
  );
}
