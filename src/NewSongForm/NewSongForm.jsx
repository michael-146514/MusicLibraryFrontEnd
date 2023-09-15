import React, { useState } from "react";

const NewSongFrom = ({ NewSong }) => {
  return (
    <form>
      <div>
        <h3>Title</h3>
        <div>
          <input />
        </div>
      </div>
      <div>
        <h3>Artist</h3>
        <div>
          <input />
        </div>
      </div>
      <div>
        <h3>Genre</h3>
        <div>
          <input />
        </div>
      </div>
      <div>
        <h3>Release Date</h3>
        <div>
          <input />
        </div>
      </div>
      <div>
        <button>Create Song</button>
      </div>
    </form>
  );
};

export default NewSongFrom;
