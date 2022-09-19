import Link from "next/link";
import {
  // HomeIcon,
  // MenuIcon,
  // CloseIcon,
  // CategoryIcon,
  ActionIcon,
  CasualIcon,
  DefenseIcon,
  PuzzleIcon,
  ShootingIcon,
  SimulationIcon,
  SportsIcon,
  StrategyIcon,
  RacingIcon,
  ArcadeIcon,
  AdventureIcon,
  IoIcon,
  GirlIcon,
  Match3Icon,
  IconHome,
  IconHistory,
  IconCategory,
  IconInformation,
} from "./Icons";
import { useState } from "react";

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
      <nav className="site-header fixed bottom-0 z-50 w-full bg-lime-400">
        <div className="container mx-auto pt-2 pb-8 text-xs">
          <ul className="mx-4 grid grid-cols-4 gap-x-4 text-center md:mx-0">
            <li>
              <Link
                activeClassName="active"
                className="flex flex-col items-center"
                href={`/`}
              >
                <a>
                  <span className="h-6 overflow-hidden">
                    <span className="icon relative">
                      <IconHome />
                      <IconHome current />
                    </span>
                  </span>
                  <span>Home</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active"
                className="flex flex-col items-center"
                href={`/category/`}
              >
                <a>
                  <span className="h-6 overflow-hidden">
                    <span className="icon relative">
                      <IconCategory />
                      <IconCategory current />
                    </span>
                  </span>
                  <span>Category</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active"
                className="flex flex-col items-center"
                href={`/recent`}
              >
                <a>
                  <span className="h-6 overflow-hidden">
                    <span className="icon relative">
                      <IconHistory />
                      <IconHistory current />
                    </span>
                  </span>
                  <span>Recent</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active"
                className="flex flex-col items-center"
                href={`/about`}
              >
                <a>
                  <span className="h-6 overflow-hidden">
                    <span className="icon relative">
                      <IconInformation />
                      <IconInformation current />
                    </span>
                  </span>
                  <span>About</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
