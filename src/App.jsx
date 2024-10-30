import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [counters, setCounters] = useState([]);
  const [value, setValue] = useState(1);

  
  const addCounter = (val) => {
    setCounters([...counters, { id: Date.now(), val: val }]);
  };

  const deleteCounter = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-4 bg-gray-900 min-h-screen text-white">
      <div className="flex space-x-4">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-20 p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-gray-600 outline-none"
        />
        <button
          onClick={() => addCounter(value)}
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
        >
          Add Counter
        </button>
      </div>
      {counters.length === 0 ? (
        <p className="text-gray-400">Click "Add Counter" to create one!</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              id={counter.id}
              onDelete={deleteCounter}
              counterValue={counter.val}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
