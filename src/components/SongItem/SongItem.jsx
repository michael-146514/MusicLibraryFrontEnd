const SongItem = ({ title, artist, album, genre, releaseDate }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{album}</td>
      <td>{genre}</td>
      <td>{releaseDate}</td>
    </tr>
  );
};

export default SongItem;
