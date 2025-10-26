import { HeroBannerProps } from "@/lib/types";
import { motion } from "framer-motion";

function HeroBanner({
  title,
  backgroundImage,
  backgroundOverlayImage,
}: HeroBannerProps) {
  return (
    <div
      className="relative w-full h-[70vh] md:h-[80vh] bg-gradient-to-br from-purple-200 via-purple-100 to-blue-100 overflow-hidden flex items-center justify-center px-8 py-20 -z-20"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}>
      <div
        className="absolute inset-0 w-full -z-10"
        style={{
          backgroundImage: `url('${backgroundOverlayImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-semibold text-gray-900 text-center max-w-5xl">
        {title}
      </motion.h1>
    </div>
  );
}

export default HeroBanner;
