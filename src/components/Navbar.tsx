import { FiSearch, FiStar, FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="h-[60px] bg-white px-4 shadow-md sm:px-6">
      <div className="flex h-full w-full items-center justify-between">
        <div className="relative -ml-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            className="block w-full rounded-md bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-4 text-gray-600">
            <li className="">
              <a href="#">Upgrade</a>
            </li>
            <li>
              <a href="#">View Webstore</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <button className="p-2">
              <FiStar className="h-5 w-5 text-gray-600" />
            </button>
            <button className="relative p-2">
              <FiBell className="h-5 w-5 text-gray-600" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] leading-none text-white">
                1
              </span>
            </button>
            {/* avatar */}
            <div className="relative">
              <button className="relative z-10 block h-8 w-8 overflow-hidden rounded-full shadow-sm">
                <img
                  className="h-full w-full object-cover"
                  src="/img/avatar.png"
                  alt="avatar"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
