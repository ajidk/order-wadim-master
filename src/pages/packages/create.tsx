import Button from "../../components/Button";
import Tabs from "./components/tabs";
import Tooltip from "../../components/Tooltip";
import UploadImage from "../../components/UploadImage";
import DefaultLayout from "../../layouts/Default";
import { AiOutlineGift, AiOutlinePlusCircle } from "react-icons/ai";

const giftConfig = [
  {
    title: "fiven asset",
    link: "/",
  },
  {
    title: "game server command",
    link: "/",
  },
  {
    title: "discord action",
    link: "/",
  },
  {
    title: "file download",
    link: "/",
  },
  {
    title: "licency key",
    link: "/",
  },
  {
    title: "gift cards",
    link: "/",
  },
];

const Packages = () => {
  return (
    <DefaultLayout>
      <main>
        <section className="flex items-center justify-between">
          <h1 className="text-3xl font-medium">Create Package</h1>
          <div className="flex items-center gap-x-3">
            <Button className="bg-gray" title="help" />
            <Button className="bg-blue" title="back" />
          </div>
        </section>
        <section className="mt-5 flex flex-wrap gap-5 bg-white p-7 drop-shadow">
          <div className="flex max-w-[75%] flex-1 flex-col gap-4">
            <div className="w-full flex-col">
              <div className="mb-3 flex items-center justify-between">
                <label htmlFor="">Name</label>
                <Tooltip />
              </div>
              <input
                type="text"
                placeholder="Diamond Upgrade"
                className="w-full rounded-md border p-2 px-4"
              />
            </div>
            <div className="w-full flex-col">
              <div className="mb-3 flex items-center justify-between">
                <label htmlFor="">Description</label>
                <Tooltip />
              </div>
              <textarea
                placeholder="Diamond Upgrade"
                className="w-full rounded-md border p-2 px-4"
              />
            </div>
            <div className="w-1/2 flex-col">
              <div className="mb-3 flex items-center justify-between">
                <label htmlFor="">Category</label>
                <Tooltip />
              </div>
              <select
                name="category"
                id="category"
                className="w-full rounded-lg border px-4 py-3"
              >
                <option disabled>
                  Please select a category for this packages
                </option>
                <option value="packages" className="capitalize">
                  packages
                </option>
              </select>
            </div>
          </div>
          <div className="flex max-w-[25%] flex-1">
            <div className="w-full ">
              <div className="mb-3 flex items-center justify-between">
                <label htmlFor="">Image</label>
                <Tooltip />
              </div>
              <div className="flex items-center justify-center rounded-lg border p-5">
                <UploadImage />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 bg-white p-7 drop-shadow">
          <Tabs />
        </section>
        <section className="mt-5 flex flex-col items-center justify-center bg-white py-7 drop-shadow">
          <AiOutlineGift className="text-9xl text-gray" />
          <div className="flex gap-3 mt-2">
            {giftConfig.map((item, idx) => (
              <Button
                key={`gift-${idx}`}
                className="bg-green-400 px-2 py-1"
                title={
                  <div className="flex items-center gap-x-1">
                    <AiOutlinePlusCircle />
                    <span className="text-sm font-semibold uppercase">
                      {item.title}
                    </span>
                  </div>
                }
              />
            ))}
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Packages;
