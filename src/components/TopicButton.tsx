import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Props {
  text: string;
  onClick: (nextTopic: string) => void;
}

function TopicButton({ text, onClick }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [rotAngle, setRotAngle] = useState(50);

  const getProp = (p: string): string =>
    document.documentElement.style.getPropertyValue(p);

  const cmdColor = getProp("--cmd-color");
  const cmdBgColor = getProp("--cmd-bg-color");
  const cmdAccent = getProp("--cmd-accent");
  const cmdBgAccent = getProp("--cmd-bg-accent");

  useEffect(() => {
    if (buttonRef.current) {
      const width = buttonRef.current.offsetWidth;
      const dynamicAngle = 200 / width; // Adjust wobble size
      setRotAngle(dynamicAngle);
    }
  }, []);

  return (
    <motion.button
      ref={buttonRef}
      initial={{
        rotate: 0,
        color: cmdColor,
        backgroundColor: cmdBgColor,
      }}
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
      variants={{
        hover: {
          scale: 1.1,
          color: cmdAccent,
          backgroundColor: cmdBgAccent,
          rotate: [0, rotAngle, -rotAngle],
          transition: {
            rotate: {
              repeat: Infinity,
              repeatType: "reverse", // Makes it oscillate smoothly
              duration: 0.4,
              ease: "easeInOut",
            },
          },
        },
      }}
      className="cmd"
      key={text}
      onClick={() => onClick("\\" + text)}
    >
      {text}
    </motion.button>
  );
}

export default TopicButton;
