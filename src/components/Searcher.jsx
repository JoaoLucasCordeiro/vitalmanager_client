import { FiSearch } from "react-icons/fi";

const Searcher = ({placeholder}) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="ml-5 pl-10 pr-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-purple-400 w-[50vw] bg-transparent"
      />
      <FiSearch className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default Searcher;
