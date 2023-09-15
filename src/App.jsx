import axios from "axios";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import React, { useState, useEffect } from "react";
import NewSongFrom from "./NewSongForm/NewSongForm";

function App() {
  const [song, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7137/api/Songs");
      console.log(response.data);
      console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetchSongs request: ", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);
  return (
    <div className="App">
      <Header />
      <MusicTable songs={song} />
      <NewSongFrom />
    </div>
  );
}

export default App;
