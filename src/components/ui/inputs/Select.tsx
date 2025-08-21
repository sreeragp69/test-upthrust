"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string, label?: string) => void;
  placeholder?: string;
  error?: string;
  className?: string;
  required?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  error,
  className = "",
  required = false,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const selectedOption = options.find((option) => option.value === value);
  
  const handleOptionSelect = (optionValue: string, optionLabel: string) => {
    onChange(optionValue, optionLabel);
    setIsDropdownOpen(false);
  };

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`
            w-full h-10 sm:h-11 md:h-12 px-3 sm:px-4 rounded-xl border border-gray-200
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
            outline-none text-sm text-left flex items-center justify-between
            bg-white transition-all duration-200
            ${error ? "border-red-500" : ""}
            ${className}
          `}
        >
          <span className={selectedOption?.value ? "text-gray-900" : "text-gray-500"}>
            {selectedOption?.label || placeholder}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleOptionSelect(option.value, option.label)}
                className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-600"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
