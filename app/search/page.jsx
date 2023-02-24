"use client";

import { useState, useEffect } from "react";

export default function searchForm({ placeholder }) {
  const [suggestion, setSuggestion] = useState("");
  const [personality, setPersonality] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(personality);
  }, [personality]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/suggestbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personality: personality,
      }),
    });
    const data = await res.json();
    setSuggestion(data.suggestion);
    setLoading(false);
  };

  return (
    <div>
      <h1>BookGenie</h1>
      <h2>Your Personalized Book Discovery Service</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className={"glowing-textbox"}
            type="textarea"
            placeholder="Describe your personality"
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
          />
          <button className="glowing-button" type="submit">
            Submit
          </button>
          <div className="suggestion-container">
            <h>Suggested Book is:</h>
            <div className="suggestion-content">
              {loading ? <div className="loading" /> : <p>{suggestion}</p>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}