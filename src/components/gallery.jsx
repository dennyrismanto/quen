import { NavBar } from "./navbar";
import lia from "/src/public/photos/lia.jpg";
import dua from "/src/public/photos/2.jpg";

export const Galery = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center pb-[100px]">
        <p className="font-dancing-script text-4xl my-6">Gallery a moments</p>
        <div className="flex flex-row gap-[10px] mb-6">
          <div className="bg-black w-[182px] h-[259px] md:w-[300px] md:h-[427px] rounded-lg shadow-lg">
            <img
              className="bg-black w-[182px] h-[259px] md:w-[300px] md:h-[427px] rounded-lg shadow-lg"
              src={lia}
              alt="side1"
            />
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <div className="bg-black w-[182px] h-[124px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg">
              <img
                className="w-[182px] h-[124px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg"
                src={dua}
                alt="side1"
              />
            </div>
            <div className="bg-black w-[182px] h-[124px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg"></div>
          </div>
        </div>
        <div className="flex flex-row gap-[10px] mb-6">
          <div className="flex flex-col gap-y-[10px]">
            <div className="bg-black w-[182px] h-[124px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg"></div>
            <div className="bg-black w-[182px] h-[124px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg"></div>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <div className="bg-black w-[182px] h-[124px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg"></div>
            <div className="bg-black w-[182px] h-[124px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg"></div>
          </div>
        </div>
        <div className="flex flex-row gap-[10px]">
          <div className="flex flex-col gap-y-[10px]">
            <div className="bg-black w-[182px] h-[124px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg"></div>
            <div className="bg-black w-[182px] h-[124px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg"></div>
          </div>
          <div className="bg-black w-[182px] h-[259px] md:w-[300px] md:h-[427px] rounded-lg shadow-lg">
            <img
              className="bg-black w-[182px] h-[259px] md:w-[300px] md:h-[427px] rounded-lg shadow-lg"
              src={lia}
              alt="side1"
            />
          </div>
        </div>
      </div>
    </>
  );
};
