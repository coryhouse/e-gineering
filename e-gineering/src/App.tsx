import React from "react";

type Food = {
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

const foods: Food[] = [
  { name: "Carrot", quantity: 1, minQuantity: 5, type: "Veggie" },
  { name: "Potato", quantity: 2, minQuantity: 3, type: "Veggie" },
];

export function App() {
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
