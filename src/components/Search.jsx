import { MdOutlineSearch } from "react-icons/md";

export default function Search() {
  return (
    <div className="flex items-center justify-between sticky top-0 bg-white py-2">
      <div className="relative w-full">
        <MdOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full pl-10 pr-4 py-2"
        />
      </div>
    </div>
  );
}
