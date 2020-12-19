export default function ProgressBar({ percentage = 0 }) {
  return (
    <div className="progress-bar-component">
      <div className="complete" style={{ width: `${percentage}%` }} />
    </div>
  );
}
