export function Navbar({data}) {
      const favCount = data.filter((song) => song.isFavourite).length;
  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-6 py-3 my-4">
      {/* Left Side - Logo/Image */}
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-800">Orange</span>
      </div>

      {/* Right Side - Button */}
      <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition">
        Favourites <span className="ml-1">{favCount}</span>
      </button>
    </nav>
  );
}
