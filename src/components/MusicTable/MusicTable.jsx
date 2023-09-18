import SongItem from "../SongItem/SongItem";
import React, { useState } from "react";
import axios from "axios";

const MusicTable = ({ songs = [] }) => {
  const songItems = songs.map((song, i) => (
    <SongItem
      key={song.id}
      title={song.title}
      artist={song.artist}
      album={song.album}
      genre={song.genre}
      releaseDate={song.releaseDate}
      index={i}
      onDelete={() => handleDeleteSong(song.id)}
    />
  ));

  const [songList, setSongList] = useState(songs);

  const handleDeleteSong = async (songId) => {
    try {
      await axios.delete(`https://localhost:7137/api/Songs/${songId}`);

      setSongList((prevSongs) =>
        prevSongs.filter((song) => song.id !== songId)
      );
    } catch (error) {
      console.error("Error deleting song: ", error);
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>ReleaseDate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{songItems}</tbody>
    </table>
  );
};

export default MusicTable;
