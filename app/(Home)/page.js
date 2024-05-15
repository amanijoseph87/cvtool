import Link from 'next/link';
import ImgTilt from './ImgTilt';
import { FaGithub } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';

const page = () => {
    return (
        <div className="mx-auto flex h-full min-h-[calc(100vh-5rem)] max-w-screen-xl flex-col-reverse items-center justify-center gap-8 overflow-hidden px-3 py-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="">
                <h4 className="text-base md:text-xl">
                    <span className="text-gradient">Zoom Tanzania Resume Builder</span>
                </h4>
                <h1 className="text-3xl md:mt-2 md:text-4xl 2xl:text-[2.75rem] ">
                    <span className="text-gradient">AI Free CV Maker</span>
                </h1>
                {/* <p className="mt-3 max-w-screen-sm text-sm text-gray-300 md:mt-10 md:text-lg">
                    Welcome to Resumave! Making a great resume is easy here. Our tool helps you create a ATS friendly
                    resumes.{' '}
                    <span className="hidden md:inline">
                        It makes sure you look good to employers. Say bye-bye to resume worries and hello to Resumave.
                        Start now and get closer to your dream job!
                    </span>
                </p> */}
                <p className="mt-3 max-w-screen-sm text-sm text-gray-300 md:mt-10 md:text-lg">
                    Zoom Tanzania Free resume maker simplify the process of creating professional CV
                    <span className="hidden md:inline">
                        s without the hassle of login or sign-up. With this tool, users can easily input their
                        details and generate a well-formatted resume, and export it in PDF format.
                    </span>
                </p>

                <div className="mt-8 flex flex-col items-center justify-start gap-3 md:mt-16 md:flex-row md:gap-8">
                    <Link href={'/editor'} className="btn-filled w-full md:w-auto">
                        <span>Create My Resume</span>
                    </Link>

                    <Link href={'https://www.zoomtanzania.net/jobs/'} className="btn w-full md:w-auto" target="_blank" rel="noopener noreferrer">
                        <span>Find Jobs in Tanzania</span>
                    </Link>
                </div>
            </div>
            <div>
                <ImgTilt>
                    <img src="/sample.png" />
                </ImgTilt>
            </div>
        </div>
    );
};

export default page;
