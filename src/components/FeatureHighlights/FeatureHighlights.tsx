import { CheckCircle } from "lucide-react";
import { features } from "../../constant/FeatureHighlights.data";

type Feature = {
  id: number;
  text: string;
  bgColor: string;
};

export function FeatureHighlights() {
  return (
    <div className=" mx-auto ">
      <div className=" lg:mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  py-5">
        {features.map((feature: Feature) => (
          <FeatureBadge
            key={feature.id}
            text={feature.text}
            bgColor={feature.bgColor}
          />
        ))}
      </div>
    </div>
  );
}

type FeatureBadgeProps = {
  text: string;
  bgColor: string;
};

function FeatureBadge({ text, bgColor }: FeatureBadgeProps) {
  return (
    <div
      className="flex items-center justify-center gap-2 rounded-full alexandria px-10  py-4 shadow-sm"
      style={{ backgroundColor: bgColor }}
    >
      <img src="images/icons/shieldCheck.svg" alt="✔️" className="w-5" />
      <span className="text-lg font-medium text-[#343339]">{text}</span>
    </div>
  );
}
