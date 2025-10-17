'use client';

import React, { useState } from "react";
import Navbar from "@/components/NavBar";
import Cards from "@/components/Cards";
import AddOnCards from "@/components/AddonCards";
import MealCards from "@/components/MealCards";
import ShowDetails from "@/components/ShowDetails";

const LandingPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeSection, setActiveSection] = useState<"rooms" | "addons" | "meals">("rooms");
  const [showDetails, setShowDetails] = useState(false);

  // --- Stored selections ---
  const [roomQuantities, setRoomQuantities] = useState<{ [key: number]: number }>({});
  const [addonQuantities, setAddonQuantities] = useState<{ [key: number]: number }>({});
  const [selectedMeals, setSelectedMeals] = useState<number[]>([]);
  const [numPeople, setNumPeople] = useState<number>(0);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/final-project-react-bg.jpg')"
      }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm md:backdrop-blur-md"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-11/12 md:w-4/5 max-w-6xl gap-10 px-4 text-center md:text-left">
        {/* Left column */}
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-center text-center md:text-left space-y-4">
          <h1 className="text-center text-4xl md:text-5xl font-bold">
            Conference Expense Planner
          </h1>
          <h2 className="text-sm md:text-xl">
            Plan Your Perfect Event with Ease
          </h2>

          <div className="flex-col justify-center items-center ">
            <button
            onClick={() => setShowPopup(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Get Started
          </button>
          </div>
        </div>

        {/* Popup Overlay (Main App UI) */}
        {showPopup && (
          <div className="fixed inset-0 bg-white/70 bg-opacity-10 flex flex-col z-20 backdrop-blur-md">
            {/* Navbar */}
            <Navbar
              onShowDetails={() => setShowDetails(true)}
              onShowVenue={() => setActiveSection("rooms")}
              onShowAddOns={() => setActiveSection("addons")}
              onShowMeals={() => setActiveSection("meals")}
            />

            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeSection === "rooms" && (
                <Cards
                  quantities={roomQuantities}
                  setQuantities={setRoomQuantities}
                />
              )}
              {activeSection === "addons" && (
                <AddOnCards
                  quantities={addonQuantities}
                  setQuantities={setAddonQuantities}
                />
              )}
              {activeSection === "meals" && (
                <MealCards
                  selectedMeals={selectedMeals}
                  setSelectedMeals={setSelectedMeals}
                  numPeople={numPeople}
                  setNumPeople={setNumPeople}
                />
              )}
            </div>
          </div>
        )}

        {/* ShowDetails Popup */}
        {showDetails && (
          <ShowDetails
            roomQuantities={roomQuantities}
            addonQuantities={addonQuantities}
            selectedMeals={selectedMeals}
            numPeople={numPeople}
            onClose={() => setShowDetails(false)}
          />
        )}

        {/* Right column */}
        <div className="flex-col md:w-1/2 flex justify-center">
          <p className="text-lg md:text-xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum excepturi perferendis autem provident. 
            Assumenda ea nostrum ad ut? Numquam consequuntur voluptates sequi cupiditate dolore quisquam eum aspernatur, 
            labore mollitia neque.
          </p>
          <div>
            <p className="text-lg md:text-xl mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Delectus consectetur culpa libero reprehenderit quod eligendi, ratione eius voluptatum fugit dignissimos 
            vitae eveniet omnis quos, aperiam necessitatibus assumenda magnam. Eveniet, placeat.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


