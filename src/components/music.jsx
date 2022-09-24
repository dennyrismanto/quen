import { useRef, useState, useEffect } from "react";

import song from "/src/public/audio/snoopdog.mp3";

export const Music = () => {
  const [play, setPlay] = useState(false);
  const myRef = useRef();

  const PlayMusic = () => {
    if (play === false) {
      myRef.current.pause();
    } else if (play === true) {
      myRef.current.play();
    }
  };

  return (
    <>
      <audio ref={myRef} autoPlay={true} loop>
        <source src={song} />
      </audio>
      <div className="absolute bottom-0 right-0 z-40">
        <button
          onClick={() => {
            setPlay(!play);
            PlayMusic(play);
          }}
        >
          {play === true ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M9.45 16.575 16.575 12 9.45 7.425ZM12 22.2q-2.125 0-3.988-.8-1.862-.8-3.237-2.175Q3.4 17.85 2.6 15.988 1.8 14.125 1.8 12t.8-3.988q.8-1.862 2.175-3.237Q6.15 3.4 8.012 2.6 9.875 1.8 12 1.8t3.988.8q1.862.8 3.237 2.175Q20.6 6.15 21.4 8.012q.8 1.863.8 3.988t-.8 3.988q-.8 1.862-2.175 3.237Q17.85 20.6 15.988 21.4q-1.863.8-3.988.8Zm0-2.275q3.325 0 5.625-2.3t2.3-5.625q0-3.325-2.3-5.625T12 4.075q-3.325 0-5.625 2.3T4.075 12q0 3.325 2.3 5.625t5.625 2.3ZM12 12Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M8.9 16.05H11v-8.1H8.9Zm4.1 0h2.1v-8.1H13Zm-1 6.15q-2.125 0-3.988-.8-1.862-.8-3.237-2.175Q3.4 17.85 2.6 15.988 1.8 14.125 1.8 12t.8-3.988q.8-1.862 2.175-3.237Q6.15 3.4 8.012 2.6 9.875 1.8 12 1.8t3.988.8q1.862.8 3.237 2.175Q20.6 6.15 21.4 8.012q.8 1.863.8 3.988t-.8 3.988q-.8 1.862-2.175 3.237Q17.85 20.6 15.988 21.4q-1.863.8-3.988.8Zm0-2.275q3.325 0 5.625-2.3t2.3-5.625q0-3.325-2.3-5.625T12 4.075q-3.325 0-5.625 2.3T4.075 12q0 3.325 2.3 5.625t5.625 2.3ZM12 12Z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};
