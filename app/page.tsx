import { Menu } from "lucide-react";
import { User, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1f3552] flex flex-col items-center justify-center relative font-sans">
      {/* Top Right Menu */}
      <div className="absolute top-6 right-6 text-white">
        <Menu size={28} />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-white mb-12">CloudBase</h1>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-200 rounded-xl px-4 py-3 w-[500px] shadow-md">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
        />

        {/* Icons */}
        <div className="flex items-center gap-3 ml-3">
          <div className="p-2 bg-gray-300 rounded-full">
            <User size={18} />
          </div>
          <div className="p-2 bg-gray-300 rounded-full">
            <Sparkles size={18} />
          </div>
        </div>
      </div>

      {/* Previous Searches Dropdown */}
      <div className="mt-6 w-[500px]">
        <div className="bg-gray-200 px-4 py-3 rounded-md flex justify-between items-center shadow">
          <span className="text-gray-700">Previous Searches</span>
          <span className="text-gray-600">▼</span>
        </div>
      </div>
    </div>
  );
}
