import { useState } from "react";
import axios from "axios";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    try {
      const response = await axios.post("/api/todos", { text: newTodo });
      setTodos([...todos, response.data]);
      setNewTodo("");
    } catch (error) {
      console.log("Error adding todo:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Task Manager
        </h1>

        <form
          onSubmit={addTodo}
          className="flex items-center gap-2 shadow-sm border border-gray-200 p-2 rounded-lg"
        >
          <input
            className="flex-1 outline-none px-3 py-2 text-gray-700 placeholder-gray-400"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What needs to be done?"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium cursor-pointer"
          >
            Add Task
          </button>
        </form>

        {/* Display list of todos */}
        <ul className="mt-6 space-y-2">
          {todos.map((todo, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded-md">
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
