import { useState, useEffect, useRef } from "react";

import Icon from "../Icon";
import useOnClickOutside from "../../hooks/clickOutside";

export default function Select({
  defaultValue = "",
  items = [],
  onChange = () => null,
}) {
  const selectRef = useRef();

  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    onChange(selectedValue);
    setIsOpenOptions(false);
  }, [selectedValue]);

  useOnClickOutside(selectRef, () => setIsOpenOptions(false));

  const activeValue = items.find((item) => item.value === selectedValue);
  const activeTitle = activeValue.title;

  return (
    <div
      className="select-component"
      ref={selectRef}
      onClick={() => setIsOpenOptions(!isOpenOptions)}
    >
      <div className="select-button">
        <p className="title">{activeTitle}</p>
        <div className="arrow">
          <Icon.ArrowDownFilled />
        </div>
      </div>
      <div className={`options-container ${isOpenOptions && "active"}`}>
        {items.map((item, index) => {
          const title = item?.title;
          const value = item?.value;
          const isActive = value === selectedValue;
          return (
            <div
              key={index}
              className={`item-wrapper ${isActive && "active"}`}
              onClick={() => setSelectedValue(value)}
            >
              <p className="title">{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
