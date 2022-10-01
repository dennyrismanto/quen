import { Link } from "wouter";
import side_atas_image from "/src/public/photos/side_atas.png";
import side_bawah_image from "/src/public/photos/side_bawah.png";
import frame_atas_image from "/src/public/photos/frame_atas.png";
import frame_bawah_image from "/src/public/photos/frame_bawah.png";
import { NavBar } from "./navbar";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="pb-[100px]">
        <div className="absolute left-0 top-12 md:left-0 md:top-0">
          <img
            className="w-28 h-28 md:w-56 md:h-56 md:rounded-none rounded-none"
            src={side_atas_image}
            alt="side1"
          ></img>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-yellow-600 mt-28 text-3xl md:text-6xl font-indie-flower font-bold animate__animated animate__fadeInUp">
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
          <p className="text-yellow-600 m-2 md:p-0 text-4xl md:text-6xl font-dancing-script font-bold animate__animated animate__fadeInUp">
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
        <div className="absolute bottom-0 right-0">
          <img
            className="w-32 h-32 md:w-56 md:h-56 md:rounded-none rounded-none"
            src={side_bawah_image}
            alt="side1"
          />
        </div>
      </div>
    </>
  );
};
