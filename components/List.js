import ListItem from "./ListItem";

export default function List({ items }) {
  return (
    <ul className="game-list">
      {items.map((game, index) => (
        <ListItem item={game} key={game.id} index={index} />
      ))}
    </ul>
  );
}
