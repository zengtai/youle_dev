import ListItem from "./ListItem";

export default function List({ items }) {
  return (
    <ul className="grid grid-cols-3 gap-4 xl:grid-cols-9">
      {items.map((game) => (
        <ListItem item={game} key={game.id} />
      ))}
    </ul>
  );
}
