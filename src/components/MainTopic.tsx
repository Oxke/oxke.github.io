import { ComponentType, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  topic: string;
  onClickButtons: (nextTopic: string) => void;
}

const topics = (import.meta.env.VITE_TOPICS as string).split(",");

function DynamicImportContent({ topic, onClickButtons }: Props) {
  interface ContentProps {
    onClickButtons: (nextTopic: string) => void;
  }
  const [Content, setContent] = useState<ComponentType<ContentProps> | null>(
    null,
  );
  useEffect(() => {
    const loadContent = async () => {
      try {
        const { default: importedComponent } = await import(
          `../contents/${topic.slice(1)}.tsx`
        );
        setContent(() => importedComponent);
      } catch (error) {
        console.error(`Error loading component ${topic}`, error);
        setContent(null);
      }
    };
    if (topics.includes(topic)) loadContent();
  }, [topic]);

  if (topic === "") {
    if (!document.startViewTransition)
      return (
        <div id="content">
          You will not see some of the better animations and transitions on this
          browser unfortunately... Keep in mind that this website is much cooler
          than you think
        </div>
      );
    return null;
  }
  return Content ? (
    <Content onClickButtons={onClickButtons} />
  ) : (
    <div id="content">Loading...</div>
  );
}

function MainTopic({ className = "", topic, onClickButtons }: Props) {
  return (
    <motion.section className={"mainTopic " + className}>
      <DynamicImportContent topic={topic} onClickButtons={onClickButtons} />
    </motion.section>
  );
}

export default MainTopic;
