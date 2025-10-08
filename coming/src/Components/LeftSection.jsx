import React, { useState } from "react";
import head from "../../images/logo.svg";
import arrow from "../../images/icon-arrow.svg";
import error from "../../images/icon-error.svg";
import validator from "validator";

export default function LeftSection() {
  const [err, setErr] = useState(true);
  const [email, setEmail] = useState("");

  const Change = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    console.log(email);
    if (validator.isEmail(email)) {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  return (
    <div className="h-screen w-full leftsection flex justify-center items-center">
      <div className="flex flex-col justify-start items-start  md:w-[80%] h-[80%] my-24 md:ml-28">
        <div className="w-full md:flex justify-start items-center mb-24 md:visible hidden">
          <img src={head} alt="head" />
        </div>
        <div className="flex flex-col md:justify-start md:items-start justify-center items-center uppercase text-4xl md:text-7xl tracking-[1.5rem] mb-10  w-full ">
          <h1 className="font-light text-[#f19a99] text-center md:text-left">
            We're{" "}
          </h1>
          <h1 className="md:w-[50%] font-semibold text-center md:text-left">
            coming soon
          </h1>
        </div>

        <p className="text-gray-400 text-[0.95rem] md:w-[30rem] font-semibold mb-10 text-center md:text-left mx-3.5 md:mx-0">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <div className="flex flex-col justfy-center  items-start px-1 mb-2.5 w-full">
          <div className="md:w-[30rem]  h-[3.5rem] border-solid border-2 border-gray-400  flex flex-row justify-between items-center pl-5  rounded-[2rem]">
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Email Address"
              className="w-full border-none outline-0"
              onChange={Change}
            />
            <img
              src={error}
              alt=""
              className={`mr-[0.4rem] ${err ? "hidden" : "visible"}`}
            />
            <button
              className="bg-black w-[8.5rem] h-[3.55rem] p-2 flex justify-center items-center btn rounded-[2rem] hover:cursor-pointer"
              onClick={validateEmail}
            >
              <img src={arrow} alt="" />
            </button>
          </div>
          <p
            className={`pl-7 mt-1.5 text-red-600 ${err ? "hidden" : "visible"}`}
          >
            Please provide a valid email
          </p>
        </div>

        <footer className="w-full mt-9 text-center">
          <p class="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://www.frontendmentor.io/profile/IndranjanaChatterjee">Indranjana Chatterjee</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}
