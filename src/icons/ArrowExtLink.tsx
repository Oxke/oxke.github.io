interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const ArrowExtLink = ({
  size = 24,
  color = "var(--cmd-accent, #000000)",
  className = "",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 2 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5m-6 0 7.5-7.5M15 3h6v6" />
  </svg>
);

export default ArrowExtLink;
