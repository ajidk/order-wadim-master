import { AiOutlineQuestionCircle } from "react-icons/ai";

const Tooltip = () => {
  return (
    <div className="group relative flex justify-center">
      <span className="rounded-full text-sm text-white shadow-sm">
        <AiOutlineQuestionCircle className="text-black text-xl" />
      </span>
      <span className="bg-gray-800 bottom-4 w-20 absolute scale-0 rounded p-2 text-xs text-black transition-all group-hover:scale-100">
        ✨ You hover me!
      </span>
    </div>
  );
};

export default Tooltip;
