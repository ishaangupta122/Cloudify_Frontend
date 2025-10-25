import { FeatureSectionProps } from "@/lib/types";

export function RightImgFeatureSection({
  image,
  title,
  description,
  features,
}: FeatureSectionProps) {
  return (
    <div className={`container`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#111111] mb-6">
        {title}
      </h2>
      <p className="text-lg text-[#333333] mb-8 text-center max-w-4xl mx-auto leading-relaxed">
        {description}
      </p>
      <div className={`grid md:grid-cols-2 gap-12 items-center`}>
        {/* Left Side - Content */}
        <div className="space-y-6 order-2 md:order-1">
          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-[#111111] mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-[#333333] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img src={image} alt={title} className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
}
