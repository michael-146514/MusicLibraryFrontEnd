const SongItem = ({ title, artist, album, genre, releaseDate, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <tr>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{album}</td>
      <td>{genre}</td>
      <td>{releaseDate}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default SongItem;
