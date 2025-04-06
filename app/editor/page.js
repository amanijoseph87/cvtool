import Editor from "@/components/Editor";
import Preview from "@/components/Resume/Preview";
import Tabs from "@/components/Tabs";
import TipBox from "@/components/UI/TipBox";
import ResumeFields from "@/config/ResumeFields";
import { getTipForTab } from "@/utils/getTipForTab";
import { headers } from "next/headers";

export async function generateMetadata({ searchParams }) {
  // Get the tab from the URL query parameters, default to 'contact' if not specified
  const tab = searchParams?.tab || "contact";

  // Get the human-readable name for the tab
  const tabName = ResumeFields[tab]?.name || tab;

  // Create tab-specific metadata
  let description;
  switch (tab) {
    case "contact":
      description =
        "Jaza taarifa zako za mawasiliano kwenye CV yako. Ongeza jina, barua pepe, namba ya simu na mitandao ya kijamii.";
      break;
    case "summary":
      description =
        "Andika muhtasari wa CV yako unaovutia waajiri. Eleza ujuzi na uzoefu wako kwa ufupi.";
      break;
    case "education":
      description =
        "Ongeza taarifa za elimu yako kwenye CV. Weka vyuo, shahada, na mafanikio yako ya kitaaluma.";
      break;
    case "experience":
      description =
        "Ongeza uzoefu wako wa kazi kwenye CV. Eleza majukumu na mafanikio yako katika kazi za awali.";
      break;
    case "projects":
      description =
        "Ongeza miradi uliyofanya kwenye CV yako. Onesha ujuzi wako wa kiufundi na ubunifu.";
      break;
    case "skills":
      description =
        "Orodhesha ujuzi wako muhimu kwenye CV. Ongeza ujuzi wa kiufundi na kibinadamu unaokufanya uwe mwajiriwa bora.";
      break;
    case "certificates":
      description =
        "Ongeza vyeti na mafunzo uliyopata kwenye CV yako. Onesha ujuzi wako uliothibitishwa.";
      break;
    case "languages":
      description =
        "Ongeza lugha unazozungumza kwenye CV yako. Eleza kiwango chako cha ufasaha katika kila lugha.";
      break;
    case "references":
      description =
        "Ongeza watu wanaoweza kutoa ushahidi wa kazi yako kwenye CV. Weka mawasiliano ya wasimamizi au wenzako wa zamani.";
      break;
    default:
      description =
        "Tengeneza CV bora na ya kitaalamu kwa kutumia Zoom Tanzania CV Resume maker. Tumia zana yetu bure kutengeneza CV inayovutia waajiri.";
  }

  // Create the title
  const title = `${tabName} | Zoom Tanzania CV Resume Maker`;

  // Create the URL
  const baseUrl = "https://cv.zoomtanzania.net";
  const url = `${baseUrl}/editor?tab=${tab}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `${baseUrl}/favicon.png`,
          width: 800,
          height: 600,
          alt: `Zoom Tanzania CV Maker - ${tabName}`,
        },
      ],
      siteName: "Zoom Tanzania CV Maker",
      type: "website",
      locale: "sw_TZ",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/favicon.png`],
      site: "@zoomtanzania",
    },
    alternates: {
      canonical: url,
    },
  };
}

const page = async ({ searchParams }) => {
  // Get the tab from the URL query parameters, default to 'contact' if not specified
  const tab = searchParams?.tab || "contact";

  // Get the tip for the current tab
  const tipText = getTipForTab(tab);

  return (
    <div className="mx-auto mt-8 flex max-w-screen-xl 2xl:max-w-screen-2xl flex-col-reverse gap-10 px-3 pb-8 md:flex-row md:mt-8 2xl:mt-14 2xl:gap-16">
      <Preview />
      <div className="flex-grow ">
        <Tabs activeTab={tab} />
        <TipBox tip={tipText} />
        <Editor tab={tab} />
      </div>
    </div>
  );
};

export default page;
