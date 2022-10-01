import { NavBar } from "./navbar";
import g1 from "/src/public/photos/g1.jpg";
import g2 from "/src/public/photos/g2.jpg";
import g3 from "/src/public/photos/g3.jpg";
import g4 from "/src/public/photos/g4.jpg";
import g5 from "/src/public/photos/g5.jpg";
import g6 from "/src/public/photos/g6.jpg";

export const Galery = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center pb-[100px]">
        <p className="font-dancing-script text-4xl my-6">
          Gallery of Our Moment
        </p>
        <div className="flex flex-row gap-[10px] mb-6">
          <div className="bg-black w-[165px] h-[236px] md:w-[300px] md:h-[427px] rounded-lg shadow-lg">
            <img
              className="bg-black w-[165px] h-[236px] md:w-[300px] md:h-[427px] rounded-lg shadow-lg animate__animated animate__fadeIn"
              src={g1}
              alt="side1"
            />
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <div className="bg-black w-[165px] h-[113px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg">
              <img
                className="w-[165px] h-[113px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg animate__animated animate__fadeIn"
                src={g2}
                alt="side1"
              />
            </div>
            <div className="bg-black w-[165px] h-[113px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg">
              <img
                className="w-[165px] h-[113px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg animate__animated animate__fadeIn"
                src={g3}
                alt="side1"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[10px]">
          <div className="flex flex-col gap-y-[10px]">
            <div className="bg-black w-[165px] h-[113px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg">
              <img
                className="w-[165px] h-[113px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg animate__animated animate__fadeIn"
                src={g4}
                alt="side1"
              />
            </div>
            <div className="bg-black w-[165px] h-[113px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg">
              <img
                className="w-[165px] h-[113px] md:w-[300px] md:h-[208.5px] rounded-lg shadow-lg animate__animated animate__fadeIn"
                src={g5}
                alt="side1"
              />
            </div>
          </div>
          <div className="bg-black w-[165px] h-[236px] md:w-[300px] md:h-[427px] rounded-lg shadow-lg">
            <img
              className="bg-black w-[165px] h-[236px] md:w-[300px] md:h-[427px] rounded-lg shadow-lg animate__animated animate__fadeIn"
              src={g6}
              alt="side1"
            />
          </div>
        </div>
      </div>
    </>
  );
};
