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
    console.warn(`Theme "${topic}" not found`);
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
  const [actualTopic, setActualTopic] = useState("");

  const handleChangeActualTopic = (
    nextTopic: string,
    included: boolean = true,
  ) => {
    const t = included ? nextTopic : "\\unknown";
    document.documentElement.style.setProperty("--animation", t.slice(1));
    if (!document.startViewTransition) {
      applyTheme(t);
      setActualTopic(t);
    } else
      document.startViewTransition(() => {
        applyTheme(t);
        setActualTopic(t);
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
    <div className="cont">
      <MainTopic topic={actualTopic} onClickButtons={handleChangeTopic} />
      <InputField
        topic={actualTopic}
        value={topic}
        onChange={handleChangeTopic}
        onEnter={(s: string) => handleChangeActualTopic(s, topics.includes(s))}
      >
        \about
      </InputField>
    </div>
  );
}

export default App;
