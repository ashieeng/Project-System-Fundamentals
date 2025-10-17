import React from "react";
import { mealPlans } from "../app/data/data";

interface MealCardsProps {
  selectedMeals: number[];
  setSelectedMeals: React.Dispatch<React.SetStateAction<number[]>>;
  numPeople: number;
  setNumPeople: React.Dispatch<React.SetStateAction<number>>;
}

const MealCards: React.FC<MealCardsProps> = ({
  selectedMeals,
  setSelectedMeals,
  numPeople,
  setNumPeople,
}) => {
  const handleMealToggle = (id: number) => {
    setSelectedMeals((prev) =>
      prev.includes(id) ? prev.filter((mealId) => mealId !== id) : [...prev, id]
    );
  };

  const totalCost = selectedMeals.reduce((acc, mealId) => {
    const meal = mealPlans.find((m) => m.id === mealId);
    return meal ? acc + meal.price * numPeople : acc;
  }, 0);

  return (
    <div className="flex flex-col items-center justify-center text-white space-y-8">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center bg-blue-900 w-full py-3 rounded-md">
        Meals Selection
      </h2>

      {/* Number of People input */}
      <div className="flex items-center space-x-3 text-lg">
        <label htmlFor="numPeople" className="font-semibold text-black">
          Number of People:
        </label>
        <input
          id="numPeople"
          type="number"
          min={0}
          value={numPeople}
          onChange={(e) => setNumPeople(Number(e.target.value))}
          className="text-black px-3 py-1 rounded-md border border-gray-300 w-24 text-center bg-white"
        />
      </div>

      {/* Meal checkboxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-6">
        {mealPlans.map((meal) => (
          <div
            key={meal.id}
            className="text-black bg-white border border-white/20 rounded-xl p-4 w-40 flex flex-col items-center shadow-md transition-transform"
          >
            <input
              type="checkbox"
              id={`meal-${meal.id}`}
              checked={selectedMeals.includes(meal.id)}
              onChange={() => handleMealToggle(meal.id)}
              className="w-5 h-5 mb-2 accent-blue-600"
            />
            <label htmlFor={`meal-${meal.id}`} className="font-semibold">
              {meal.type}
            </label>
            <p className="text-blue-700 font-bold">${meal.price}</p>
            <p className="text-xs mt-1 opacity-80">per person</p>
          </div>
        ))}
      </div>

      {/* Total cost */}
      <div className="bg-white text-black font-bold text-xl px-6 py-3 rounded-md shadow-md">
        Total Cost: ${totalCost.toLocaleString()}
      </div>
    </div>
  );
};

export default MealCards;
