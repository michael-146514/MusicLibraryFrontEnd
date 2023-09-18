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

  const handleNewSong = async (newSong) => {
    try {
      const response = await axios.post(
        "https://localhost:7137/api/Songs",
        newSong
      );

      const updatedSongs = response.data;

      setSongs([...song, updatedSongs]);
    } catch (error) {
      console.warn("Error in handleNewSong request: ", error);
    }
  };

  const handleTitleLookUp = async (title) => {
    try {
      const response = await axios.get(
        `https://localhost:7137/api/Songs?title=${encodeURIComponent(title)}`
      );

      const songData = response.data;
      setSongs(songData);

      console.log("Song details:", songData);
    } catch (error) {
      console.error("Error during title lookup:", error);
    }
  };
  return (
    <div className="App">
      <Header LookUpName={handleTitleLookUp} Refresh={fetchSongs} />
      <MusicTable songs={song} />
      <NewSongFrom onNewSong={handleNewSong} />
    </div>
  );
}

export default App;
