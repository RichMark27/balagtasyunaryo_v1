import React, { useState, useEffect } from "react";
import leftArrow from "../assets/icons/Vector.png";
import supabase from "../supabse";
import { Link } from "react-router-dom";

function AtoZSideBar({ isCloseSideBar, setIsCloseSideBar }) {
  const [groupedInfo, setGroupedInfo] = useState({});

  const fetchAtoZ = async () => {
    const { data, error } = await supabase.from("dictionaries").select("*");

    if (error) {
      console.log("error fetching Buods Data");
    }
    const grouped = data.reduce((acc, item) => {
      const firstLetter = item.title[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(item);
      return acc;
    }, {});
    setGroupedInfo(grouped);
  };

  useEffect(() => {
    fetchAtoZ();
  }, []);

  return (
    <aside
      className={`bg-[#A5592F] ${
        isCloseSideBar ? "block" : "hidden"
      } w-xs h-screen  absolute left-0 top-0 z-50 px-2 overflow-auto`}
    >
      <div className="relative w-full p-2 flex justify-end items-center">
        <div
          className="flex justify-center items-center h-8 w-8 rounded-full bg-[#A6440F] cursor-pointer"
          onClick={() => setIsCloseSideBar(false)}
        >
          <img src={leftArrow} height={16} width={10} alt="left arrow" />
        </div>
      </div>
      <div>
        {Object.keys(groupedInfo)
          .sort()
          .map((letter) => (
            <div key={letter} className="px-2">
              <h2 className="text-3xl font-bold text-white pt-2">{letter}</h2>
              <ul>
                {groupedInfo[letter].map((item) => (
                  <Link
                    key={item._id}
                    to={`/dictionary/${item._id}`}
                    onClick={() => setIsCloseSideBar(false)}
                  >
                    <li className="text-lg text-white font-semibold py-2 pl-2 border-b-1 border-slate-300 hover:bg-amber-900 cursor-pointer">
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </aside>
  );
}

export default AtoZSideBar;
