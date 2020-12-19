import { useState, useRef } from "react";

import useOnClickOutside from "../../hooks/clickOutside";

export default function Dropdown({ icon = () => null, items = () => null }) {
  const dropdownItemsRef = useRef();

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  useOnClickOutside(dropdownItemsRef, () => setIsOpenDropdown(false));

  return (
    <div className="dropdown-component" ref={dropdownItemsRef}>
      <div
        className="dropdown-button"
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
      >
        {icon}
      </div>
      <div className={`dropdown-items-container ${isOpenDropdown && "active"}`}>
        {items}
      </div>
    </div>
  );
}
