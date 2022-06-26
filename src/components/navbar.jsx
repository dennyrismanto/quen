import { Link } from "wouter";
export const NavBar = () => {
  return (
    <div className="fixed inset-x-0 top-0 h-[100px] md:h-[100px] bg-white z-30">
      <div className="flex flex-row justify-between items-center h-full mx-2 md:mx-28">
        <div className="flex justify-center items-center mr-6 md:mr-0">
          <p className="text-lg hover:underline hover:underline-offset-2">
            Icons
          </p>
        </div>
        <div className="flex flex-row">
          <Link href="/">
            <button className="text-lg mr-10 hover:underline hover:underline-offset-2">
              Home
            </button>
          </Link>
          <Link href="/wishes">
            <button className="text-lg mr-10 hover:underline hover:underline-offset-2">
              Wishes
            </button>
          </Link>
          <Link href="/location">
            <button className="text-lg mr-10 hover:underline hover:underline-offset-2">
              Location
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};
