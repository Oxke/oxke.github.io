"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TopicButton from "./TopicButton";

interface Props {
  onClickButtons: (nextTopic: string) => void;
}

export default function EndLinks({ onClickButtons }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 40 }}
      animate={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? 0 : 40 }}
      transition={{ duration: 0.5 }}
      className="endlinks"
    >
      <hr />
      Scroll to <TopicButton href="#" text="👆Top" hideLink={true} /> or go back
      to <TopicButton onClick={onClickButtons} text="about" />
    </motion.div>
  );
}
