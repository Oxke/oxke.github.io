import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: keyof typeof colors;
  onClick: () => void;
}

const colors = {
  blue: "primary",
  green: "success",
  red: "danger",
  yellow: "warning",
  gray: "secondary",
  white: "light",
  black: "dark",
  azzurro: "info",
  link: "link",
};

function Button({ children, color = "azzurro", onClick }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + colors[color]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
