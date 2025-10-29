"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-sm transition-shadow duration-300 ${
        isScrolled ? "shadow-md bg-white/75" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-16">
        {/* Logo */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/">
            <img src="/logo.png" alt="Cloudify Logo" className="h-10 w-auto" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#111111] hover:text-indigo-600 transition-all duration-200 font-medium">
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            size="lg"
            className="bg-[#5D48EC] hover:bg-indigo-700 text-[#FFFFFF] px-6 py-3 font-semibold transition-transform duration-200">
            <Link href="#">Request a Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetTitle className="w-[400px] sr-only">Menu</SheetTitle>
          <SheetContent side="right" className="w-[400px]">
            <div className="flex flex-col gap-8 mt-8 p-8">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-[#111111] hover:text-indigo-600 hover:translate-x-2 transition-all duration-200 font-medium">
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <Button
                asChild
                size="lg"
                className="bg-[#5D48EC] hover:bg-indigo-700 hover:scale-105 text-[#FFFFFF] w-full py-6 font-semibold transition-transform duration-200">
                <Link href="/request-a-demo" onClick={() => setIsOpen(false)}>
                  Request a Demo
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
