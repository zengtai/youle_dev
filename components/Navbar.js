import Link from "next/link";
import { IconHome, IconHistory, IconCategory, IconInformation } from "./Icons";
import { useState } from "react";

export default function Navbar({ items }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="site-header fixed bottom-0 z-50 w-full bg-lime-400 text-lime-900">
        <div className="container mx-auto pt-2 pb-8 text-xs">
          <ul className="mx-4 grid grid-cols-4 gap-x-4 text-center md:mx-0">
            <li>
              <Link activeClassName="active" href={`/`}>
                <a className="flex flex-col items-center">
                  <span className="h-6 overflow-hidden">
                    <span className="icon relative">
                      {/* <IconHome /> */}
                      <IconHome current />
                    </span>
                  </span>
                  <span>Home</span>
                </a>
              </Link>
            </li>
            <li>
              <Link activeClassName="active" href={`/category/`}>
                <a className="flex flex-col items-center">
                  <span className="h-6 overflow-hidden">
                    <span className="icon relative">
                      <IconCategory />
                      {/* <IconCategory current /> */}
                    </span>
                  </span>
                  <span>Category</span>
                </a>
              </Link>
            </li>
            <li>
              <Link activeClassName="active" href={`/recent`}>
                <a className="flex flex-col items-center">
                  <span className="h-6 overflow-hidden">
                    <span className="icon relative">
                      <IconHistory />
                      {/* <IconHistory current /> */}
                    </span>
                  </span>
                  <span>Recent</span>
                </a>
              </Link>
            </li>
            <li>
              <Link activeClassName="active" href={`/about`}>
                <a className="flex flex-col items-center">
                  <span className="h-6 overflow-hidden">
                    <span className="icon relative">
                      <IconInformation />
                      {/* <IconInformation current /> */}
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
