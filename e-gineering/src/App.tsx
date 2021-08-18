import React, { useEffect, useState } from "react";
import { getFoods, deleteFood, addFood } from "./api/foodsApi";
import { Input } from "./shared/Input";
import { Select } from "./shared/Select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type Food = {
  id: number;
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

export type NewFood = {
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

const emptyFood: NewFood = {
  name: "",
  quantity: 0,
  minQuantity: 0,
  type: "",
};

export function App() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [newFood, setNewFood] = useState<NewFood>(emptyFood);

  // Long form of the above that avoids using array destructuring.
  // const foodStateArray = useState<Food[]>([]);
  // const foods = foodStateArray[0];
  // const setFoods = foodStateArray[1];

  useEffect(() => {
    async function callGetFoods() {
      // Using underscore to avoid naming conflict
      const _foods = await getFoods();
      setFoods(_foods);
    }
    callGetFoods();
    // Using empty array for useEffect since we only want this to run once.
  }, []);

  // Implementing single onChange handler by convention.
  // id coorellates to the property in state.
  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { value, id } = event.target;
    // Create a copy of existing state, but change the name property to the new value
    setNewFood({
      ...newFood,
      [id]: value,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Exercise 2: Save the form data.
    // Url: http://localhost:3001/foods
    // Verb: POST
    event.preventDefault();

    try {
      const addedFood = await addFood(newFood);
      setFoods([...foods, addedFood]);
      setNewFood(emptyFood);
      toast.success("Food saved! 🦄");
    } catch (error) {
      toast.error("Failed to add");
    }
  }

  return (
    <>
      <ToastContainer />
      <h1>Pantry Manager</h1>

      {/* Exercise 1: Create a reusable Select and consume it below for Food Type 

        1. Vegetable
        2. Grain
        3. Fruit
      */}

      <form onSubmit={handleSubmit}>
        <Input
          onChange={onChange}
          id="name"
          label="Name"
          value={newFood.name}
        />
        <Input
          onChange={onChange}
          id="quantity"
          label="Quantity"
          type="number"
          value={newFood.quantity.toString()}
        />
        <Input
          onChange={onChange}
          id="minQuantity"
          label="Min Quantity"
          type="number"
          value={newFood.minQuantity.toString()}
        />
        <Select
          id="type"
          label="Type"
          onChange={onChange}
          placeholderOption="Select Type"
          value={newFood.type}
          options={[
            { label: "Vegetable", value: "Vegetable" },
            { label: "Grain", value: "Grain" },
            { label: "Fruit", value: "Fruit" },
          ]}
        />
        <input className="btn btn-primary" type="submit" value="Save Food" />
      </form>

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
