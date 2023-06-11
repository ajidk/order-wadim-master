import { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimateHeight from "react-animate-height";
import {
  FiGrid,
  FiCreditCard,
  FiBox,
  FiBarChart,
  FiShoppingBag,
} from "react-icons/fi";

const sidebarMenu = [
  {
    name: "dashboard",
    icon: <FiGrid />,
    path: "/",
  },
  {
    name: "payments",
    icon: <FiCreditCard />,
    children: [
      {
        name: "payments",
        path: "/payments",
      },
      {
        name: "recurring payments",
        path: "/recurring-payments",
      },
      {
        name: "checkout settings",
        path: "/checkout-settings",
      },
    ],
  },
  {
    name: "packages",
    icon: <FiBox />,
    path: "/packages",
  },
  {
    name: "statistics",
    icon: <FiBarChart />,
    path: "/statistics",
  },
  {
    name: "webstore",
    icon: <FiShoppingBag />,
    children: [
      {
        name: "appearance",
        path: "/appearance",
      },
      {
        name: "currency",
        path: "currency",
      },
      {
        name: "translations",
        path: "/translations",
      },
      {
        name: "emails",
        path: "/emails",
      },
      {
        name: "domain",
        path: "/domain",
      },
    ],
  },
];

const Sidebar = () => {
  const [currentMenu, setCurrentMenu] = useState<string>("");

  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  return (
    <div>
      <aside className=" fixed inset-y-0 z-50 h-full min-h-screen w-[260px] shadow-lg transition-all duration-300">
        <div className="h-full bg-indigo-600 dark:bg-black">
          <div className="flex h-[60px] items-center justify-between px-4 py-6 sm:px-6">
            <NavLink to="/" className="w-32 flex-shrink-0">
              <img
                height="18"
                src="https://creator.tebex.io/img/navbar-tebex.svg"
                alt="logo"
              />
            </NavLink>
          </div>
          <div className="bg-indigo-700 px-4 py-6 dark:bg-gray-800 sm:px-6">
            <div>
              <div className="mb-3 flex items-center justify-between gap-4">
                <div className="relative w-full">
                  <div className="flex h-1.5 overflow-hidden rounded bg-gray-200 text-xs">
                    <div
                      style={{ width: "30%" }}
                      className="flex flex-col justify-center whitespace-nowrap bg-blue-600 text-center text-white shadow-none"
                    ></div>
                  </div>
                </div>
                <span className="text-sm font-semibold leading-none text-green-600">
                  30%
                </span>
              </div>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-sm border border-transparent bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-gray-800 shadow-sm"
              >
                Continue Setup
              </button>
            </div>
          </div>
          <ul className="relative mt-4 flex flex-col gap-1 p-4 py-0 font-semibold">
            {sidebarMenu.map((item) => {
              return (
                <li key={item.name} className="text-sm text-white">
                  <button
                    type="button"
                    className={`group mb-1 flex w-full items-center justify-between overflow-hidden whitespace-nowrap rounded-sm p-2.5`}
                    onClick={() => toggleMenu(item.name)}
                  >
                    <div className="flex items-center gap-2 text-white">
                      {item.icon}
                      <span className="dark:group-hover:text-white-dark capitalize ltr:pl-3 rtl:pr-3 dark:text-[#506690]">
                        {item.name}
                      </span>
                    </div>

                    {item.children && (
                      <div
                        className={`transition-transform ${
                          currentMenu === item.name ? "rotate-90" : ""
                        }`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 5L15 12L9 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </button>

                  {item.children && (
                    <AnimateHeight
                      duration={300}
                      height={currentMenu === item.name ? "auto" : 0}
                    >
                      <ul className="text-gray-400">
                        {item.children?.map((child) => (
                          <li key={child.name}>
                            <NavLink
                              to={child.path}
                              className="flex items-center px-9 py-2.5 capitalize hover:text-white"
                            >
                              {child.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </AnimateHeight>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
