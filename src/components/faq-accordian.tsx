import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, X } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface FAQData {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqData: FAQData[];
}

const FAQAccordion = ({ faqData }: FAQAccordionProps) => {
  return (
    <Accordion type="multiple" className="w-full space-y-3">
      {faqData.map((faq, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-50px" });

        return (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}>
            <AccordionItem
              value={`item-${index}`}
              className="border border-[#1111111A] rounded-md bg-[#F4F8FC] px-6 data-[state=open]:bg-[#f0f2f7]">
              <AccordionTrigger className="text-lg font-medium text-[#111111] hover:no-underline py-4 px-0 cursor-pointer [&[data-state=open]>svg.plus-icon]:hidden [&[data-state=closed]>svg.x-icon]:hidden">
                {faq.question}
                <Plus className="plus-icon w-6 h-6 shrink-0 text-[#111111] transition-transform duration-200" />
                <X className="x-icon w-6 h-6 shrink-0 text-[#111111] transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="text-lg font-normal text-[#333333] leading-relaxed pb-4 pt-4 border-t border-[#1111111A]/50 mt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        );
      })}
    </Accordion>
  );
};

export default FAQAccordion;
