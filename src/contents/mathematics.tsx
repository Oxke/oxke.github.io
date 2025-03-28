import TopicButton from "../components/TopicButton";
import { MathJaxContext, MathJax } from "better-react-mathjax";

interface Props {
  onClickButtons: (nextTopic: string) => void;
}

function AboutMathematics({ onClickButtons }: Props) {
  return (
    <>
      <p>
        After my first year studying{" "}
        <TopicButton onClick={onClickButtons} text="AI" /> I decided that I
        wanted to have a deeper understanding of many of the topics we were
        studying. Seeing many friends in collegio study mathematics motivated me
        to start math too, as my second degree.
      </p>
      <p>
        Even though I don't attend in person a lot of courses, I've decided to
        take notes in LaTeX in real time and upload them on a{" "}
        <TopicButton
          href="https://github.com/oxke/appunti"
          text="Github repo"
        />
        .
      </p>
      <p>
        <MathJaxContext>
          Particularly well curated are the notes of the{" "}
          <TopicButton
            href="https://github.com/Oxke/appunti/tree/main/Analisi4"
            text="Analisi 4"
          />{" "}
          course (measure mheory, lebesgue integration,{" "}
          <MathJax inline={true}>{"\\(L^p\\)"}</MathJax> spaces) which I
          attended in the first semester of the Academic year 2024-2025.
        </MathJaxContext>
      </p>
    </>
  );
}

export default AboutMathematics;
