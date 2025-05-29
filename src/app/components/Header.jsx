import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4 mb-6">
      <h1 className="text-lg font-semibold">Test Task</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-white text-sm focus:outline-none"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            {/* <img src="/search.png" alt="" /> */}
            🔍
          </span>
        </div>
        <div className="w-9 h-9 rounded-full overflow-hidden border">
          <img
            src="/profile.png"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
