import React, { useRef } from "react";

const addOptionsBlock = () => {
  const inputRef = useRef(null);
  return (
    <div
      onClick={() => {
        inputRef.current.focus();
      }}
      className="addExtraOptions_container"
    >
      <input
        ref={inputRef}
        // onKeyDown={(e.)}
        type={"text"}
      />
    </div>
  );
};

export default addOptionsBlock;
