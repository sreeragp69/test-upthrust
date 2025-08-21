"use client";

import React from "react";
import { motion } from "framer-motion";

interface InputProps {
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  label?: string;
  error?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  label,
  error,
  className = "",
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <motion.input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        whileFocus={{ scale: 1.02 }}
        className={`
          w-full h-10 sm:h-11 md:h-12 px-3 sm:px-4 rounded-xl border border-gray-200 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent 
          outline-none text-sm transition-all duration-200
          ${error ? "border-red-500" : ""}
          ${className}
        `}
      />
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
};

export default Input;