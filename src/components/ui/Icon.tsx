export function Icon({
  name,
  size = 20,
}: {
  name:
    | "menu"
    | "close"
    | "search"
    | "bag"
    | "bag-plus"
    | "user"
    | "arrow"
    | "minus"
    | "plus";
  size?: number;
}) {
  const paths = {
    menu: (
      <>
        <path d="M3 7h18M3 17h18" />
      </>
    ),
    close: (
      <>
        <path d="m5 5 14 14M19 5 5 19" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    bag: (
      <>
        <path d="M5 8h14l-1 13H6L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    "bag-plus": (
      <>
        <path d="M5 8h14l-1 13H6L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3M9 15h6M12 12v6" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h15M14 6l6 6-6 6" />
      </>
    ),
    minus: (
      <>
        <path d="M5 12h14" />
      </>
    ),
    plus: (
      <>
        <path d="M5 12h14M12 5v14" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.4"
    >
      {paths[name]}
    </svg>
  );
}
