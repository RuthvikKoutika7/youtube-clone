import { useMemo, useState } from "react";
import { findPrime,  } from "./Utils/helper";

const Demo = () => {
  const [num, setNum] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  const prime = useMemo(()=> findPrime(num),[num]) ;
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (darkTheme && "bg-slate-600 text-white")
      }
    >
      <div>
        <button
          className="rounded-xl m-3 p-2 font-bold text-xl border border-black"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input className={"w-[20rem] border border-black p-2 m-2 "+(darkTheme && "border border-red-500 text-black")}
        value={num}
        type="number"
        onChange={(e)=> setNum(e.target.value)}
        />
        <h1 className="font-bold text-2xl ">nth Prime : {prime}</h1>
        
      </div>
    </div>
  );
};

export default Demo;
