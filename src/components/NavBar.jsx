import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="bg-blue-400 text-white p-4 flex justify-between items-center">
        <Link to="/">
        <h3 className="ml-4 font-bold text-2xl">lrnr</h3>
        </Link>
        <div className="mr-4">
          <ul className="flex space-x-6">
            <li>
              <a href="/account" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="/quiz" className="hover:underline">
                Quiz Generation
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
