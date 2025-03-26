import TopicButton from "../components/TopicButton";

interface Props {
  onClickButtons: (nextTopic: string) => void;
}

function About({ onClickButtons }: Props) {
  return (
    <>
      <p>
        Elena 💛 is my beloved girlfriend. She studies{" "}
        <TopicButton onClick={onClickButtons} text="mathematics" /> too and
        we've been together for 3 years now. She's fun and smart. We also
        traveled a bit together, like to{" "}
        <TopicButton onClick={onClickButtons} text="Iceland" />
      </p>
    </>
  );
}

export default About;
