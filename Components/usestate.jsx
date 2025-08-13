import React, { useState } from 'react';

export function Usestate() {
const [count, setcount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-3 mt-5">
      <h1 className="text-3xl font-bold">{count}</h1>
      <button
        className="p-2 rounded text-white bg-amber-700 hover:bg-amber-800"
        onClick={() => setcount(prev => prev + 1)}
      >
        Increase
      </button>
    </div>
  );
}
