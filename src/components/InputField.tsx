import { motion } from "framer-motion";

interface Props {
  children: string;
  value: string;
  topic?: string;
  onEnter: (currTopic: string) => void;
}

function InputField({ children, value, topic = "", onEnter }: Props) {
  const getprop = (p: string) =>
    document.documentElement.style.getPropertyValue(p);

  const cmdColor = getprop("--cmd-color");
  const cmdBgColor = getprop("--cmd-bg-color");
  const cmdBgAccent = getprop("--cmd-bg-accent");
  const cmdAccent = getprop("--cmd-accent");

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
        onEnter(e.target.value);
      }}
      style={{ marginTop: "40px", marginBottom: "20px" }}
      initial={{
        scale: 0.9,
        backgroundColor: cmdBgColor,
        color: cmdColor,
      }}
      animate={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
        backgroundColor: cmdBgAccent,
        color: cmdAccent,
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
