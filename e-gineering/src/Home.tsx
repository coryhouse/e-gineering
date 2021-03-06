import { useEffect, useState } from "react";
import { getFoods, deleteFood } from "./api/foodsApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export type Food = {
  id: number;
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

export function Home() {
  const [foods, setFoods] = useState<Food[]>([]);

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

  return (
    <>
      <ToastContainer />
      <h1>Pantry Manager</h1>

      <Link className="btn btn-secondary" to="/food">
        Add Food
      </Link>

      {foods.length ? (
        <table>
          <caption>Pantry Foods</caption>
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
                    aria-label={"Delete " + food.name}
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
                <td>
                  <Link to={"/food/" + food.id}>{food.name}</Link>
                </td>
                <td
                  style={
                    food.minQuantity > food.quantity
                      ? { color: "red", fontWeight: "bold" }
                      : {}
                  }
                >
                  {food.quantity}
                </td>
                <td>{food.minQuantity}</td>
                <td>{food.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Uh oh! No foods! :(</p>
      )}
    </>
  );
}
