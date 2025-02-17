import { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "./Utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "./Utils/helper";

const Livechat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(20) + "🙋‍♂️",
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] border-black bg-slate-100 rounded-xl overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <Chatmessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full border border-black p-2 ml-2"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessages({
              name: "Ruthvik Koutika",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="border border-blue-400 w-[19rem] px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-blue-200 rounded-full">send</button>
      </form>
    </>
  );
};

export default Livechat;
