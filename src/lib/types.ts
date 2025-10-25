export interface HeroBannerProps {
  title: string;
  backgroundImage?: string;
}

export interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

export interface BottomCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export interface FeatureSectionProps {
  image: string;
  title: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  className?: string;
}

export interface ReverseFeatureSectionProps extends FeatureSectionProps {
  reverse?: boolean;
}
