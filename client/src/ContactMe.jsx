import Avatar from "./Components/Avatar";
import { useState, useEffect } from "react";
import { postMessage } from "./messagesService";
import Resume from './assets/jsayre_DM_PDF.pdf'
import ResumeDM from "./assets/jrsResDM.pdf";
import Download from "./assets/downloadIcon.svg";

const ContactMe = ({ showDownload, setShowDownload }) => {
  const [modal, setModal] = useState(false);

  const [contactForm, setContactForm] = useState({
    email: "",
    fName: "",
    lName: "",
    phone: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    console.log("contact form is changing", contactForm);
  }, [contactForm]);

  useEffect(() => {
console.log("modal changing", modal)
  }, [modal])
  

  const handleShowDownload = () => {
    setShowDownload(!showDownload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT & form", contactForm);

    const sendMessageSC = async () => {
      console.log("sendmessage", contactForm);
      const response = await postMessage(contactForm);
      console.log("response", response);

      if (response.success === true) {
        setModal(true);
        console.log("kick off modal here");
        setContactForm({
          email: "",
          fName: "",
          lName: "",
          phone: "",
          company: "",
          message: "",
        });
      }
    };
    sendMessageSC();
  };

  return (
    <div className="contact mx-auto">
      <div className="absolute z-50" onClick={handleShowDownload}>
        <Avatar />
      </div>

      {showDownload && (
        <div class="flex items-start gap-2.5 ml-36 pt-22 absolute z-50">
          <div class="flex flex-col w-full max-w-[220px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl  dark:bg-rose-200">
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

      {modal && (
        <div
          id="small-modal"
          tabindex="-1"
          class="fixed pl-184 mt-80 top-10 left-30 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-md max-h-full ">
            <div class="relative bg-white rounded-lg shadow-sm  dark:bg-rose-300">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                  Your message has been sent!
                </h3>
                <button

                onClick={() => setModal(false)}
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="small-modal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <form className="w-[550px]  mx-auto h-[850px] pt-[250px]">
        <div className="contactbg2 p-4 border-4 rounded-2xl border-gray-700">
          <div className="relative z-0 w-full mb-5 group mt-2">
            <input
              value={contactForm.email}
              onChange={(e) =>
                setContactForm({ ...contactForm, email: e.target.value })
              }
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group mt-2"></div>
          <div className="grid md:grid-cols-2 md:gap-6 mt-2">
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={contactForm.fName}
                onChange={(e) =>
                  setContactForm({ ...contactForm, fName: e.target.value })
                }
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-400 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                value={contactForm.lName}
                onChange={(e) =>
                  setContactForm({ ...contactForm, lName: e.target.value })
                }
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-400 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={contactForm.phone}
                onChange={(e) =>
                  setContactForm({ ...contactForm, phone: e.target.value })
                }
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-400 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={contactForm.company}
                onChange={(e) =>
                  setContactForm({ ...contactForm, company: e.target.value })
                }
                type="text"
                name="floating_company"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-400 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company (Ex. Google)
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              for="floating_message"
              className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {" "}
              Message
            </label>
            <textarea
              id="floating_message"
              value={contactForm.message}
              onChange={(e) =>
                setContactForm({ ...contactForm, message: e.target.value })
              }
              className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-400 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            type="button"
            className="mt-4 hoverme inline-flex items-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 focus:ring-teal-800 shadow-lg shadow-teal-500/50 shadow-lg shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Message me
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
      </form>
    </div>
  );
};

export default ContactMe;
