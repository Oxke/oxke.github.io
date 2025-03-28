import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ReactElement } from "react";
import ArrowExtLink from "../icons/ArrowExtLink";

interface Props {
  text?: string;
  children?: ReactElement;
  href?: string;
  hideLink?: boolean;
  onClick?: (nextTopic: string) => void;
}

function TopicButton({ text, children, href, hideLink, onClick }: Props) {
  if (!onClick) {
    if (!href) {
      throw new Error("onClick or href are required");
    }
    if (href === "#") {
      onClick = () => (window.location.href = "#");
    } else {
      onClick = () => window.open(href);
    }
  } else if (href) console.log("href is ignored");

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [rotAngle, setRotAngle] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    setCanHover(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent | MediaQueryList) =>
      setCanHover(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

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
        color: "var(--cmd-color)",
        backgroundColor: "var(--cmd-bg-color)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover="hover"
      whileTap="tap"
      variants={{
        hover: {
          scale: 1.1,
          color: "var(--cmd-accent)",
          backgroundColor: "var(--cmd-bg-accent)",
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
        tap: {
          scale: 0.9,
          color: "var(--cmd-accent)",
          backgroundColor: "var(--cmd-bg-accent)",
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
      {href && !hideLink && (
        <motion.div
          className="cmd-external"
          initial={{
            opacity: 0,
            maxWidth: 0,
            paddingRight: 0,
          }}
          animate={{
            opacity: !canHover || isHovered ? 1 : 0,
            maxWidth: !canHover || isHovered ? 20 : 0,
            paddingRight: !canHover || isHovered ? 5 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <ArrowExtLink
            size={12}
            color={canHover ? "var(--cmd-accent)" : "var(--cmd-color)"}
          />
        </motion.div>
      )}
      {text}
      {children}
    </motion.button>
  );
}

export default TopicButton;
