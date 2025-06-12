import React, { useState } from "react";
import SearchIcon from "../assets/icons/Search.svg";
import supabase from "../supabse";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (value) => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("dictionaries")
      .select("*")
      .range(0, 4);

    if (error) {
      console.log("fetching failed", error);
    }

    const filteredData = data.filter((dictionary) =>
      dictionary?.title?.toLowerCase().includes(value.toLowerCase())
    );

    if (value.trim() && filteredData.length === 0) {
      setError("No matching results found.");
    } else {
      setError("");
    }
    setSearchResult(filteredData);
    setIsLoading(false);
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    fetchData(e.target.value);
  };

  const handleOnBlur = () => {
    setTimeout(() => {
      setSearchResult([]);
    }, 1000);
  };
  return (
    <div className="relative z-50 mx-auto mt-2 max-w-[200px] sm:max-w-md flex justify-start items-center flex-row bg-[#CAD5E2] p-2 rounded-md">
      <img className="w-[25px] h-[25px]" src={SearchIcon} alt="Search Icon" />
      <input
        className="pl-1 outline-none w-full"
        type="text"
        placeholder="Magsaliksik..."
        value={searchTerm}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />

      <div className="absolute z-50 left-0 bg-[#CAD5E2] w-full overflow-hidden top-9 rounded-b-lg">
        {isLoading ? (
          <div className="py-4 flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <div>
            {error && <p className="text-red-500 p-2">{error}</p>}
            {searchResult.map((dictionary) => (
              <div key={dictionary._id} className="flex px-2 pb-2">
                <Link className="w-full" to={`/dictionary/${dictionary._id}`}>
                  <p className="hover:bg-slate-500 hover:text-white cursor-pointer pl-2 py-1 rounded-xs">
                    {dictionary.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
