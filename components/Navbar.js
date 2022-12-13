import Link from "next/link";
import { useState } from "react";
import {
  ActionIcon,
  AdventureIcon,
  ArcadeIcon,
  CasualIcon,
  CategoryIcon,
  CloseIcon,
  DefenseIcon,
  GirlIcon,
  HomeIcon,
  IoIcon,
  Match3Icon,
  MenuIcon,
  PuzzleIcon,
  RacingIcon,
  ShootingIcon,
  SimulationIcon,
  SportsIcon,
  StrategyIcon,
} from "./Icons";

export default function Navbar({ items }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function getIcon(name, className) {
    switch (name) {
      case `Action`:
        return ActionIcon(className);
      case `Casual`:
        return CasualIcon(className);
      case `Defense`:
        return DefenseIcon(className);
      case `Puzzle`:
        return PuzzleIcon(className);
      case `Shooting`:
        return ShootingIcon(className);
      case `Sports`:
        return SportsIcon(className);
      case `Simulation`:
        return SimulationIcon(className);
      case `Strategy`:
        return StrategyIcon(className);
      case `Racing`:
        return RacingIcon(className);
      case `Arcade`:
        return ArcadeIcon(className);
      case `Adventure`:
        return AdventureIcon(className);
      case `IO`:
        return IoIcon(className);
      case `Girl`:
        return GirlIcon(className);
      case `Match 3`:
        return Match3Icon(className);
      default:
        return ActionIcon(className);
    }
  }
  return (
    <>
      <header className="site-header">
        <nav className="navbar">
          <Link href={`/`}>
            <a className="navbar-brand">{HomeIcon(`icon-home`)}</a>
          </Link>
          <button onClick={toggle} className="navbar-toggler">
            {isMenuOpen ? CloseIcon(`icon-close`) : MenuIcon(`icon-menu`)}
          </button>
          <ul
            className={`${
              isMenuOpen ? `grid grid-cols-2 gap-2 xl:flex` : `hidden xl:flex`
            } navbar-nav`}
          >
            <li>
              <Link href={`/all`}>
                <a className="flex gap-1">
                  <span>{CategoryIcon(`text-blue-500`)}</span>All
                </a>
              </Link>
            </li>
            {items.map((item) => (
              <li key={item.slug}>
                <Link href={`/category/${item.slug}`}>
                  <a className="flex items-center gap-1">
                    <span>{getIcon(`${item.name}`)}</span>
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
