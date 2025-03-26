import "./App.scss";
import { useState } from "react";
import InputField from "./components/InputField";
import MainTopic from "./components/MainTopic";

const topics: string[] = (import.meta.env.VITE_TOPICS as string).split(",");

interface Theme {
  "bg-color": string;
  "txt-color": string;
  "cmd-color": string;
  "cmd-bg-color": string;
  "cmd-accent": string;
  "cmd-bg-accent": string;
}

import themesJson from "./themes.json";
const themes: Record<(typeof topics)[number], Theme> = themesJson;

function applyTheme(topic: string) {
  const theme = themes[topic];
  if (!theme) {
    console.error(`Theme "${topic}" not found`);
  }

  for (const key in theme) {
    document.documentElement.style.setProperty(
      `--${key}`,
      theme[key as keyof Theme],
    );
  }
}

function App() {
  const [topic, setTopic] = useState("");
  const [actualTopic, setActualTopic] = useState("\\about");

  const handleChangeActualTopic = (nextTopic: string) => {
    document.documentElement.style.setProperty(
      "--animation",
      nextTopic.slice(1),
    );
    if (!document.startViewTransition) {
      applyTheme(nextTopic);
      setActualTopic(nextTopic);
    } else
      document.startViewTransition(() => {
        applyTheme(nextTopic);
        setActualTopic(nextTopic);
      });
  };

  const handleChangeTopic = (nextTopic: string) => {
    let t = nextTopic.toLowerCase();
    if (!t.startsWith("\\")) {
      t = "\\" + t; // force topic to start with a backslash
    }
    setTopic(t);
    if (topics.includes(t)) handleChangeActualTopic(t);
  };

  return (
    <div className="cont container container-sm">
      <MainTopic topic={topic} onClickButtons={handleChangeTopic} />
      <InputField topic={actualTopic} value={topic} onEnter={handleChangeTopic}>
        \about
      </InputField>
    </div>
  );
}

export default App;
