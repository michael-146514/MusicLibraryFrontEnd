import React, { useState } from "react";

const NewSongFrom = ({ onNewSong }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [album, setAlbum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      artist,
      album,
      releaseDate,
      genre,
    };
    console.log(formData);
    onNewSong(formData);
  };

  return (
    <form className="new-form" onSubmit={handleSubmit}>
      <div>
        <h3>Title</h3>
        <div>
          <input
            className="form-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h3>Artist</h3>
        <div>
          <input
            className="form-name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h3>Album</h3>
        <div>
          <input
            className="form-name"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h3>Genre</h3>
        <div>
          <input
            className="form-name"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h3>Release Date</h3>
        <div>
          <input
            type="datetime-local"
            className="form-name"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button type="sumbit">Create Song</button>
      </div>
    </form>
  );
};

export default NewSongFrom;
