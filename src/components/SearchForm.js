import React, { useState, useEffect } from "react";
import { suggestBook } from "../services/openai";
import "../searchForm.css";

const SearchForm = ({ placeholder, data }) => {
  const [suggestion, setSuggestion] = useState("");
  const [personality, setPersonality] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(personality);
  }, [personality]);

  return (
    <div>
      <h1 className="title">
        LiteraryGenie: Guiding You to Your Next Great Read
      </h1>
      <div className="Search">
        <div className="searchBox">
          <div className="shadow"></div>
          <input
            className="textarea"
            type="textarea"
            placeholder={placeholder}
            onChange={(e) => setPersonality(e.target.value)}
          />
          <button
            className="button"
            onClick={async () => {
              setLoading(true);
              const res = await suggestBook(personality);
              setSuggestion(res);
              setLoading(false);
            }}
          >
            Submit
          </button>
          <p className="suggested-book-title">Suggested Book is:</p>
          {loading ? (
            <div className="loading"></div>
          ) : (
            <p
              className="suggestion-textarea"
              >{suggestion}</p>
          )}
          <div className="search.icon"></div>
        </div>
        <div className="dataResult"></div>
      </div>
    </div>
  );
};

export default SearchForm;
