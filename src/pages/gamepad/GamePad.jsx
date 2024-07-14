import { Link } from "react-router-dom";

import GamepadItem from "./GamepadItem";

const GamePad = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 lg:mb-0 lg:px-4 py-10">
        <Link
          to="/"
          className="sm:text-3xl md:text-base lg:text-sm text-black hover:underline mb-2 sm:mb-0 sm:mr-2"
        >
          Account
        </Link>
        <div className="hidden sm:block"> / </div>
        <Link
          to="#"
          className="sm:text-3xl md:text-base lg:text-sm  text-black hover:underline sm:mx-2"
        >
          Gaming
        </Link>
        <div className="hidden sm:block"> / </div>
        <Link
          to="#"
          className="sm:text-3xl md:text-base lg:text-sm text-black hover:underline sm:ml-2"
        >
          Havic HV G-92 Gamepad
        </Link>
      </div>
      <GamepadItem />
    </div>
  );
};

export default GamePad;
