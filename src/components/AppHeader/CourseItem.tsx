import React from "react";
import { Link } from "react-router";

type CourseItemProps = {
  title: string;
  description: string;
  href: string;
  src: string;
};

const CourseItem: React.FC<CourseItemProps> = ({
  title,
  description,
  href,
  src,
}) => {
  return (
    <Link
      to={href}
      className="flex items-center gap-4 p-3 rounded-xl bg-white/10  backdrop-blur-md border border-white/20  hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
    >
      <img
        src={src}
        width={130}
        height={75}
        alt={title}
        className="shrink-0 rounded-lg shadow-md"
      />
      <div className="space-y-1">
        <h4 className="text-lg font-bold text-gray-900  drop-shadow-sm">
          {title}
        </h4>
        <p className="text-sm text-gray-700  max-w-[12rem] leading-snug">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default CourseItem;
