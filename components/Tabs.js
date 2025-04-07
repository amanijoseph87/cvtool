"use client";

import ResumeFields from "@/config/ResumeFields";
import Link from "next/link";

const Tabs = ({ activeTab }) => {
  const tabs = Object.keys(ResumeFields);

  return (
    <div className="hidden md:flex w-full flex-wrap gap-3 overflow-x-auto">
      {tabs.map((tab) => (
        <Link
          key={tab}
          className={`tabs relative cursor-pointer rounded-md px-3 py-1.5 text-base 2xl:text-lg ${
            activeTab === tab
              ? "bg-black text-white dark:bg-primary-400"
              : "bg-primary-400 dark:bg-gray-700 text-white hover:brightness-125"
          }`}
          href={`/editor/?tab=${tab}`}
        >
          {ResumeFields[tab].name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
