import { useEffect, useState } from "react";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import firebase from "../../utility/firebase";

export const Chat = () => {
  const [comment, setComment] = useState("");

  const handleClick = (e) => {
    const db = getDatabase();
    const postListRef = ref(db, "Chat");
    const newPostRef = push(postListRef);
    set(newPostRef, {
      comment: comment,
      status: true,
    });
    setComment("");
  };
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <Teks />
        <input
          className="border-2"
          type="text"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button className="px-2 py-1 border" onClick={handleClick}>
          Send
        </button>
      </div>
    </div>
  );
};

const Teks = () => {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "Chat/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const todoList = [];
      for (let id in data) {
        todoList.push({ id, ...data[id] });
      }
      setTodoList(todoList);
    });
  }, []);
  return (
    <div className="w-[200px] h-[300px] overflow-y-scroll break-words">
      {todoList.length !== 0
        ? todoList.map((item, index) => (
            <div key={index}>
              <p className="text-lg">{item.comment}</p>
            </div>
          ))
        : "Please write this .."}
    </div>
  );
};
