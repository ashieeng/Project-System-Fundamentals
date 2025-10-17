import React from "react";

interface NavbarProps {
  onShowDetails?: () => void;
  onShowVenue?: () => void;
  onShowAddOns?: () => void;
  onShowMeals?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onShowDetails, onShowVenue, onShowMeals, onShowAddOns }) => {
  return (
    <nav className="w-full bg-blue-900 text-white flex items-center justify-between px-8 py-4 shadow-md">
      {/* Left: App Name / User */}
      <div className="text-lg font-semibold">
        Conference Expense Planner
      </div>

      {/* Middle: Navigation Links */}
      <div className="flex space-x-8 text-sm md:text-base font-medium md:space-x-50">
        <button
          className="hover:text-yellow-400 transition"
          onClick={onShowVenue}
        >
          Venue
        </button>
        <button
          className="hover:text-yellow-400 transition"
          onClick={onShowAddOns}
        >
          Add-ons
        </button>
        <button
          className="hover:text-yellow-400 transition"
          onClick={onShowMeals}
        >
          Meals
        </button>
      </div>

      {/* Right: Show Details Button */}
      <div>
        <button
          onClick={onShowDetails}
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-md transition"
        >
          Show Details
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
