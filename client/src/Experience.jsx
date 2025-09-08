import { useState, useEffect } from "react";
import Avatar from "./Components/Avatar";
import Resume from './assets/jsayre_DM_PDF.pdf'
import Download from "./assets/downloadIcon.svg";
import ResumeDM from './assets/jrsResDM.pdf'


const Experience = ({ showDownload, setShowDownload }) => {
  const [active, setActive] = useState("Job1");
  // const [avatarModal, setAvatarModal] = useState(false);
  // const [ showDownload, setShowDownload ] = useState(false)

  // useEffect(() => {
  //   console.log("avatarModal", avatarModal);
  // }, [avatarModal]);

  // const toggleModal = () => {
  //   setAvatarModal(!avatarModal)
  //   // if (avatarModal === true) {
  //   //   setAvatarModal(false)
  //   // } else {
  //   //   setAvatarModal(true)
  //   // }
  // }

  const handleShowDownload = () => {
    setShowDownload(!showDownload);
  };

  return (
    <div className="experience experience2 text-blue-100">
      <div className="absolute z-50" onClick={handleShowDownload}>
        <Avatar />
      </div>

      {showDownload && (
        <div class="flex items-start gap-2.5 ml-36 pt-22 absolute z-50">
          <div class="flex flex-col w-full max-w-[220px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl  dark:bg-blue-200">
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

      <div className="mx-auto w-[625px] flex">
        <h1 className="mt-[350px] text-4xl text-indigo-700 text-indigo-700">
          Experience{" "}
        </h1>
        <span className="mt-[350px] text-4xl">
          <hr className="ml-4 mt-5 w-[500px] p-[1px] text-indigo-700 bg-indigo-700 " />
        </span>
      </div>
      <svg
        className="w-[550px] ml-[400px] mt-[-130px] h-[450px] z-0 absolute stroke-indigo-700 text-indigo-700 "
        viewBox="50 10 100 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="90" y1="90" x2="90" y2="20" pathLength="10" />
      </svg>
      <div className="mx-auto flex w-[675px] mt-6 z-50 relative">
        <div className="flex flex-col w-[75px] mostly-customized-scrollbar">
          <h1
            className={`w-[85px] ml-2 hover:bg-emerald-300 hover:text-indigo-700 under rounded-xl ${
              active === "Job1"
                ? "text-indigo-700 underline bg-emerald-300"
                : "opacity-90"
            } `}
          >
            <a onClick={() => setActive("Job1")} href="#job1" className="ml-2">
              Persevere
            </a>
          </h1>
          <h1
            className={`mt-6 w-[85px] ml-2  hover:bg-emerald-300 hover:text-indigo-700  rounded-xl ${
              active === "Job2"
                ? "text-indigo-700 underline bg-emerald-300"
                : "opacity-90"
            } `}
          >
            <a onClick={() => setActive("Job2")} href="#job2" className="ml-2">
              Televerde
            </a>
          </h1>
          <h1
            className={`mt-6 w-[110px] ml-2 hover:bg-emerald-300 hover:text-indigo-700  rounded-xl ${
              active === "Job3"
                ? "text-indigo-700 underline bg-emerald-300 opacity-100"
                : "opacity-90"
            } `}
          >
            <a onClick={() => setActive("Job3")} href="#job3" className="ml-2">
              Marriott <span className="ml-2">International</span>
            </a>
          </h1>
          <h1
            className={`mt-6 w-[50px] ml-2 hover:bg-emerald-300 hover:text-indigo-700  rounded-xl ${
              active === "Job4"
                ? "text-indigo-700 underline bg-emerald-300"
                : "opacity-90"
            } `}
          >
            <a onClick={() => setActive("Job4")} href="#job4" className="ml-2">
              CVS
            </a>
          </h1>
          <h1
            className={`mt-6 w-[95px] ml-2 hover:bg-emerald-300 hover:text-indigo-700  rounded-xl ${
              active === "Job5"
                ? "text-indigo-700 underline bg-emerald-300"
                : "opacity-90"
            } `}
          >
            <a onClick={() => setActive("Job5")} href="#job5" className="ml-2">
              loanDepot
            </a>
          </h1>
        </div>
        <div
          id="jobs"
          className="flex ml-14 flex-col overflow-hidden h-[300px] z-50"
        >
          <div id="job1"></div>
          <h1 className="text-xl">Instructor’s Assistant (Full Stack)</h1>
          <h2 className="">July 2022 – August 2025</h2>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>

            <p className="ml-4 -mt-4">
              Demonstrated expertise in curriculum development, debugging, and
              full stack application development.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Daily responsibilities included debugging various site issues
              using technologies such as C, JavaScript, React, RTK, Axios,
              Node.js Express, Passport, Socket.io, PowerShell, Git, GitLab,
              Ollama, and VS Code.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              In a team setting, I utilized Git and Agile methodologies to build
              a full stack CRM application in MERN, RTK, and Passport.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Actively participated in daily stand-ups, sprint planning,
              retrospectives, and other Agile ceremonies.
            </p>
          </span>
          <div id="job2" className="mt-16"></div>
          <h1 className="text-xl">Service Desk Team Lead</h1>
          <h2 className="">July 2019 – August 2022</h2>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit mollitia libero reiciendis dignissimos fuga perspiciatis consequuntur, obcaecati architecto, nihil omnis alias. Sequi vel dignissimos, id neque ducimus error itaque, aperiam ab, molestias necessitatibus nulla reiciendis. In adipisci vitae aliquam quasi repellat aliquid fugiat asperiores architecto a! Aperiam, cum. Quam, dolorem! */}
            <p className="ml-4 -mt-4">
              Provided technical support for Salesforce, O365, and Active
              Directory to resolve issues related to user productivity.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Maintained infrastructure components such as servers,
              workstations, wireless networks, and hardware upgrades and
              installations.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Debugged Citrix environments, monitored system performance, and
              documented problems, solutions, and outcomes for training and
              reference purposes.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Provided technical leadership and guidance to ensure team goals
              were met
            </p>
          </span>
          Provided technical leadership and guidance to ensure team goals were
          met
          <div id="job3" className="mt-16"></div>
          <h1 className="text-xl">Lead Systems Support Analyst</h1>
          <h2 className="">April 2018 – August 2018</h2>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit mollitia libero reiciendis dignissimos fuga perspiciatis consequuntur, obcaecati architecto, nihil omnis alias. Sequi vel dignissimos, id neque ducimus error itaque, aperiam ab, molestias necessitatibus nulla reiciendis. In adipisci vitae aliquam quasi repellat aliquid fugiat asperiores architecto a! Aperiam, cum. Quam, dolorem! */}
            <p className="ml-4 -mt-4">
              Provided daily operational support for IT systems related to
              software, hardware, and networking issues.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Maintained Active Directory Build OUs for all domain systems.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Installation of Cisco UCS Blade fabric interconnected switches.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Managed AD/group policy to support and secure clients, and SCCM
              client install startup scripts.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Supported BitLocker encryption key storage, backup, and recovery.
            </p>
          </span>
          <div id="job4" className="mt-16"></div>
          <h1 className="text-xl">Network Analyst (Cisco VoiP)</h1>
          <h2 className="">Summer of 2018</h2>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit mollitia libero reiciendis dignissimos fuga perspiciatis consequuntur, obcaecati architecto, nihil omnis alias. Sequi vel dignissimos, id neque ducimus error itaque, aperiam ab, molestias necessitatibus nulla reiciendis. In adipisci vitae aliquam quasi repellat aliquid fugiat asperiores architecto a! Aperiam, cum. Quam, dolorem! */}
            <p className="ml-4 -mt-4">
              Configured voice gateways, resolved dial-peer issues, and
              addressed route pattern problems.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Installation, maintainence, and upgrades of Cisco
              Call/Communications Manager software, hardware setup, testing,
              remote monitoring, and integration with other enterprise
              applications.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Strong background in implementing, supporting, troubleshooting,
              and upgrading VoIP systems and ensuring smooth operation of
              various networks. (Cisco Unity and LDAP synchronization.)
            </p>
          </span>
          {/* // job 5 */}
          <div id="job5" className="mt-16"></div>
          <h1 className="text-xl">Senior Desktop Analyst</h1>
          <h2 className="">May 2016 – May 2018</h2>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit mollitia libero reiciendis dignissimos fuga perspiciatis consequuntur, obcaecati architecto, nihil omnis alias. Sequi vel dignissimos, id neque ducimus error itaque, aperiam ab, molestias necessitatibus nulla reiciendis. In adipisci vitae aliquam quasi repellat aliquid fugiat asperiores architecto a! Aperiam, cum. Quam, dolorem! */}
            <p className="ml-4 -mt-4">
              Provided remote/desktop support for desktop operating systems,
              Citrix, and Windows virtual environments.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              My responsibilities also included Exchange/Office 365 support,
              administration, and migration from Exchange to O365.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Utilized SCCM for enterprise wide software deployment.
            </p>
          </span>
          <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Leveraged PowerShell to streamline the new hire on-boarding
              process, eliminating manual user configuration.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </span>
          {/* <span className="mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
            <p className="ml-4 -mt-4">
              Created and maintainence training documentation to ensure a high
              level of proficiency among team members.
              <br />
              <br />
              <br />
              <br />
            </p>
          </span> */}
        </div>
        {/* <div className="flex">
          <h1 className="mr-4">Job 1</h1>
          <div className="flex flex-col">
            <h1>Job Role 1</h1>
            <h2 className="">Job Dates</h2>
            <p className="mt-2 ml-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                />
              </svg>
              Job Description
            </p>
          </div>
        </div> */}
        {/* <div className="flex">
          <h1 className="mr-4">Job 2</h1>{" "}
          <div className="flex flex-col">
            <h1>Job Role 2</h1>
            <h2>Job Dates</h2>
            <p className="mt-2 ml-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                  />
              </svg>
                  Job Description
            </p>
          </div>
        </div> */}
        {/* <div className="flex">
          <h1 className="mr-4">Job 3</h1>{" "}
          <div className="flex flex-col">
            <h1>Job Role 3</h1>
            <h2>Job Dates</h2>
            <p className="mt-2 ml-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                  />
              </svg>
                  Job Description
            </p>
          </div>
        </div> */}

        {/* <div className="flex">
          <h1 className="mr-4">Job 4</h1>{" "}
          <div className="flex flex-col">
            <h1>Job Role 4</h1>
            <h2>Job Dates</h2>
            <p className="mt-2 ml-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                  />
              </svg>
                  Job Description
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
