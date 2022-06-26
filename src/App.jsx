import "./App.css";
import { Home } from "./components/home";
import { Link, Route } from "wouter";
import { useState } from "react";
import { WeddingLocation } from "./components/weddinglocation";
import { Chat } from "./components/chat";
import { Dialog } from "@headlessui/react";
import video from "./public/video/windmill.mp4";
import video_mobile from "./public/video/windmill_mobile.mp4";

function App() {
  const [Modal, setModal] = useState(true);

  return (
    <div className={`w-full h-screen md:h-full bg-lala-home`}>
      <Route path="/name/:name">
        {(params) => (
          <>
            <video
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
            </video>
            <Dialog open={Modal} onClose={() => setModal(false)} className="">
              <div className="absolute inset-0 bg-black opacity-20 z-20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black-400 bg-green-200 opacity-30 z-20 w-[300px] md:w-[300px] h-[300px]"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black-400 z-20 w-full">
                <div className="flex flex-col justify-center items-center opacity-100">
                  <p className="text-white text-2xl font-chakra-petch mb-2">
                    The Wedding of
                  </p>
                  <p className="text-white text-5xl font-dancing-script mb-2">{`Denny & Lia`}</p>
                  <p className="text-white text-2xl font-chakra-petch ">to</p>
                  <p className="text-white text-xl font-indie-flower">
                    {decodeURIComponent(params.name)}
                  </p>
                </div>
                <div className="flex justify-center items-center mt-6">
                  <Link href="/">
                    <button className="px-4 py-2 text-white rounded-md border-white bg-coklat">
                      Open Invitation
                    </button>
                  </Link>
                </div>
              </div>
            </Dialog>
          </>
        )}
      </Route>
      <Route path="/" component={Home} />
      <Route path="/location" component={WeddingLocation} />
      <Route path="/wishes" component={Chat} />
    </div>
  );
}

export default App;
