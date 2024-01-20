import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-around">
      <div className="text-red-600 font-extrabold text-4xl tracking-wide">
        NETFLIX
      </div>
      <div className="flex items-center gap-2">
        <div>
          <details className="dropdown">
            <summary className="m-1 btn">Language</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a>Thailand</a>
              </li>
              <li>
                <a>English</a>
              </li>
            </ul>
          </details>
        </div>
        <div className="w-20 h-10 bg-red-600 rounded-lg items-center">
          <Link to="/login">
            <button>Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
