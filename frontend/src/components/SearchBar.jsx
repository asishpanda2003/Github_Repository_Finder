import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch, loading }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term);
    }
  };

  const isActive = term.trim() && !loading;

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 p-4 bg-gray-800 rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-4 text-teal-400">
        Search Repositories
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Input field */}
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Enter repository name here!!"
          className="flex-grow p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
        />

        {/* Icon button */}
        <button
          type="submit"
          disabled={!isActive}
          className={`flex items-center justify-center p-3 rounded-md transition-all ${
            isActive
              ? "bg-teal-600 hover:bg-teal-500 text-white transform hover:scale-105 shadow-lg hover:shadow-teal-500/50"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          {loading ? (
            <span className="animate-spin">
              <FaSearch size={18} />
            </span>
          ) : (
            <FaSearch size={18} />
          )}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
