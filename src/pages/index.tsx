import DefaultLayout from "../layouts/Default";
import { FiExternalLink } from "react-icons/fi";
import {
  FaYoutube,
  FaTwitter,
  FaShoppingBasket,
  FaCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

const Index = () => {
  return (
    <DefaultLayout>
      <div>
        <header>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800">
                Kermit Strickland
              </h1>
              <p className="text-sm font-semibold text-gray-600">
                7 DAYS TO DIE | PLUS PLAN TRIAL
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center">
                <button className="rounded-l-sm bg-[#0d8ddc] px-4 py-3">
                  <FaTwitter className="h-5 w-5 text-white" />
                </button>
                <button className="rounded-r-sm bg-[#ff0000] px-4 py-3">
                  <FaYoutube className="h-5 w-5 text-white" />
                </button>
              </div>
              <a
                href="#"
                className="flex items-center justify-center rounded-sm border border-transparent bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-gray-800 shadow"
              >
                View Webstore
                <FiExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </header>
        <div>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="flex items-center gap-5 overflow-hidden rounded-sm border border-gray-200 bg-white px-4 py-5 sm:p-6">
              <div>
                <FaShoppingBasket className="h-12 w-12 text-gray-300" />
              </div>
              <div>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                  71,897
                </dd>
                <dt className="truncate text-sm font-medium text-gray-500">
                  Total Subscribers
                </dt>
              </div>
            </div>
            <div className="flex items-center gap-5 overflow-hidden rounded-sm border border-gray-200 bg-white px-4 py-5 sm:p-6">
              <div>
                <FaCalendarAlt className="h-12 w-12 text-gray-300" />
              </div>
              <div>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                  58.16%
                </dd>
                <dt className="truncate text-sm font-medium text-gray-500">
                  Avg. Open Rate
                </dt>
              </div>
            </div>
            <div className="flex items-center gap-5 overflow-hidden rounded-sm border border-gray-200 bg-white px-4 py-5 sm:p-6">
              <div>
                <FaChartBar className="h-12 w-12 text-gray-300" />
              </div>
              <div>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                  24.57%
                </dd>
                <dt className="truncate text-sm font-medium text-gray-500">
                  Avg. Click Rate
                </dt>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Index;
