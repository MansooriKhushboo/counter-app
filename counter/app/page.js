'use client'
import { useState } from "react";

export default function Home() {

  const [numState, setNumstate] = useState(0)

  const decrease = () => { if (numState < 20) setNumstate(numState - 1) };
  const increase = () => { if (numState > 0) setNumstate(numState + 1) };

  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen text-[20px]">
      <h1 className="font-bold"> Stylish Counter</h1>
      <h1 className="font-bold text-[50px]">0</h1>
      <div className="flex flex-row gap-100">
        <button onClick={decrease}
          className="px-5 py-3 bg-orange-400  text-white rounded-full" >
          decrease
        </button>

        <button
          onClick={increase}
          className="px-5 py-3 bg-blue-400 text-white rounded-full">

          Increase
        </button>
      </div>
    </div>
  );
}
