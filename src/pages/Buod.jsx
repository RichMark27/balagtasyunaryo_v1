import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import supabase from "../supabse";
import { useParams } from "react-router-dom";

function Buod() {
  const [buodResult, setBuodResult] = useState([]);
  const { id } = useParams();

  const fetchBuod = async () => {
    const { data, error } = await supabase
      .from("buods")
      .select("*")
      .eq("_id", id)
      .single();

    if (error) {
      console.log("fetching buod Data failed");
    }

    setBuodResult(data);
  };

  useEffect(() => {
    fetchBuod();
  }, [id]);

  return (
    <div className="bg-hero-bg min-h-screen w-full bg-no-repeat bg-cover">
      <section className="pt-32">
        <Navbar />
        <div className="max-w-2xl bg-[#F4F4F4] p-8 rounded-md space-y-4 mx-auto">
          <h2>{buodResult.title}</h2>
          <p>{buodResult.buod}</p>
        </div>
      </section>
    </div>
  );
}

export default Buod;
