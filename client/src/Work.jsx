import CircularGallery from "./Components/CircularGal";
import chatAppVid from "./assets/testVideoChat.mp4";
import ollamaAppVid from "./assets/videos/Ollama_UI.mp4";
import funwithflags from "./assets/videos/Fun_with_flags.mp4";
import cosmiccribs from "./assets/videos/Cosmic_Cribs.mp4";
// import chatAppVid from './assets/videos/Chat.mp4'
import chatApp from "./assets/videos/Chat.mp4";
import Avatar from "./Components/Avatar";
import Resume from "./assets/jrsRes.pdf";
import Download from "./assets/downloadIcon.svg";
import ResumeDM from './assets/jrsResDM.pdf'


const Work = ({ showDownload, setShowDownload }) => {
  const handleShowDownload = () => {
    setShowDownload(!showDownload);
  };

  return (
    <>
      <div className="work">
        <div className="absolute z-50" onClick={handleShowDownload}>
          <Avatar />
        </div>

        {showDownload && (
          <div class="flex items-start gap-2.5 ml-36 pt-22 absolute z-50">
            <div class="flex flex-col w-full max-w-[220px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl  dark:bg-teal-100">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="mx-auto">
                  <a href={ResumeDM} download>
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

        <div className="pt-46">
          <div className="UserListHeader mx-auto text-center pb-10">
            <span className="text-5xl" >My Apps</span>
          </div>

          {/* <div className="pt-4 mx-16 pb-[0px] flex flex-row justify-between">
            <div className="UserList text-white flex-col mp-10 w-[450px] ml-8 mt-auto mb-auto">
              <label className="">Ollama UI</label>
              <div className="text-white mb-10 w-[450px]">
                <div className="text-white font-bold">
                  <video
                    className="rounded-2xl"
                    muted
                    controls
                    src={ollamaAppVid}
                  >
                    <track default kind="captions" src="captions.vtt" />
                  </video>
                </div>
              </div>
            </div>

            <div className="UserList text-white flex-col mp-10 w-[450px] ml-8">
              <label className="">Game App</label>
              <div className="text-white mb-10 w-[450px]">
                <div className="text-white font-bold">
                  <video
                    className="rounded-2xl"
                    muted
                    controls
                    src={funwithflags}
                  >
                    <track default kind="captions" src="captions.vtt" />
                  </video>
                </div>
              </div>
            </div>

            <div className="UserList text-white flex-col mp-10 w-[450px] mt-auto mb-auto">
              <label className="">Chat App</label>
              <div className="text-white font-bold">
                <video className="rounded-2xl" muted controls src={chatApp}>
                  <track default kind="captions" src="captions.vtt" />
                </video>
              </div>
            </div>
          </div> */}

{/* start ollama ui */}
<div className="pt-4 pb-[50px] flex flex-row justify-between">
            <div className="UserList text-white flex-col w-[450px] mt-auto mb-auto text-left">
              <div class="flex-col rounded-2xl w-80 bg-[#75b2b8] shadow-xl ml-25">
                <div class="p-8">
                  <div class="text-2xl font-bold   text-[#ffffff] pb-6 underline">
                    Features
                  </div>
                  <div class="text-lg text-[#ffffff]">
                    <ul>
                      <li>- LLM chatbot</li>
                      <li>- 3 AI models to choose from</li>
                      <li>- History of requests/responses</li>
                      <li>- Search functionality on history</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="UserList text-white flex-col w-[1000px]  mt-auto mb-auto text-center">
              <label className="text-4xl">Ollama UI</label>
              <div className="text-white mb-10">
                <div className="text-white font-bold mt-3">
                  <video
                    className="rounded-2xl"
                    muted
                    controls
                    src={ollamaAppVid}
                  >
                    <track default kind="captions" src="captions.vtt" />
                  </video>
                </div>
              </div>
            </div>

            <div className="UserList text-white flex-col w-[450px] mt-auto mb-auto text-left ">
              <div class="flex-col rounded-2xl w-80 bg-[#75b2b8] shadow-xl ml-7">
                <div class="p-8">
                  <div class="text-2xl font-bold   text-[#ffffff] pb-6 underline">
                    Technologies
                  </div>
                  <div class="text-lg text-[#ffffff]">
                    <ul>
                      <li>- MERN</li>
                      <li>- Tailwindcss/Vite</li>
                      <li>- Ollama API integration</li>
                      <li>- deepseek-r1</li>
                      <li>- gemma2</li>
                      <li>- mistral</li>
                      <li>- reactbits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/* end ollama ui */}

{/* beginning chat room */}
<div className="pt-4 pb-[50px] flex flex-row justify-between">
            <div className="UserList text-white flex-col w-[450px] mt-auto mb-auto text-left">
              <div class="flex-col rounded-2xl w-80 bg-[#75b2b8] shadow-xl ml-25">
                <div class="p-8">
                  <div class="text-2xl font-bold   text-[#ffffff] pb-6 underline">
                    Features
                  </div>
                  <div class="text-lg text-[#ffffff]">
                    <ul>
                      <li>- Login</li>
                      <li>- Multiple chat rooms</li>
                      <li>- Messages storage in database</li>
                      <li>- Ollama AI chatbot integrated into chat rooms @hivemind</li>
                      <li>- Avatar upload</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="UserList text-white flex-col w-[1000px]  mt-auto mb-auto text-center">
              <label className="text-4xl">Chat App</label>
              <div className="text-white mb-10 mt-3">
                <div className="text-white font-bold">
                  <video
                    className="rounded-2xl"
                    muted
                    controls
                    src={chatApp}
                  >
                    <track default kind="captions" src="captions.vtt" />
                  </video>
                </div>
              </div>
            </div>

            <div className="UserList text-white flex-col w-[450px] mt-auto mb-auto text-left ">
              <div class="flex-col rounded-2xl w-80 bg-[#75b2b8] shadow-xl ml-7">
                <div class="p-8">
                  <div class="text-2xl font-bold   text-[#ffffff] pb-6 underline">
                    Technologies
                  </div>
                  <div class="text-lg text-[#ffffff]">
                    <ul>
                      <li>- Socket.io</li>
                      <li>- argon2</li>
                      <li>- passport.js</li>
                      <li>- faker.js</li>
                      <li>- Tailwind/Flowbite</li>
                      <li>- Ollama AI</li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/* end chat room */}

          
{/* start of cosmic cribs */}
          <div className="pt-4 pb-[50px] flex flex-row justify-between">
            <div className="UserList text-white flex-col w-[450px] mt-auto mb-auto text-left">
              <div class="flex-col rounded-2xl w-80 bg-[#75b2b8] shadow-xl ml-25">
                <div class="p-8">
                  <div class="text-2xl font-bold   text-[#ffffff] pb-6 underline">
                    Features
                  </div>
                  <div class="text-lg text-[#ffffff]">
                    <ul>
                      <li>- Search functionality</li>
                      <li>- Store "Favorite" listings to database</li>
                      <li>- Featured listings</li>
                      <li>- AI generated pictures</li>
                      <li>- AI generated housing details</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="UserList text-white flex-col w-[1000px]  mt-auto mb-auto text-center">
              <label className="text-4xl">Real Estate App</label>
              <div className="text-white mb-10 mt-3">
                <div className="text-white font-bold">
                  <video
                    className="rounded-2xl"
                    muted
                    controls
                    src={cosmiccribs}
                  >
                    <track default kind="captions" src="captions.vtt" />
                  </video>
                </div>
              </div>
            </div>

            <div className="UserList text-white flex-col w-[450px] mt-auto mb-auto text-left ">
              <div class="flex-col rounded-2xl w-80 bg-[#75b2b8] shadow-xl ml-7">
                <div class="p-8">
                  <div class="text-2xl font-bold   text-[#ffffff] pb-6 underline">
                    Technologies
                  </div>
                  <div class="text-lg text-[#ffffff]">
                    <ul>
                      <li>-Full Stack (MERN)</li>
                      <li>- Vite</li>
                      <li>- Tailwind/Flowbite</li>
                      <li>- axios</li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/* end of cosmic cribs */}


{/* beginning flag app */}
<div className="pt-4 pb-[50px] flex flex-row justify-between">
            <div className="UserList text-white flex-col w-[450px] mt-auto mb-auto text-left">
              <div class="flex-col rounded-2xl w-80 bg-[#75b2b8] shadow-xl ml-25">
                <div class="p-8">
                  <div class="text-2xl font-bold   text-[#ffffff] pb-6 underline">
                    Features
                  </div>
                  <div class="text-lg text-[#ffffff]">
                    <ul>
                      <li>- Educational flag game</li>
                      <li>- Interactive gameplay</li>
                      <li>- Promotes memory retention</li>
                      <li>- Score history stored in database</li>
                      <li>- Leaderboard scores</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="UserList text-white flex-col w-[600px] mt-auto mb-auto text-center">
              <label className="text-4xl">Game App</label>
              <div className="text-white mb-10 mt-3">
                <div className="text-white font-bold">
                  <video
                    className="rounded-2xl"
                    muted
                    controls
                    src={funwithflags}
                  >
                    <track default kind="captions" src="captions.vtt" />
                  </video>
                </div>
              </div>
            </div>

            <div className="UserList text-white flex-col w-[450px] mt-auto mb-auto text-left ">
              <div class="flex-col rounded-2xl w-80 bg-[#75b2b8] shadow-xl ml-7">
                <div class="p-8">
                  <div class="text-2xl font-bold   text-[#ffffff] pb-6 underline">
                    Technologies
                  </div>
                  <div class="text-lg text-[#ffffff]">
                    <ul>
                      <li>- Vite</li>
                      <li>- tailwindcss</li>
                      <li>- RTK (redux toolkit)</li>
                      <li>- toastify</li>
                      <li>- react-country-flag</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/* end flag app */}


        </div>

        <div className="">
          <div className="h-[450px] relative pt-6">
            <CircularGallery bend={4} textColor="#ffffff" borderRadius={0.05} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
