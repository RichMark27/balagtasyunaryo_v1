import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FloranteAtLaura from "../assets/icons/Florante_at_Laura(icon).svg";
import SearchBar from "./SearchBar";
import AtoZSideBar from "./AtoZSideBar";
import BuodSideBar from "./BuodSideBar";

function Navbar() {
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
    <header className="absolute left-0 top-0 fixed z-55 py-4 px-8 w-full bg-[#863C18]/90 animate-fadeInTop">
      <nav className="max-container mx-auto">
        <ul className="flex items-center gap-8">
          <li>
            <Link to={"/"}>
              <img src={FloranteAtLaura} width={50} height={50} alt="" />
            </Link>
          </li>
          <li>
            <button
              className="nav-text cursor-pointer"
              onClick={() => handleOpenAtoZ()}
            >
              A to Z
            </button>
          </li>
          <li>
            <button
              className="nav-text cursor-pointer"
              onClick={() => handleOpenBuod()}
            >
              Buod
            </button>
          </li>
          <li>
            <SearchBar />
          </li>
        </ul>
      </nav>
      <AtoZSideBar
        isCloseSideBar={closeAtoZ}
        setIsCloseSideBar={setCloseAtoZ}
      />
      <BuodSideBar
        isCloseSideBar={closeBuod}
        setIsCloseSideBar={setCloseBuod}
      />
    </header>
  );
}

export default Navbar;
