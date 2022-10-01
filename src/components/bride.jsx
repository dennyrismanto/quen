import denny from "/src/public/photos/denny.jpg";
import lia from "/src/public/photos/lia.jpg";
import { NavBar } from "./navbar";

export const Bride = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center pb-[100px]">
        <div className="flex flex-col justify-center items-center p-4 mt-14">
          <p className="mt-6 text-2xl font-bold mb-4">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p className="text-base md:text-2xl font-dancing-script">
            Assalamu`alaikum Warahmatullahi Wabarakatuh
          </p>
          <p className="text-base md:text-lg mb-4 font-chakra-petch font-medium text-center break-word">
            Maha Suci Allah yang telah menciptakan makhluk-Nya
            berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi
            pernikahan kami:
          </p>
          <img
            className="w-28 h-28 mb-4 md:w-48 md:h-56 rounded-full"
            src={lia}
            alt="side1"
          />
          <p className="text-2xl font-bold font-indie-flower mb-2">Amalia</p>
          <p className="text-base mb-2 font-chakra-petch font-medium">
            Putri dari
          </p>
          <p className="text-base mb-2 font-chakra-petch font-medium">{`Bapak Husin (Alm.) & Ibu Siti Zainab`}</p>
          <img
            className="w-28 h-28 mb-4 md:w-48 md:h-56 rounded-full "
            src={denny}
            alt="side1"
          />
          <p className="text-2xl font-bold font-indie-flower mb-2">
            Denny Rismanto
          </p>
          <p className="text-base mb-2 font-chakra-petch font-medium">
            Putra dari
          </p>
          <p className="text-base mb-2 font-chakra-petch font-medium">{`Bapak Triyono & Ibu Sariyem`}</p>
        </div>
      </div>
    </>
  );
};
