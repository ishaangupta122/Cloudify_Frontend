"use client";

import Link from "next/link";
import { HomePageData } from "../lib/data";
import FAQAccordion from "@/components/faq-accordian";
import { Button } from "@/components/ui/button";
import { FaBolt } from "react-icons/fa";
import BottomCard from "@/components/bottom-card";
import { FeatureCardProps } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Hero Section Component
function HeroSection() {
  return (
    <div
      className="relative w-full pb-32 sm:pb-40 md:pb-48 lg:pb-56 z-10"
      style={{
        backgroundImage: `url('${HomePageData.homeBanner.backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div
        className="absolute inset-0 w-full -z-10"
        style={{
          backgroundImage: `url('${HomePageData.homeBanner.backgroundOverlayImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
      {/* Hero Content */}
      <div className="flex flex-col items-center gap-6 md:gap-10 max-w-7xl mx-auto px-4 sm:px-6 pt-48 w-full">
        {/* Top Badge */}
        <div className="flex justify-center md:items-center text-center bg-[#5D48EC80] backdrop-blur-sm text-white py-2 px-6 md:py-3 text-sm md:text-base font-medium shadow-lg hover:bg-[#5D48EC80] border-none rounded-md w-[85%] md:w-auto">
          <FaBolt className="inline-block mt-1 mr-2 h-4 w-4 md:h-5 md:w-5" />
          <span className="">{HomePageData.homeBanner.badge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-6xl text-center font-semibold text-[#111111] leading-tight md:px-20">
          {HomePageData.homeBanner.title}
        </h1>

        {/* Subheading */}
        <p className="text-center text-[#333333] text-base md:text-lg max-w-6xl mx-auto font-normal md:px-24">
          {HomePageData.homeBanner.description}
        </p>

        {/* Demo Button */}
        <div className="flex justify-center mb-16 md:mb-28">
          <Button
            asChild
            size="lg"
            className="bg-[#5D48EC] hover:bg-indigo-700 text-[#FFFFFF] px-6 sm:px-7 py-6 text-sm sm:text-base shadow-xl">
            <Link href={HomePageData.homeBanner.buttonLink}>
              {HomePageData.homeBanner.buttonText}
            </Link>
          </Button>
        </div>
      </div>

      {/* Dashboard Image - Positioned at bottom center, half in/half out */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full px-4 sm:px-6 lg:px-8 flex justify-center z-10">
        <div className="relative w-full max-w-5xl">
          <img
            src={HomePageData.homeBanner.dashboardImage}
            alt="Dashboard Image"
            className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ image, title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border border-[#0000001A] overflow-hidden hover:shadow-md transition-shadow">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[280px] object-cover object-top"
        />
      </div>
      <div className="py-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-[#111111]">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-base font-normal text-[#787878] tracking-tight">
            {description}
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
};

// Features Section Component
function FeaturesSection() {
  return (
    <div className="max-w-7xl mx-auto mt-12 md:mt-36 py-12">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-4 md:mb-6 leading-tight">
          {HomePageData.featuresSection.title}
        </h2>
        <p className="text-base md:text-lg font-normal text-[#333333] max-w-4xl mx-auto leading-relaxed">
          {HomePageData.featuresSection.description}
        </p>
      </div>

      <div className="container mx-auto">
        {/* Features Grid - Top Row (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {HomePageData.featuresSection.features.topRow.map(
            (feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            )
          )}
        </div>

        {/* Features Grid - Bottom Row (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {HomePageData.featuresSection.features.bottomRow.map(
            (feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

// FAQ Section Component
function FAQSection() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-8 md:mb-16">
          A Modern Way To Build And Scale Your GPU Cloud
        </h2>

        <FAQAccordion faqData={HomePageData.faqSection} />
      </div>
    </div>
  );
}

// Main Home Page Component
export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* White Space Below for the bottom half of image */}
      <div className="w-full bg-white pt-32 px-6 md:px-16 max-w-7xl mx-auto sm:pt-40 md:pt-48 lg:pt-56 pb-12 md:pb-16 lg:pb-20">
        {/* Features Section */}
        <FeaturesSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Bottom Card */}
        <BottomCard
          title={HomePageData.bottomCard.title}
          description={HomePageData.bottomCard.description}
          buttonText={HomePageData.bottomCard.buttonText}
          buttonLink={HomePageData.bottomCard.buttonLink}
          image={HomePageData.bottomCard.image}
        />
      </div>
    </main>
  );
}
