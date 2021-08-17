// Ale emporium - Hermanaki Sauce.
// BottleWorks
// Ma ma Korean BBQ

import React from "react";

type Food = {
  name: string;
  quantity: number;
};

const foods: Food[] = [
  { name: "Carrot", quantity: 1 },
  { name: "Potato", quantity: 2 },
];

export function App() {
  function renderFoods() {
    return foods.map((food) => <li>{food.name}</li>);
  }

  return (
    <>
      <h1>Pantry Manager</h1>
      <ul>{renderFoods()}</ul>
    </>
  );
}
