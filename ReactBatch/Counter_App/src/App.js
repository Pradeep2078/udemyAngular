import React from "react";

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-column gap-10">
      <div>Increment && Decrement</div>
      <div>
        <button>
          -
        </button>
        <div>

        </div>
        <button>
          +
        </button>
      </div>
      <button>
        reset
      </button>
    </div>
  )
};

export default App;
