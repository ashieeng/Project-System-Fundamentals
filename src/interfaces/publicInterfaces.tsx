export interface Room {
  id: number;
  name: string;
  capacity: number;
  price: number;
  description?: string;
}

export interface Addons {
  id: number;
  name: string;
  price: number;
}

export interface MealPlan {
  id: number;
  type: string;
  price: number;
}