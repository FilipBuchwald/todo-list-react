export const getExampleTasks = async () => {
  const response = await fetch("/todo-list-react/exampleTasks.json");
  console.log(response.data);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};