import ListItem from "./ListItem";

export default function List({ items, className }) {
  return (
    <ul className={className ? className : `game-list`}>
      {items.map((game, index) => (
        <ListItem item={game} key={game.slug} index={index} />
      ))}
    </ul>
  );
}
