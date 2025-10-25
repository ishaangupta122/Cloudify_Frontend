"use client";

import BottomCard from "@/components/bottom-card";
import ReverseFeatureSection from "@/components/features-section";
import HeroBanner from "@/components/home-banner";
import { ServicesPageData as heroData } from "@/lib/data";

export default function ServicePage() {
  return (
    <>
      <HeroBanner
        title={heroData.homeBanner.title}
        backgroundImage={heroData.homeBanner.backgroundImage}
      />
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <ReverseFeatureSection
          image={heroData.deploymentModel.image}
          title={heroData.deploymentModel.title}
          description={heroData.deploymentModel.description}
          features={heroData.deploymentModel.features}
          reverse={true}
        />
      </div>
      <div className="bg-[#F5F3FF]">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <ReverseFeatureSection
            image={heroData.professionalServices.image}
            title={heroData.professionalServices.title}
            description={heroData.professionalServices.description}
            features={heroData.professionalServices.features}
          />
        </div>
      </div>
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <ReverseFeatureSection
          image={heroData.seamlessIntegration.image}
          title={heroData.seamlessIntegration.title}
          description={heroData.seamlessIntegration.description}
          features={heroData.seamlessIntegration.features}
          reverse={true}
        />
      </div>
      <div className="bg-[#F5F3FF]">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <ReverseFeatureSection
            image={heroData.dataSovereignty.image}
            title={heroData.dataSovereignty.title}
            description={heroData.dataSovereignty.description}
            features={heroData.dataSovereignty.features}
          />
        </div>
      </div>
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <ReverseFeatureSection
          image={heroData.technicalRequirements.image}
          title={heroData.technicalRequirements.title}
          description={heroData.technicalRequirements.description}
          features={heroData.technicalRequirements.requirements}
          reverse={true}
        />
      </div>
      <div className="bg-[#F5F3FF]">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <ReverseFeatureSection
            image={heroData.successStories.image}
            title={heroData.successStories.title}
            description={heroData.successStories.description}
            features={heroData.successStories.caseStudy}
          />
        </div>
      </div>
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <BottomCard
          title={heroData.bottomCard.title}
          description={heroData.bottomCard.description}
          buttonText={heroData.bottomCard.buttonText}
          buttonLink={heroData.bottomCard.buttonLink}
          image={heroData.bottomCard.image}
        />
      </div>
    </>
  );
}
