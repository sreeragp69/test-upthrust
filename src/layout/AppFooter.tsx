"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";
import type { FooterProps, ContactFormData } from "../types/AppFooter.type";
import { FOOTER_DATA } from "../constant/AppFooter.data";
import Form from "../components/ui/form/Form";
import Input from "../components/ui/inputs/Input";
import { Select, SelectOption } from "../components/ui/inputs/Select";
import Button from "../components/ui/button/Button";

const FooterSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 py-6 sm:py-8 md:py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="h-8 sm:h-10 md:h-12 w-60 sm:w-72 md:w-80 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Company Info Skeleton */}
          <div className="space-y-4">
            <div className="h-12 sm:h-14 md:h-16 w-36 sm:w-40 md:w-48 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 sm:h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Links and Contact Skeleton */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            <div className="space-y-4">
              <div className="h-5 sm:h-6 w-20 sm:w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-3 sm:h-4 w-28 sm:w-32 bg-gray-200 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-5 sm:h-6 w-16 sm:w-20 bg-gray-200 rounded animate-pulse"></div>
              <div className="space-y-3">
                <div className="h-3 sm:h-4 w-32 sm:w-36 bg-gray-200 rounded animate-pulse"></div>
                <div className="space-y-1">
                  <div className="h-3 sm:h-4 w-36 sm:w-40 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-3 sm:h-4 w-40 sm:w-44 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-3 sm:h-4 w-44 sm:w-48 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Skeleton */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="h-5 sm:h-6 w-28 sm:w-32 bg-gray-200 rounded animate-pulse mb-4 sm:mb-6"></div>
            <div className="space-y-3 sm:space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-10 sm:h-12 bg-gray-200 rounded-xl animate-pulse"
                ></div>
              ))}
              <div className="h-10 sm:h-12 bg-gray-200 rounded-xl animate-pulse"></div>
              <div className="h-10 sm:h-12 bg-blue-200 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppFooter: React.FC<FooterProps> = ({ isLoading = false }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    email: "",
    phone: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Dropdown state is now handled by the Select component

  if (isLoading) {
    return <FooterSkeleton />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Contact Form:", formData);
    setIsSubmitting(false);
    setFormData({ firstName: "", email: "", phone: "", course: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCourseSelect = (value: string, label?: string) => {
    setFormData((prev) => ({ ...prev, course: value }));
    // No need to set dropdown open state as it's handled by the Select component
  };

  // Course selection is now handled by the Select component

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full lg:pt-[200px] xl:pt-[250px] relative bg-white py-6 sm:py-8 md:py-10 lg:py-16"
    >
      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        <div className="lg:col-span-8 w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Let's start together.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6 text-center sm:text-left"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <img
                    src={FOOTER_DATA.company.img}
                    alt={FOOTER_DATA.company.alt}
                    className="h-8 sm:h-10 md:h-12 w-auto"
                  />
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {FOOTER_DATA.company.description}
              </p>
            </motion.div>

            {/* Useful Links */}
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                {FOOTER_DATA.sections[0].title}
              </h4>
              <ul className="space-y-2">
                {FOOTER_DATA.sections[0].links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                Contact
              </h4>
              <div className="space-y-2 sm:space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3"
                >
                  <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-gray-600 text-sm sm:text-base">
                    {FOOTER_DATA.contact.phone}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="flex items-start justify-center sm:justify-start gap-2 sm:gap-3"
                >
                  <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    <div>{FOOTER_DATA.contact.address.line1}</div>
                    <div>{FOOTER_DATA.contact.address.line2}</div>
                    <div>{FOOTER_DATA.contact.address.line3}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-4 w-full">
          <Form
            heading="Any Enquires"
            onSubmit={handleSubmit}
            className="h-full"
          >
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              required
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email ID"
              required
            />
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              required
            />

            <Select
              options={FOOTER_DATA.courses}
              value={formData.course}
              onChange={(value) => handleCourseSelect(value, "")}
              placeholder="Course"
              required
            />

            <Button
              //   disabled={isSubmitting || !formData.course || !formData.firstName || !formData.email || !formData.phone}
              className="px-6 sm:px-8 md:px-10 w-full sm:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </Form>
        </div>
      </div>
    </motion.footer>
  );
};

export default AppFooter;
