import React, { useState } from "react";

const Header = ({ LookUpName, Refresh }) => {
  const [title, setTitle] = useState("");

  const handleLookUpName = () => {
    LookUpName(title); // Pass the title value, not the function
  };

  const refreshTable = () => {
    Refresh();
  };

  return (
    <header>
      <h2>Music Library</h2>
      <h4>Look Up Name</h4>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleLookUpName}>Search</button>
      <div>
        <button onClick={refreshTable}>Refresh</button>
      </div>
    </header>
  );
};

export default Header;
