import { useEffect, useState } from "react";
import { getFoods, deleteFood } from "./api/foodsApi";

type Food = {
  id: number;
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

export function App() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function callGetFoods() {
      const response = await getFoods();
      if (!response.ok) throw new Error("Call to get foods failed");
      const json: Food[] = await response.json();
      setFoods(json);
    }
    callGetFoods();
    // Using empty array for useEffect since we only want this to run once.
  }, []);

  return (
    <>
      <h1>Pantry Manager</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Min Quantity</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food.name}>
              <td>
                <button
                  onClick={async () => {
                    await deleteFood(food.id);
                    // Return a new array with the id that was just deleted omitted.
                    const newFoods = foods.filter((f) => f.id !== food.id);
                    setFoods(newFoods);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>{food.name}</td>
              <td>{food.quantity}</td>
              <td>{food.minQuantity}</td>
              <td>{food.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
