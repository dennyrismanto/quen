import "./App.css";
import { Home } from "./components/home";
import { Link, Route } from "wouter";
import { useState } from "react";
import { WeddingLocation } from "./components/weddinglocation";
import { Chat } from "./components/chat";
import { Bride } from "./components/bride";
import { Galery } from "./components/gallery";

import { Dialog } from "@headlessui/react";
import video from "./public/video/windmill.mp4";
import video_mobile from "./public/video/windmill_mobile.mp4";
import border from "./public/photos/border.png";
import icon_pop_up from "./public/photos/icon_pop_up.png";
import side_atas_image from "./public/photos/side_atas.png";
import side_bawah_image from "./public/photos/side_bawah.png";
import frame_atas_image from "./public/photos/frame_atas.png";
import frame_bawah_image from "./public/photos/frame_bawah.png";

import { Music } from "./components/music";

function App() {
  const [Modal, setModal] = useState(true);

  return (
    <div
      className={`w-auto min-w-full max-h-full min-h-screen bg-cover bg-lala-home `}
    >
      <Route path="/name/:name">
        {(params) => (
          <>
            {/* <video
              autoPlay
              loop
              muted
              className="w-auto min-w-full min-h-full hidden lg:block"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              autoPlay
              loop
              muted
              className="w-auto min-w-full min-h-full block lg:hidden"
            >
              <source src={video_mobile} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}

            <Dialog open={Modal} onClose={() => setModal(false)} className="">
              <div className="absolute inset-0 bg-black opacity-75 z-20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black-400 bg-orange-200 opacity-80 z-20 w-[300px] md:w-[300px] h-[300px]"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black-400 z-20 w-full">
                <div className="flex flex-col justify-center items-center opacity-100">
                  <img className="w-[300px] " src={border} alt="border_up" />
                  <img className="mb-4" src={icon_pop_up} alt="side1" />
                  <p className="text-black text-sm font-chakra-petch mb-2">
                    A Spesial Invitation to:
                  </p>
                  <p className="text-black text-2xl font-dancing-script mb-2 normal-case w-[250px] text-center">
                    {decodeURIComponent(params.name)}
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/"
                      onClick={() => {
                        window.location.reload();
                      }}
                    >
                      <button className="px-4 py-2 font-chakra-petch text-white font-bold rounded-md border-white bg-coklat focus:outline-none focus:ring focus:ring-white">
                        Open Invitation
                      </button>
                    </Link>
                  </div>
                  <img className="w-[300px]" src={border} alt="border_down" />
                </div>
              </div>
            </Dialog>
            {/* <NavBar /> */}
            <div className="">
              {/* <div className="absolute left-0 top-12 md:left-0 md:top-0">
                <img
                  className="w-28 h-28 md:w-56 md:h-56 md:rounded-none rounded-none"
                  src={side_atas_image}
                  alt="side1"
                ></img>
              </div> */}
              <div className="flex flex-col justify-center items-center">
                <p className="text-yellow-600 mt-28 text-3xl md:text-6xl font-indie-flower font-bold">
                  The Wedding
                </p>
                <p className="text-yellow-600 text-base md:text-xl font-chakra-petch">
                  Invitation
                </p>
                <img
                  className="mt-6 mb-6 h-20 w-52 md:w-1/4 md:h-3/4"
                  src={frame_atas_image}
                  alt="frame"
                />
                <p className="text-yellow-600 m-2 md:p-0 text-4xl md:text-6xl font-dancing-script font-bold">
                  {`Amalia & Denny`}
                </p>
                <img
                  className="mt-6 mb-6 h-20 w-52 md:w-1/4 md:h-3/4"
                  src={frame_bawah_image}
                  alt="frame"
                />
                <p className="text-yellow-600 text-lg pt-2 md:text-xl md:pt-6 font-chakra-petch">
                  Save the date
                </p>
                <p className="text-yellow-600 text-lg pt-2 md:text-xl md:pt-6 font-chakra-petch">
                  | 15 Oktober 2022 |
                </p>
                <p className="text-yellow-600 text-lg pt-2 md:text-xl md:pt-6 font-chakra-petch mb-6 md:mb-14">
                  Kota Tangerang
                </p>
              </div>
              {/* <div className="absolute bottom-0 right-0">
                <img
                  className="w-32 h-32 md:w-56 md:h-56 md:rounded-none rounded-none"
                  src={side_bawah_image}
                  alt="side1"
                />
              </div> */}
            </div>
          </>
        )}
      </Route>
      <Route path="/" component={Home} />
      <Route path="/location" component={WeddingLocation} />
      <Route path="/wishes" component={Chat} />
      <Route path="/brides" component={Bride} />
      <Route path="/galery" component={Galery} />
      <Music />
    </div>
  );
}

export default App;
