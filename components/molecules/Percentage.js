export default function Percentage(props) {
  const previous = props.previous ?? 0;
  const value = (
    ((props.current - props.previous) / props.previous) *
    100
  ).toFixed(0);

  return (
    <div
      className={`inline-flex gap-2  p-1 ${
        props.current >= previous
          ? "bg-green-700 text-white"
          : "bg-red-700 text-white"
      }`}
    >
      {props.current >= previous ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
          />
        </svg>
      )}
      <span className="text-xs font-medium">
        {" "}
        {`${value && !isNaN(value) ? value : 0}%`}{" "}
      </span>
    </div>
  );
}
