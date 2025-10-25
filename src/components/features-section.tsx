import { ReverseFeatureSectionProps } from "@/lib/types";

export default function ReverseFeatureSection({
  image,
  title,
  description,
  features,
  reverse = false,
}: ReverseFeatureSectionProps) {
  const imageSection = (
    <div className="flex justify-center">
      <div className="relative">
        <img src={image} alt={title} className="w-full max-w-md" />
      </div>
    </div>
  );

  const contentSection = (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-6">
        {title}
      </h2>
      <p className="text-lg font-medium text-[#333333] mb-12 leading-relaxed">
        {description}
      </p>
      {features.map((feature, index) => (
        <div key={index}>
          <h3 className="text-2xl font-semibold text-[#111111] mb-2">
            {feature.title}
          </h3>
          <p className="text-lg text-[#333333] leading-relaxed whitespace-pre-line">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto max-w-7xl py-20">
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
