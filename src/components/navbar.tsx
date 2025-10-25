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
    <nav
      className={`w-full sticky top-0 left-0 z-50 bg-white/65 backdrop-blur-sm transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/logo.png" alt="Cloudify Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#111111] hover:text-indigo-600 transition font-medium">
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            size="lg"
            className="bg-[#5D48EC] hover:bg-indigo-700 text-[#FFFFFF] px-6 py-3 font-semibold">
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
                    className="text-lg text-[#111111] hover:text-indigo-600 transition font-medium">
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <Button
                asChild
                size="lg"
                className="bg-[#5D48EC] hover:bg-indigo-700 text-[#FFFFFF] w-full py-6 font-semibold">
                <Link href="/request-a-demo" onClick={() => setIsOpen(false)}>
                  Request a Demo
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
