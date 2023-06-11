import React, { useState } from "react";

const tabConfig = [
  {
    title: "pricing",
    content: <div>pricin guys</div>,
  },
  {
    title: "limit",
    content: <div>limit guys</div>,
  },
  {
    title: "gifting",
    content: <div>gifting guys</div>,
  },
];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="mx-2">
      <div className="mb-4 flex border-b pb-4">
        {tabConfig.map((item, idx) => (
          <button
            key={`headerTab-${idx}`}
            className={`capitalize ${
              activeTab === idx
                ? "rounded-md bg-blue text-white "
                : "bg-gray-200 text-gray-700"
            } rounded-l px-4 py-2`}
            onClick={() => handleTabClick(idx)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="rounded bg-white p-4">
        {tabConfig.map(
          (item, idx) => activeTab === idx && <p>{item.content}</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
