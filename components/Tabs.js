import ResumeFields from "@/config/ResumeFields";
import Link from "next/link";

const Tabs = ({ activeTab }) => {
  const tabs = Object.keys(ResumeFields);

  return (
    <div className="flex w-full flex-wrap gap-2 overflow-x-auto md:gap-3">
      {tabs.map((tab) => (
        <Link
          key={tab}
          className={`tabs relative cursor-pointer rounded-md px-3 py-1.5 text-sm capitalize md:text-base 2xl:text-lg ${activeTab === tab ? "bg-primary-400 text-black" : "bg-gray-700 hover:bg-gray-600"}`}
          href={`/editor/?tab=${tab}`}
        >
          {tab}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
