import { motion } from "framer-motion";

interface Props {
  children: string;
  value: string;
  topic?: string;
  onChange: (currTopic: string) => void;
  onEnter: (currTopic: string) => void;
}

function InputField({ children, value, topic = "", onChange, onEnter }: Props) {
  return (
    <motion.input
      type="text"
      autoComplete="off"
      key={topic} // re-render when true topic changes
      value={value}
      id="input"
      className="animInput cmd"
      placeholder={children}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onEnter(value);
        }
      }}
      style={{ marginTop: "40px", marginBottom: "20px" }}
      initial={{
        scale: 0.9,
        backgroundColor: "var(--cmd-bg-color, #acb7b2)",
        color: "var(--cmd-color, #101118)",
      }}
      animate={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
        backgroundColor: "var(--cmd-bg-accent, #e2f3eb)",
        color: "var(--cmd-accent, #101118)",
      }}
      whileTap={{
        scale: 0.9,
        backgroundColor: "var(--cmd-bg-accent, #e2f3eb)",
        color: "var(--cmd-accent, #101118)",
      }}
      transition={{
        scale: {
          type: "spring",
          stiffness: 500,
          damping: 20,
        },
      }}
    />
  );
}
export default InputField;
