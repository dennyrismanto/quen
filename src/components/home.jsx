import side_atas_image from "/src/public/photos/side_atas.png";
import side_bawah_image from "/src/public/photos/side_bawah.png";
import frame_atas_image from "/src/public/photos/frame_atas.png";
import frame_bawah_image from "/src/public/photos/frame_bawah.png";

export const Home = () => {
  return (
    <div>
      <div class="flex justify-start items-start">
        <img
          class="w-28 h-28 md:w-56 md:h-56 md:rounded-none rounded-none"
          src={side_atas_image}
          alt="side1"
        ></img>
      </div>
      <div class="flex flex-col justify-center items-center">
        <p class="text-yellow-600 text-xl p-2 -mt-10 md:text-4xl md:-mt-48 md:pb-6">
          The Wedding
        </p>
        <p class="text-yellow-600 text-lg md:text-xl">Invitation</p>
        <img
          class="mt-6 mb-6 h-20 w-52 md:w-1/4 md:h-3/4"
          src={frame_atas_image}
          alt="frame"
        />
        <p class="text-yellow-600 m-2 md:p-0 text-xl md:text-4xl">
          {`Lia & Denny`}
        </p>
        <img
          class="mt-6 mb-6 h-20 w-52 md:w-1/4 md:h-3/4"
          src={frame_bawah_image}
          alt="frame"
        />
        <p class="text-yellow-600 text-lg pt-2 md:text-xl md:pt-6">
          Save the date
        </p>
        <p class="text-yellow-600 text-lg pt-2 md:text-xl md:pt-6">
          | Tanggal masih rahasia Allah |
        </p>
        <p class="text-yellow-600 text-lg pt-2 md:text-xl md:pt-6">
          Kota Tangerang
        </p>
      </div>
      <div class="flex justify-end items-end">
        <img
          class="w-32 h-32 -mt-9 md:w-56 md:h-56 md:-mt-60 md:rounded-none rounded-none"
          src={side_bawah_image}
          alt="side1"
        />
      </div>
    </div>
  );
};
