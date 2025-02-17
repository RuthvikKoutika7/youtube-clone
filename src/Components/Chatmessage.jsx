import { OGGY_ICON, RUTHVIK_ICON } from "./Utils/Constants";

const Chatmessage = ({name,message})=>{
    return(
        <div className="flex items-center shadow-sm p-2">  
            <img alt="icon" src={OGGY_ICON} className="w-10 h-10 rounded-full pl-1 " />
            <span className="font-bold text-xl px-2">{name}</span>
            <span>{message}</span>
        </div>
    );
};

export default Chatmessage;