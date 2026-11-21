import { Icon } from "../ui/Icon";

export function Quantity({
  value,
  setValue,
  dark = false,
}: {
  value: number;
  setValue: (value: number) => void;
  dark?: boolean;
}) {
  return (
    <div className={`quantity ${dark ? "quantity--dark" : ""}`}>
      <button
        aria-label="Reducir cantidad"
        disabled={value === 1}
        onClick={() => setValue(Math.max(1, value - 1))}
      >
        <Icon name="minus" size={16} />
      </button>
      <span>{value}</span>
      <button
        aria-label="Aumentar cantidad"
        onClick={() => setValue(value + 1)}
      >
        <Icon name="plus" size={16} />
      </button>
    </div>
  );
}
