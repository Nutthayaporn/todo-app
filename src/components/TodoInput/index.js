import { useRef } from "react";

export default function TodoInput({ onSubmit = () => null }) {
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    const value = e.target.value
    if (e.key === "Enter" && value) {
      onSubmit(value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="todo-input-component">
      <input
        ref={inputRef}
        placeholder="Add your todo..."
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
