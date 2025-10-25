"use client";

export default function Footer() {
  return (
    <footer className="relative bg-[#5D48EC] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo_white.png"
                alt="Cloudify Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-purple-100 leading-relaxed md:w-[80%] w-full">
              Streamline your business's financial management with our
              intuitive, scalable SaaS platform. Designed for U.S. enterprises
              and startups equally, complete in modules.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Useful Link</h3>
            <ul className="space-y-2 text-sm text-purple-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Deployment and Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4 opacity-0">Links</h3>
            <ul className="space-y-2 text-sm text-purple-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Get In Touch With Us!
            </h3>
            <p className="text-sm text-purple-100 mb-4">
              If you're ready to sign up with us or if you have any questions,
              you are glad to touch.
            </p>
            <div className="flex items-center gap-3">
              <div className="rounded-full">
                <img
                  src="/phone_icon.png"
                  alt="Phone Icon"
                  className="w-10 h-10"
                />
              </div>
              <div>
                <div className="text-sm font-medium">Contact Us:</div>
                <div className="text-sm font-semibold">+1 (801) 893-3654</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-purple-500/30 text-center text-sm text-purple-100">
          © 2025 Cloudify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
