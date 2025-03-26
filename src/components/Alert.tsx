import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onDismiss: () => void;
}

function Alert({ children, onDismiss }: Props) {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onDismiss}
      ></button>
    </div>
  );
}

export default Alert;
