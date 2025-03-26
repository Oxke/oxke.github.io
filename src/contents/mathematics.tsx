import TopicButton from "../components/TopicButton";

interface Props {
  onClickButtons: (nextTopic: string) => void;
}

function AboutMathematics({ onClickButtons }: Props) {
  return (
    <>
      <p>
        Mathematics is a fascinating field that delves into the beauty of
        abstract reasoning and precise logic. It plays a crucial role in
        understanding the world around us, from fundamental theories to modern
        technological advancements.
      </p>
      <p>
        Osea chose to pursue a second degree in{" "}
        <TopicButton onClick={onClickButtons} text="mathematics" /> alongside
        his studies in Artificial Intelligence. This decision reflects a deep
        appreciation for both theoretical concepts and their applications.
      </p>
      <p>
        The program covers essential areas such as{" "}
        <TopicButton onClick={onClickButtons} text="about" />,{" "}
        <TopicButton onClick={onClickButtons} text="elena" />, and{" "}
        <TopicButton onClick={onClickButtons} text="ai" /> — all of which
        provide valuable insights into various branches of science and
        technology.
      </p>
      <p>
        By combining mathematics with AI, Osea aims to deepen his understanding
        of both fields and explore their rich connections in fields like
      </p>
    </>
  );
}

export default AboutMathematics;
