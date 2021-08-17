import { useEffect, useState } from "react";
import { getFoods } from "./api/foodsApi";

type Food = {
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
      debugger;
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
            <th>Name</th>
            <th>Quantity</th>
            <th>Min Quantity</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          x
          {foods.map((food) => (
            <tr key={food.name}>
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
