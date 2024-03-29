import { useEffect, useState } from "react";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import firebase from "../../utility/firebase";
import { NavBar } from "./navbar";
import { Dialog } from "@headlessui/react";
import { useModalChat } from "../modules/modal-chat.store";
import border from "/src/public/photos/border.png";
import frame_atas_image from "/src/public/photos/frame_atas.png";
import dot_chat from "/src/public/photos/dot_chat.png";
import bri from "/src/public/photos/bri.png";
import bca from "/src/public/photos/bca.png";

export const Chat = (props) => {
  const [namePerson, setNamePerson] = useState("");
  const [comment, setComment] = useState("");
  const shown = useModalChat((state) => state.shown);
  const toggleNav = useModalChat((state) => state.toggleNav);

  const handleClick = (e) => {
    if ((namePerson && comment) === "") {
      console.log("Please fill this");
    } else {
      const db = getDatabase();
      const postListRef = ref(db, "Wishes");
      const newPostRef = push(postListRef);
      set(newPostRef, {
        name: namePerson,
        comment: comment,
        status: true,
      });
      setComment("");
      setNamePerson("");
    }
  };
  const bri_copyText = () => {
    navigator.clipboard.writeText("117301002243535");
  };
  const bca_copyText = () => {
    /* Copy the text inside the text field */
    navigator.clipboard.writeText("7655252291");
  };
  return (
    <>
      <NavBar />
      <Modal modal={shown} />
      <div className="flex flex-col justify-center items-center pb-[100px]">
        <img className="w-1/2" src={border} alt="border_up" />
        <p className="text-4xl font-dancing-script mb-6">Quotes</p>
        <p className="text-center font-chakra-petch w-[300px] sm:w-1/2 mb-6 text-base md:text-lg">
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.
        </p>
        <img
          className="w-[200px] md:w-[300px] mb-4"
          src={frame_atas_image}
          alt="frame"
        />
        <p className="text-2xl md:text-4xl font-dancing-script mb-6">
          Send Your Wishes
        </p>
        <form className="flex flex-col w-[300px] md:w-1/2">
          <input
            className="border-2 px-2 py-1 mb-4 focus:outline-none font-chakra-petch"
            type="text"
            placeholder="Name"
            onChange={(e) => setNamePerson(e.target.value)}
            value={namePerson}
            required
          />
          <textarea
            className="border-2 px-2 py-1 mb-6 focus:outline-none font-chakra-petch"
            placeholder="Write your wishes . . ."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            required
          />
          <div className="flex justify-start">
            <button
              className="px-2 py-2 border-2 text-white font-bold bg-yellow-800 rounded-lg w-[100px] font-chakra-petch"
              onClick={handleClick}
            >
              Send
            </button>
          </div>
        </form>
        <p className="mt-10 text-2xl md:text-4xl font-dancing-script">
          Best of wish
        </p>
        <Teks />
        <p className="text-2xl md:text-4xl font-dancing-script my-6">
          We’re getting Married
        </p>
        <p className="text-justify font-chakra-petch w-[300px] sm:w-1/2  mb-6 text-base md:text-lg">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
          apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
          kepada kedua mempelai. Atas kehadiran serta doa restu, kami ucapkan
          terima kasih.
        </p>
        <p className="text-justify font-chakra-petch w-[300px] sm:w-1/2 mb-6 text-base md:text-lg font-bold">
          Untuk yang Berhalangan Hadir, dapat memberi kado secara cashless.
        </p>
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-[100px] md:w-[100px] mb-2"
              src={bca}
              alt="frame"
            />
            <p className="text-justify font-chakra-petch px-4  mb-2 text-base md:text-lg">
              7655252291
            </p>
            <p className="text-justify font-chakra-petch px-4  mb-2 text-base md:text-lg">
              a/n Amalia
            </p>
            <button
              className="px-4 py-2 bg-coklat rounded-lg border-2 border-white hover:bg-orange-400 focus:bg-orange-700"
              onClick={bca_copyText}
            >
              Copytext
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[90px] md:w-[90px] mb-2" src={bri} alt="frame" />
            <p className="text-justify font-chakra-petch px-4 mb-2 text-base md:text-lg">
              117301002243535
            </p>
            <p className="text-justify font-chakra-petch px-4 mb-2 text-base md:text-lg">
              a/n Denny Rismanto
            </p>
            <button
              className="px-4 py-2 bg-coklat rounded-lg border-2 border-white hover:bg-orange-400 focus:bg-orange-700"
              onClick={bri_copyText}
            >
              Copytext
            </button>
          </div>
        </div>

        <img className="w-1/2" src={border} alt="border_down" />
      </div>
    </>
  );
};

const Teks = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const listDataRef = ref(db, "Wishes/");
    onValue(listDataRef, (snapshot) => {
      const data = snapshot.val();
      const todoList = [];
      for (let id in data) {
        todoList.push({ id, ...data[id] });
      }
      setTodoList(todoList.reverse());
    });
  }, []);
  return (
    <div className="w-full md:w-1/2 h-[300px] overflow-y-scroll break-words px-4">
      {todoList.length !== 0
        ? todoList.map((item, index) => (
            <div
              className="flex flex-col justify-start items-start"
              key={index}
            >
              <div className="flex flex-row justify-center items-center">
                <img className="w-[20px] mr-[5px]" src={dot_chat} alt="dot" />
                <p className="text-lg font-chakra-petch font-bold">
                  {item.name}
                </p>
              </div>

              <p className="text-lg font-chakra-petch ml-[25px] ">
                {item.comment}
              </p>
            </div>
          ))
        : "Please write here .."}
    </div>
  );
};

const Modal = (props) => {
  const toggleNav = useModalChat((state) => state.toggleNav);
  return (
    <Dialog open={props.modal} onClose={() => toggleNav()}>
      <div className="absolute top-36 right-10 bg-black-400 p-4 z-30">
        <div className="opacity-100 p-4 border-2 w-[350px]">
          <p className="font-black text-red-500">
            Mohon untuk mengisi kolom name dan wishes sebelum mengirim pesan
          </p>
        </div>
        <div className="flex justify-center items-center"></div>
      </div>
    </Dialog>
  );
};
