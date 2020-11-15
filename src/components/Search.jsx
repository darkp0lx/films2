import React from "react";
import { useState } from "react";
const Search = ({ setInput }) => {
  const [text, setText] = useState("");

  if(text!== ""){
    setInput(text)
  }
  return (
    <div className="search">
      <input
        type="text"
        placeholder="que buscas..."
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
    </div>
  );
};

export default Search;
