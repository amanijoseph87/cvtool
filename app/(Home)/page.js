import Link from "next/link";
import ImgTilt from "./ImgTilt";
import { FaGithub } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { FaFileAlt, FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div className="mx-auto flex h-full min-h-[calc(100vh-5rem)] max-w-screen-xl flex-col-reverse items-center justify-center gap-8 overflow-hidden px-4 py-6 text-center md:flex-row md:justify-between md:text-left md:px-8 lg:px-12 xl:gap-12">
      <div className="md:max-w-[55%] lg:max-w-[60%] xl:pr-4">
        <h4 className="text-base md:text-xl">
          <span className="text-gradient">Zoom Tanzania Resume Builder</span>
        </h4>
        <h1 className="text-3xl md:mt-2 md:text-4xl 2xl:text-[2.75rem]">
          <span className="text-gradient">Tengeneza CV Bora</span>
        </h1>
        <p className="mt-3 max-w-screen-sm text-sm text-gray-300 md:mt-6 lg:mt-8 md:text-lg">
          Jifunze <strong>jinsi ya kutengeneza CV</strong> bora na ya kitaalamu
          na Zoom Tanzania free CV maker.
          <span className="hidden md:inline">
            {" "}
            Hakuna haja ya kuingia au kujisajili, Weka taarifa zako na upate CV
            nzuri inayokidhi mahitaji ya mfumo wa ATS, na kisha uipakue kwa
            mfumo wa PDF Ongeza nafasi zako za kupata kazi!
          </span>
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-start gap-3 md:mt-8">
          <Link
            href="https://www.zoomtanzania.net/blog/post/jinsi-ya-kutengeneza-cv-bora-inayoendana-na-mfumo-wa-ats"
            className="w-full md:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center w-full md:w-auto text-sm text-blue-300 mb-2 md:mb-0">
              <FaFileAlt className="mr-2" />
              <span>CV inayokubalika na mifumo ya ATS</span>
            </div>
          </Link>

          <Link href="#" className="w-full md:w-auto md:ml-6">
            <div className="flex items-center w-full md:w-auto text-sm text-blue-300">
              <FaSearch className="mr-2" />
              <span>Inayotambulika na waajiri</span>
            </div>
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center justify-start gap-3 md:mt-12 md:flex-row md:gap-8">
          <Link href={"/editor"} className="btn-filled w-full md:w-auto">
            <span>Tengeneza CV Yako</span>
          </Link>
          <Link
            href={"https://www.zoomtanzania.net/jobs/"}
            className="btn w-full md:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Tafuta Kazi Tanzania</span>
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          CV maker #1 Tanzania | Jinsi ya kutengeneza CV | Format ya CV Tanzania
        </p>
      </div>
      <div className="flex justify-center md:justify-end md:max-w-[45%] lg:max-w-[40%] xl:pl-4">
        <ImgTilt>
          <img
            src="/sample.png"
            alt="Mfano wa CV bora iliyotengenezwa na Zoom Tanzania CV Maker"
            width="450"
            height="600"
          />
        </ImgTilt>
      </div>
    </div>
  );
};

export default Home;
