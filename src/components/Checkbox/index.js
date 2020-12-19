import Icon from "../Icon";

export default function Checkbox({ checked = false, onChange = () => null }) {
  return (
    <div
      className={`checkbox-component ${checked && "active"}`}
      onClick={() => onChange(!checked)}
    >
      {checked && <Icon.CheckFilled />}
    </div>
  );
}
