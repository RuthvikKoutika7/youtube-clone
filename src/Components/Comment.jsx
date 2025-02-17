import { RUTHVIK_ICON,  } from "./Utils/Constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-md bg-slate-50 p-2 rounded-lg my-2">
      <img className="w-12 h-12 rounded-3xl" alt="user" src={RUTHVIK_ICON} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
