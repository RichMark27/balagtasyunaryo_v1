import React, { useState, useEffect } from "react";
import leftArrow from "../assets/icons/Vector.png";
import supabase from "../supabse";
import { Link } from "react-router-dom";

function BuodSideBar({ isCloseSideBar, setIsCloseSideBar }) {
  const [buodsData, setBuodsData] = useState([]);

  const fetchBuods = async () => {
    const { data, error } = await supabase
      .from("buods")
      .select("*")
      .order("_id", { ascending: true });

    if (error) {
      console.log("error fetching Buods Data");
    }

    setBuodsData(data);
  };
  useEffect(() => {
    fetchBuods();
  }, []);

  return (
    <aside
      className={`bg-[#A5592F] ${
        isCloseSideBar ? "block" : "hidden"
      } w-xs h-screen  absolute left-0 top-0 z-50 px-2 overflow-auto animate-fadeSideBar`}
    >
      <div className="w-full p-2 flex justify-end items-center">
        <div
          className="flex justify-center items-center h-8 w-8 rounded-full bg-[#A6440F] cursor-pointer"
          onClick={() => setIsCloseSideBar(false)}
        >
          <img src={leftArrow} height={16} width={10} alt="left arrow" />
        </div>
      </div>
      <div>
        {buodsData.map((data) => (
          <Link
            key={data._id}
            to={`/buod/${data._id}`}
            onClick={() => setIsCloseSideBar(false)}
          >
            <p className="text-lg text-white font-semibold py-2 pl-2 border-b-1 border-slate-300 hover:bg-amber-900">
              {data.title}
            </p>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default BuodSideBar;
