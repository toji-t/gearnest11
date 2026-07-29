// Minimal hand-picked icon set (stroke-based, matches the display type's
// geometric character) — avoids pulling in a full icon library dependency.

const paths = {
  laptop: "M4 5h16v10H4V5zm-1 12h18l1 3H2l1-3z",
  keyboard: "M3 6h18v12H3V6zm3 3h2m2 0h2m2 0h2m2 0h2M6 12h2m2 0h6m-10 3h12",
  mouse: "M12 3c-3.3 0-6 2.7-6 6v6a6 6 0 0 0 12 0V9c0-3.3-2.7-6-6-6zm0 0v6",
  headphones: "M4 13v3a2 2 0 0 0 2 2h1v-6H5a1 1 0 0 0-1 1zm16 0v3a2 2 0 0 1-2 2h-1v-6h2a1 1 0 0 1 1 1zM4 13a8 8 0 0 1 16 0",
  gamepad: "M7 9h10l2 8a2 2 0 0 1-3.4 1.4L14 17h-4l-1.6 1.4A2 2 0 0 1 5 17l2-8zM9 12H7m1-1v2m6-1h.01M17 13h.01",
  monitor: "M3 4h18v12H3V4zm5 16h8m-4-4v4",
  phone: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 15h.01",
  accessory: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.3 6.8 19l1-5.8-4.3-4.1 5.9-.9L12 3z",
  star: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.3 6.8 19l1-5.8-4.3-4.1 5.9-.9L12 3z",
  check: "M5 13l4 4L19 7",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  mail: "M4 6h16v12H4V6zm0 0l8 7 8-7",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm10 17l-5.7-5.7",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  quote: "M7 8c-2 1-3 2.7-3 5s1.5 4 3.5 4 3.5-1.5 3.5-4-1.3-4-3.5-4c0-1.3.8-2.4 2-3L7 4zm10 0c-2 1-3 2.7-3 5s1.5 4 3.5 4 3.5-1.5 3.5-4-1.3-4-3.5-4c0-1.3.8-2.4 2-3L17 4z",
  shield: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z",
  spark: "M12 3v4M12 17v4M4 12H2m20 0h-2M6 6l1.5 1.5M16.5 16.5L18 18M6 18l1.5-1.5M16.5 7.5L18 6",
  filter: "M4 6h16M7 12h10M10 18h4",
  chevronDown: "M6 9l6 6 6-6",
};

export default function Icon({ name, className = "w-5 h-5", strokeWidth = 1.75 }) {
  const d = paths[name] || paths.spark;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
