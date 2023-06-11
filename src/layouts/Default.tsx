import { PropsWithChildren } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="navbar-sticky main-container">
        <Sidebar />
        <div className="ml-[260px]">
          <Navbar />
          <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
