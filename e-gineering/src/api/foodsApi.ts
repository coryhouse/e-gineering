export async function getFoods() {
  return fetch("http://localhost:3001/foods");
}

export async function deleteFood(id: number) {
  const response = await fetch("http://localhost:3001/foods/" + id, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Delete failed");
  return await response.json();
}
