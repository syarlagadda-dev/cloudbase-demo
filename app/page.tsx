"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1f3552] flex flex-col items-center justify-center relative font-sans">
      {/* Top Right Menu */}
      <div className="absolute top-6 right-6 text-white text-3xl cursor-pointer">
        ☰
      </div>

      {/* Title */}
      <h1 className="text-6xl font-bold text-white mb-16">CloudBase</h1>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-200 rounded-xl px-5 py-4 w-[520px] shadow-md">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 text-lg"
        />

        {/* Icons (emoji instead of library) */}
        <div className="flex items-center gap-3 ml-4">
          <div className="p-2 bg-gray-300 rounded-full text-sm">👤</div>
          <div className="p-2 bg-gray-300 rounded-full text-sm">✨</div>
        </div>
      </div>

      {/* Previous Searches */}
      <div className="mt-8 w-[520px]">
        <div className="bg-gray-200 px-5 py-4 rounded-md flex justify-between items-center shadow">
          <span className="text-gray-700 text-lg">Previous Searches</span>
          <span className="text-gray-600 text-lg">▼</span>
        </div>
      </div>
    </div>
  );
}
