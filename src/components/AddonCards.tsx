import React from "react";
import { addons } from "../app/data/data";

interface AddOnCardsProps {
  quantities: { [key: number]: number };
  setQuantities: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
}

const Cards: React.FC<AddOnCardsProps> = ({ quantities, setQuantities }) => {
  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const totalCost = addons.reduce(
    (sum, addons) => sum + addons.price * (quantities[addons.id] || 0),
    0
  );

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold text-center bg-blue-900 w-full py-3 rounded-md">
        Venue Room Selection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {addons.map((addons) => (
          <div key={addons.id} className="bg-white text-gray-900 rounded-lg shadow-lg p-4 flex flex-col items-center w-64">
            <img
              src={`/addon/${addons.id}.jpg`}
              alt={addons.name}
              className="w-full h-36 object-cover rounded-md mb-4"
              onError={(e) => ((e.target as HTMLImageElement).src = "https://via.placeholder.com/300x200?text=Room")}
            />
            <h3 className="text-lg font-semibold text-center">{addons.name}</h3>
            <p className="text-blue-700 font-bold mb-3">${addons.price}</p>

            <div className="flex items-center space-x-3">
              <button onClick={() => handleQuantityChange(addons.id, -1)} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8">–</button>
              <span className="text-lg font-semibold w-4 text-center">{quantities[addons.id] || 0}</span>
              <button onClick={() => handleQuantityChange(addons.id, 1)} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8">+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 px-6 py-3 rounded-lg text-xl font-semibold">
        Total Cost: ${totalCost.toLocaleString()}
      </div>
    </div>
  );
};

export default Cards;
