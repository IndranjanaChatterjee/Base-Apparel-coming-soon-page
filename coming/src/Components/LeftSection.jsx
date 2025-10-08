import React, { useState } from "react";
import head from "../../images/logo.svg";
import arrow from "../../images/icon-arrow.svg";
import error from "../../images/icon-error.svg";

export default function LeftSection() {
  const [err, setErr] = useState(true);

  return (
    <div className="h-screen w-full leftsection flex justify-center items-center ">
      <div className="flex flex-col justify-start items-start  w-[80%] h-[80%] my-24 ml-10">
        <div className="w-full flex justify-start items-center mb-24 ">
        <img src={head} alt="head" />
        </div>
        <div className="flex flex-col justify-start items-start uppercase text-7xl tracking-[1.5rem] mb-10">
        <h1 className="font-light text-[#f19a99]">We're </h1>
        <h1 className="w-[50%] font-semibold">coming soon</h1>
        </div>

        <p className="text-gray-400 text-[0.95rem] w-[30rem] font-semibold mb-10">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <div className="flex flex-col justfy-center items-start">
        <div className="w-[30rem] h-[3.5rem] border-solid border-2 border-gray-400  flex flex-row justify-between items-center pl-5  rounded-[2rem]">
          <input type="email" placeholder="Email Address" className="w-full border-none outline-0"/>
          <img src={error} alt="" className={`mr-[0.4rem] ${err?"hidden":"visible"}`}/>
          <button className="bg-black w-[8.5rem] h-[3.55rem] p-2 flex justify-center items-center btn rounded-[2rem] hover:cursor-pointer">
            <img src={arrow} alt="" />
          </button>
        </div>
        <p className={`pl-7 mt-1.5 text-red-600 ${err?"hidden":"visible"}`}>Please provide a valid email</p>
        </div>
      </div>
    </div>
  );
}
