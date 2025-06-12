import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import supabase from "../supabse";

function Dictionary() {
  const { id } = useParams();
  const [result, setResult] = useState([]);

  const fetchDictionary = async () => {
    const { data, error } = await supabase
      .from("dictionaries")
      .select("*")
      .eq("_id", id)
      .single();

    if (error) {
      console.log("error Fetching dictionary");
    }

    setResult(data);
  };

  useEffect(() => {
    fetchDictionary();
  }, [id]);

  return (
    <div className="bg-hero-bg min-h-screen w-full bg-no-repeat bg-cover pb-8">
      <Navbar />
      <section className="max-container pt-30 mx-auto padding-x">
        <div>
          <img
            className=" object-contain max-h-[450px] rounded-md my-2 mx-auto"
            src={result.img_URL}
            alt=""
          />
        </div>
        <article className="flex flex-col gap-8 bg-[#F4F4F4] rounded-md px-8 pb-8">
          <h1 className="mx-auto">{result.title}</h1>

          <div className="flex flex-wrap justify-between">
            <div className="w-[500px] space-y-2">
              <h2>Denotasyon</h2>
              <p>{result.denotasyon}</p>
            </div>
            <div className="w-[500px] space-y-2">
              <h2>Konotasyon</h2>
              <p>{result.konotasyon}</p>
            </div>
          </div>
          <h2>Pangungusap</h2>
          <p>{result.pangungusap}</p>
        </article>
      </section>
    </div>
  );
}

export default Dictionary;
