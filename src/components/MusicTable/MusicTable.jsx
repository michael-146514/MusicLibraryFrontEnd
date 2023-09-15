import SongItem from "../SongItem/SongItem";

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
    />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>ReleaseDate</th>
        </tr>
      </thead>
      <tbody>{songItems}</tbody>
    </table>
  );
};

export default MusicTable;
