import Iframe from "react-iframe";
import denny from "/src/public/photos/denny.jpg";
import lia from "/src/public/photos/lia.jpg";

export const WeddingLocation = () => {
  // Set the date we're counting down to
  var countDownDate = new Date("Jun 22, 2022 00:01:15").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    // document.getElementById("countTimer").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countTimer").innerHTML = "EXPIRED";
    }
  }, 1000);
  return (
    <div className="flex flex-col justify-center items-center mb-12 md:mb-12 ">
      <div className="flex flex-col justify-center items-center p-4">
        <p className="mt-6 text-2xl font-bold mb-4">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>
        <p className="text-base md:text-2xl font-dancing-script">
          Assalamu`alaikum Warahmatullahi Wabarakatuh
        </p>
        <p className="text-base md:text-lg mb-4 font-chakra-petch font-medium text-center break-word">
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
          Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami:
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
      <p className="font-dancing-script text-4xl md:text-6xl mb-6">
        Our Happy Day
      </p>
      <div className="flex flex-col-reverse md:flex md:flex-row justify-center items-center mb-6">
        <div className="flex flex-col justify-center items-center bg-white border-2 p-4  mr-0 md:mr-6 md:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f5c993"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-calendar"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <p className="font-indie-flower font-bold text-xl">Resepsi Nikah</p>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="font-chakra-petch font-medium mr-2 md:mr-6">
                Hari,Tanggal
              </p>
              <p className="font-chakra-petch font-medium">
                : Minggu, dd/MM/YYYY
              </p>
            </div>
            <div className="flex flex-row">
              <p className="font-chakra-petch font-medium mr-14 md:mr-20">
                Pukul
              </p>
              <p className="font-chakra-petch font-medium md:-ml-2">
                : 08:00 WIB
              </p>
            </div>
            <div className="flex flex-row">
              <p className="font-chakra-petch font-medium mr-12 md:mr-16">
                Lokasi
              </p>
              <p className="font-chakra-petch font-medium break-words">
                : Jl. Pesantren RT:04 RW:08 No.4, Kreo Selatan, Larangan,
                Tangerang
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white border-2 p-4 md:w-1/2 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f5c993"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-calendar"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <p className="font-indie-flower font-bold text-xl">Akad Nikah</p>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="font-chakra-petch font-medium mr-2 md:mr-6">
                Hari,Tanggal
              </p>
              <p className="font-chakra-petch font-medium">
                : Minggu, dd/MM/YYYY
              </p>
            </div>
            <div className="flex flex-row">
              <p className="font-chakra-petch font-medium mr-14 md:mr-20">
                Pukul
              </p>
              <p className="font-chakra-petch font-medium md:-ml-2">
                : 08:00 WIB
              </p>
            </div>
            <div className="flex flex-row">
              <p className="font-chakra-petch font-medium mr-12 md:mr-16">
                Lokasi
              </p>
              <p className="font-chakra-petch font-medium break-words">
                : Jl. Pesantren RT:04 RW:08 No.4, Kreo Selatan, Larangan,
                Tangerang
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mb-4 ml-2">
        <p
          className="flex justify-center items-center rounded-lg w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-coklat mr-1 font-chakra-petch font-medium"
          id="day"
        ></p>
        <p className="flex justify-center items-center md:w-[50px] md:h-[50px] mr-2 font-chakra-petch font-medium">
          Hari
        </p>
        <p
          className="flex justify-center items-center rounded-lg w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-coklat mr-1 font-chakra-petch font-medium"
          id="hour"
        ></p>
        <p className="flex justify-center items-center md:w-[50px] md:h-[50px] mr-2 font-chakra-petch font-medium">
          Jam
        </p>
        <p
          className="flex justify-center items-center rounded-lg w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-coklat mr-1 font-chakra-petch font-medium"
          id="minute"
        ></p>
        <p className="flex justify-center items-center md:w-[50px] md:h-[50px] mr-2 font-chakra-petch font-medium">
          Menit
        </p>
        <p
          className="flex justify-center items-center rounded-lg w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-coklat mr-1 font-chakra-petch font-medium"
          id="second"
        ></p>
        <p className="flex justify-center items-center  md:w-[50px] md:h-[50px] mr-2 font-chakra-petch font-medium">
          Detik
        </p>
      </div>
      <Iframe
        className="mb-4 w-full md:w-1/2 h-[300px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1548568325748!2d106.73884841471684!3d-6.243312995480808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1cfeb2af1ab%3A0xa00be0c4de258c4a!2sRuko%20Husin!5e0!3m2!1sen!2sid!4v1635550343526!5m2!1sen!2sid"
        allowfullscreen=""
        loading="lazy"
      />
      <a href="https://goo.gl/maps/NsogJPvUepYkiakw7" target="_blank">
        <button className="border-black bg-coklat border px-2 py-1 rounded-lg mb-2">
          Open Map
        </button>
      </a>
    </div>
  );
};
