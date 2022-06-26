import { useEffect, useState } from "react";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import firebase from "../../utility/firebase";
import { NavBar } from "./navbar";
import { Dialog } from "@headlessui/react";
import { useModalChat } from "../modules/modal-chat.store";

export const Chat = (props) => {
  const [namePerson, setNamePerson] = useState("");
  const [comment, setComment] = useState("");
  const shown = useModalChat((state) => state.shown);
  const toggleNav = useModalChat((state) => state.toggleNav);

  const handleClick = (e) => {
    if ((namePerson && comment) === "") {
      toggleNav();
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
  return (
    <>
      <NavBar />
      <Modal modal={shown} />
      <div className="flex flex-col justify-center items-center mt-20">
        <p className="text-4xl md:text-6xl font-dancing-script my-6">
          Wedding Wishes
        </p>
        <div className="flex flex-col">
          <input
            className="border-2 w-[250px] md:w-[450px] px-2 py-1 mb-4"
            type="text"
            placeholder="Name"
            onChange={(e) => setNamePerson(e.target.value)}
            value={namePerson}
          />
          <textarea
            className="border-2 w-[250px] md:w-[450px] px-2 py-1 mb-2"
            placeholder="Write your wishes . . ."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <div className="flex justify-end">
            <button
              className="px-2 py-1 border-2 border-black rounded-lg w-[100px]"
              onClick={handleClick}
            >
              Send
            </button>
          </div>
        </div>
        <p className="mt-10 text-2xl md:text-4xl font-indie-flower">
          Best of wish
        </p>
        <Teks />
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
    <div className="w-full md:w-1/2 h-[300px] overflow-y-scroll break-words">
      {todoList.length !== 0
        ? todoList.map((item, index) => (
            <div key={index}>
              <p className="text-lg font-chakra-petch">{item.name}</p>
              <p className="text-lg font-chakra-petch">{item.comment}</p>
            </div>
          ))
        : "Please write this .."}
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
