"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { BottomCardProps } from "@/lib/types";

const BottomCard = ({
  title,
  description,
  buttonText,
  buttonLink,
  image,
}: BottomCardProps) => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="bg-[#F4F8FC] rounded-3xl overflow-hidden relative px-8 md:px-16 pt-10 md:pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="text-center md:text-left space-y-6 md:space-y-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] leading-tight mt-6">
                {title}
              </h2>
              <p className="text-base font-normal text-[#909090] leading-relaxed">
                {description}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#5D48EC] hover:bg-indigo-700 text-white px-8 py-6 shadow-lg">
                <Link href={buttonLink}>{buttonText}</Link>
              </Button>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative flex justify-center lg:justify-end items-start">
              <div className="relative w-full max-w-sm">
                <img
                  src={image}
                  alt={title}
                  className="w-auto max-h-[400px] h-auto object-contain relative z-10 shadow-2xl"
                />
                {/* Fade overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F4F8FC] via-[#F4F8FC]/80 to-transparent z-20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
