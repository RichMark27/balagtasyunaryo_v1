import React, { useState } from "react";
import Florante_at_Laura from "../assets/images/Florante_at_Laura.png";
import SearchBar from "../components/SearchBar";
import ActivityCard from "../components/ActivityCard";
import BuodSideBar from "../components/BuodSideBar";
import AtoZSideBar from "../components/AtoZSideBar";

function Home() {
  const [closeBuod, setCloseBuod] = useState(false);
  const [closeAtoZ, setCloseAtoZ] = useState(false);

  const handleOpenAtoZ = () => {
    setCloseAtoZ(true);
    setCloseBuod(false);
  };

  const handleOpenBuod = () => {
    setCloseBuod(true);
    setCloseAtoZ(false);
  };
  return (
    <div className="bg-hero-bg bg-cover bg-no-repeat min-h-screen w-full">
      <section>
        <header className=" bg-[#863C18]/90 py-4 animate-fadeInTop relative z-20">
          <ul className="flex justify-center gap-8  padding-x mx-auto max-container">
            <li>
              <button
                className="nav-text cursor-pointer"
                onClick={() => handleOpenAtoZ()}
              >
                A to Z
              </button>
            </li>
            <li>
              <img src={Florante_at_Laura} height={160} width={160} alt="" />
            </li>
            <li>
              <button
                className="nav-text cursor-pointer"
                onClick={() => handleOpenBuod()}
              >
                Buod
              </button>
            </li>
          </ul>
          <SearchBar />
        </header>

        <div className="flex justify-start items-center mt-2 gap-4 overflow-x-auto padding-x animate-loopScroll relative z-0">
          <ActivityCard title={"Activity Title"} />
          <ActivityCard title={"Activity Title"} />
          <ActivityCard title={"Activity Title"} />
        </div>
        <BuodSideBar
          isCloseSideBar={closeBuod}
          setIsCloseSideBar={setCloseBuod}
        />
        <AtoZSideBar
          isCloseSideBar={closeAtoZ}
          setIsCloseSideBar={setCloseAtoZ}
        />
      </section>
    </div>
  );
}

export default Home;
