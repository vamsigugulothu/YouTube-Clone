import React, { useEffect, useState } from "react";
import { URL } from "../constants/ApiContants";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);

  useEffect(() => {
    fetchSuggestions();
  }, [searchQuery]);

  const fetchSuggestions = async () => {
    try {
      const data = await fetch(URL.searchSuggestions + searchQuery);
      const json = await data.json();
      console.log("json", json);
      setSuggestion(json[1]);
    } catch (e) {
      console.log("Failed to fetch suggestions", e);
    }
  };

  return (
    <div>
      <div className="w-3/5 mx-auto flex items-center">
        <input
          type="text"
          className="border border-gray-400 flex-grow px-4 py-1 rounded-l-full"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 py-1   px-4 rounded-r-full">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
