import { useNavigate } from "react-router";
import { useEffect } from "react";
import Avatar from "./Components/Avatar";
import Resume from './assets/jsayre_DM_PDF.pdf'
import Download from "./assets/downloadIcon.svg";


const Home = ({ showDownload, setShowDownload }) => {
  const navigate = useNavigate();

  const handleShowDownload = () => {
    setShowDownload(!showDownload);
  };


  return (
    <div className="bg-black h-screen text-white customCursor h-[100vh]">
      <div className="absolute z-50" onClick={handleShowDownload}>
        <Avatar />
      </div>

      {/* testing modal stuff */}
      {showDownload && (
        <div class="flex items-start gap-2.5 ml-36 pt-22 absolute z-50">
          <div class="flex flex-col w-full max-w-[220px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl  dark:bg-red-200">
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="mx-auto">
                <a href={Resume} download>
                  <button
                    type="button"
                    className="z-50 mt-4 hoverme inline-flex items-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 focus:ring-teal-800 shadow-lg shadow-teal-500/50 shadow-lg shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    My Resume
                    <img className="ml-2" src={Download} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* end of testing bubble stuff */}

      <div className="pl-10 homeContainer customCursor">
        <div className="mt-[250px] max-w-lg h-[500px] p-6  rounded-lg  ml-[270px] customCursor homebg">
          <h5 className="text-6xl font-bold tracking-tight text-gray-200 customCursor">
            Hello, world!
          </h5>

          <h2 className="text-3xl mt-2 text-gray-200">I'm Jacqueline Sayre,</h2>
          <h3 className="text-xl mt-2 text-gray-200">
            A Full Stack Web Developer
          </h3>

          <p className="mt-[35px] mb-3 font-normal text-white text-gray-300">
            I'm a motivated and detail-oriented Full Stack JavaScript Developer
            with a strong foundation in JavaScript, Node.js, and React. Seeking
            to leverage my skills in a challenging and dynamic environment to
            contribute to the success of the team by delivering high-quality,
            user-friendly web applications.
            <br />
            {/* <br />I am also a champion of life, love, and wonderful at
            everything I do. But if you need a champion, sorry ladies, I am
            taken. */}
          </p>

          <button
            onClick={() => navigate("/contact")}
            type="button"
            className="mt-4 hoverme inline-flex items-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 focus:ring-teal-800 shadow-lg shadow-teal-500/50 shadow-lg shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Contact me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
