import ListItem from "./ListItem";

export default function List({ items, className, lazy }) {
  return (
    <ul className={className ? `game-list ${className}` : `game-list`}>
      {items.map((game, index) => (
        <ListItem
          item={game}
          key={game.slug}
          index={index}
          lazy={lazy ? true : index > 5 ? true : false}
        />
      ))}
    </ul>
  );
}
