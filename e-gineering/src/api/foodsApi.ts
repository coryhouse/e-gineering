export async function getFoods() {
  return fetch("http://localhost:3001/foods");
}
