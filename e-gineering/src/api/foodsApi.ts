import { Food } from "../App";
import { NewFood } from "../FoodForm";

export async function getFoods() {
  const response = await fetch("http://localhost:3001/foods");
  if (!response.ok) throw new Error("Call to get foods failed");
  return response.json() as Promise<Food[]>;
}

export async function deleteFood(id: number) {
  const response = await fetch("http://localhost:3001/foods/" + id, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Delete failed");
  return response.json();
}

export async function addFood(food: NewFood) {
  const response = await fetch("http://localhost:3001/foods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  if (!response.ok) throw new Error("Call to add foods failed");
  return response.json() as Promise<Food>;
}
