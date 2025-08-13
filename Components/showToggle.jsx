import React, { useState } from 'react';

export function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3 mt-5">
      {/* Button changes label */}
      <button
        className="p-2 rounded text-white bg-amber-700 hover:bg-amber-800"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide Text" : "Show Text"}
      </button>

      {/* Conditional rendering of text */}
      {isVisible && <h1>Hello Kushal</h1>}
    </div>
  );
}
