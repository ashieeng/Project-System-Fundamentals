import { Room, Addons, MealPlan } from "../../interfaces/publicInterfaces";

export const rooms: Room[] = [
  { id: 1, name: "Auditorium Hall", capacity: 200, price: 5500 },
  { id: 2, name: "Conference Room", capacity: 15, price: 3500 },
  { id: 3, name: "Presentation Room", capacity: 50, price: 700, description: "Ideal for presentations" },
  { id: 4, name: "Large Meeting Room", capacity: 10, price: 900 },
  { id: 5, name: "Small Meeting Room", capacity: 5, price: 1100 },
];

export const addons: Addons[] = [
  { id: 1, name: "Speakers", price: 35 },
  { id: 2, name: "Microphones", price: 45 },
  { id: 3, name: "Whiteboards", price: 80 },
  { id: 4, name: "Projectors", price: 200 },
  { id: 5, name: "Signage", price: 80 },
];

export const mealPlans: MealPlan[] = [
  { id: 1, type: "Breakfast", price: 50 },
  { id: 2, type: "Lunch", price: 60 },
  { id: 3, type: "High Tea", price: 25 },
  { id: 4, type: "Dinner", price: 70 },
];
