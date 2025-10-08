import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LeftSection from "./Components/LeftSection";
import RightSection from "./Components/RightSection";
import head from "../images/logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center w-screen max-h-screen">
        <div className="w-full flex justify-start items-center pl-8 mt-4 mb-5 md:hidden visible">
                <img src={head} alt="head" />
                </div>
        {/* RightSection will appear first on small screens, second on md+ */}
        <div className="w-full md:w-[32%] order-1 md:order-2 h-full bg-red-500">
          <RightSection />
        </div>

        {/* LeftSection will appear second on small screens, first on md+ */}
        <div className="w-full md:w-[68%] order-2 md:order-1">
          <LeftSection />
        </div>
      </div>
    </>
  );
}

export default App;
