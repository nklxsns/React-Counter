import React, { useEffect } from "react";

const Counter = ({ id, onDelete, counterValue }) => {
  const [count, setCount] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [direction, setDirection] = React.useState(1);

  useEffect(() => {
    if (!isPlaying || (count === 0 && direction === -1)) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + direction * counterValue);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, direction, count, counterValue]);

  return (
    <div className="border border-gray-700 rounded-lg shadow-lg p-4 bg-gray-800 flex flex-col items-center space-y-2 w-full">
      <span className="font-bold text-xl text-white">{count}</span>
      <div className="flex space-x-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`px-3 py-1 rounded-md ${
            isPlaying
              ? "bg-gray-600 hover:bg-gray-500"
              : "bg-gray-700 hover:bg-gray-600"
          } text-white transition`}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={() => setDirection(direction * -1)}
          className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition"
        >
          {direction < 0 ? "Up" : "Down"}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Counter;
