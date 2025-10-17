import React from "react";
import { rooms, addons, mealPlans } from "../app/data/data";

interface ShowDetailsProps {
  roomQuantities: { [key: number]: number };
  addonQuantities: { [key: number]: number };
  selectedMeals: number[];
  numPeople: number;
  onClose: () => void;
}

const ShowDetails: React.FC<ShowDetailsProps> = ({
  roomQuantities,
  addonQuantities,
  selectedMeals,
  numPeople,
  onClose,
}) => {
  // Calculate totals
  const roomDetails = Object.entries(roomQuantities)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const room = rooms.find((r) => r.id === Number(id));
      return room
        ? {
            name: `${room.name} (Capacity:${room.capacity})`,
            unitCost: room.price,
            quantity: qty,
            total: room.price * qty,
          }
        : null;
    })
    .filter(Boolean) as {
    name: string;
    unitCost: number;
    quantity: number;
    total: number;
  }[];

  const addonDetails = Object.entries(addonQuantities)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const addon = addons.find((a) => a.id === Number(id));
      return addon
        ? {
            name: addon.name,
            unitCost: addon.price,
            quantity: qty,
            total: addon.price * qty,
          }
        : null;
    })
    .filter(Boolean) as {
    name: string;
    unitCost: number;
    quantity: number;
    total: number;
  }[];

  const mealDetails = mealPlans
    .filter((m) => selectedMeals.includes(m.id))
    .map((meal) => ({
      name: meal.type,
      unitCost: meal.price,
      quantity: `For ${numPeople} people`,
      total: meal.price * numPeople,
    }));

  const totalCost =
    roomDetails.reduce((sum, r) => sum + r.total, 0) +
    addonDetails.reduce((sum, a) => sum + a.total, 0) +
    mealDetails.reduce((sum, m) => sum + m.total, 0);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-30 backdrop-blur-sm">
      <div className="bg-white text-black rounded-xl shadow-2xl p-8 w-11/12 md:w-3/4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
          TOTAL COST FOR THE EVENT
        </h2>

        <h3 className="text-4xl font-extrabold text-center text-green-700 mb-8">
          ${totalCost.toLocaleString()}
        </h3>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-md">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2">Unit Cost</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {[...roomDetails, ...addonDetails, ...mealDetails].map(
                (item, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-gray-300 hover:bg-gray-100"
                  >
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2 text-center">
                      ${item.unitCost.toLocaleString()}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {item.quantity}
                    </td>
                    <td className="px-4 py-2 text-center font-semibold">
                      ${item.total.toLocaleString()}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Close Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={onClose}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
