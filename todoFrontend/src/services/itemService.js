// No mapping needed - backend already returns correctly formatted data
// Response format: { id, name, dueDate, completed }

export const addItemToServer = async (name, dueDate) => {
  const response = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: name, date: dueDate }),
  });
  const item = await response.json();
  console.log("Item added from server:", item);
  return item; // Already properly formatted
};

export const getItemsFromServer = async () => {
  const response = await fetch("http://localhost:3000/api/todo");
  const items = await response.json();
  console.log("Items loaded from server:", items);
  return items; // Already properly formatted by backend
};

export const markItemCompleted = async (id) => {
  const response = await fetch(
    `http://localhost:3000/api/todo/${id}/completed`,
    {
      method: "PUT",
    },
  );
  const item = await response.json();
  return item; // Already properly formatted
};

export const deleteItemFromServer = async (id) => {
  console.log("Deleting item with id:", id);
  await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "DELETE",
  });
  return id;
};

export const toggleItemOnServer = async (id, completed) => {
  try {
    console.log("Toggling item:", id, "to completed:", completed);
    const response = await fetch(
      `http://localhost:3000/api/todo/${id}/completed`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to update status on server");
    }

    const item = await response.json();
    console.log("Item updated:", item);
    return item; // Already properly formatted
  } catch (error) {
    console.error("Error toggling item:", error);
    throw error;
  }
};
