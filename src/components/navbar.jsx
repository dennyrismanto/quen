import { Link } from "wouter";
import button_home from "/src/public/photos/button_home.png";
import button_location from "/src/public/photos/button_location.png";
import button_wishes from "/src/public/photos/button_wishes.png";
import button_bride from "/src/public/photos/button_bride.png";
import button_galery from "/src/public/photos/button_galery.png";

export const NavBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 h-[60px] md:h-[60px] justify-center items-center z-30 bg-coklat">
      <div className="flex flex-row justify-center items-center h-full mx-2 md:mx-28">
        <div className="flex flex-row justify-center items-center">
          <div>
            <Link href="/">
              <button className="text-lg mr-2 sm:mr-10 hover:underline hover:underline-offset-2">
                <img className="h-[40px] w-[55px]" src={button_home} />
              </button>
            </Link>
          </div>
          <div>
            <Link href="/brides">
              <button className="text-lg mr-2 sm:mr-10 hover:underline hover:underline-offset-2">
                <img className="h-[40px] w-[55px]" src={button_bride} />
              </button>
            </Link>
          </div>
          <div>
            <Link href="/location">
              <button className="text-lg mr-2 sm:mr-10 hover:underline hover:underline-offset-2">
                <img className="h-[40px] w-[55px]" src={button_location} />
              </button>
            </Link>
          </div>
          <div>
            <Link href="/wishes">
              <button className="text-lg mr-2 sm:mr-10 hover:underline hover:underline-offset-2">
                <img className="h-[40px] w-[55px]" src={button_wishes} />
              </button>
            </Link>
          </div>
          <div>
            <Link href="/galery">
              <button className="text-lg sm:mr-10 hover:underline hover:underline-offset-2">
                <img className="h-[40px] w-[55px]" src={button_galery} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
