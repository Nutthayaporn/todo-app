import { useState, useRef } from "react";

import Icon from "../Icon";
import Checkbox from "../Checkbox";
import Dropdown from "../Dropdown";

import useOnClickOutside from "../../hooks/clickOutside";

export default function TodoItem({
  title = "",
  checked = false,
  onEdit = () => null,
  onDelete = () => null,
  onToggleCompleted = () => null,
}) {
  const todoItemRef = useRef(null);
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState(title);
  const [isEdit, setIsEdit] = useState(false);

  useOnClickOutside(todoItemRef, () => {
    setInputValue(title)
    setIsEdit(false);
  });

  const handleSave = () => {
    setIsEdit(false);
    onEdit(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  const handleClickSave = () => {
    handleSave();
  };

  const renderEditItem = () => {
    return (
      <div className="input-wrapper">
        <div className="left-wrapper">
          <input
            ref={inputRef}
            autoFocus
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="right-wrapper">
          <div className="save-button">
            <button onClick={handleClickSave}>Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderTodoItem = () => {
    return (
      <>
        <div className="left-wrapper">
          <div className="checkbox-wrapper">
            <Checkbox checked={checked} onChange={(value) => {
              onToggleCompleted(value)
            }} />
          </div>
          <div className="title-wrapper">
            <p className={`title ${checked && "checked"}`}>{inputValue}</p>
          </div>
        </div>
        <div className="right-wrapper">
          <Dropdown
            icon={<Icon.MoreFilled />}
            items={
              <div className="dropdown-items-wrapper">
                <div className="item-wrapper" onClick={() => setIsEdit(true)}>
                  <p className="title">Edit</p>
                </div>
                <div
                  className="item-wrapper"
                  onClick={() => {
                    setInputValue("");
                    onDelete();
                  }}
                >
                  <p className="title" style={{ color: "#E07C7C" }}>
                    Delete
                  </p>
                </div>
              </div>
            }
          />
        </div>
      </>
    );
  };

  return (
    <div className="todo-item-component" ref={todoItemRef}>
      {isEdit ? renderEditItem() : renderTodoItem()}
    </div>
  );
}
