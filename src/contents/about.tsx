import TopicButton from "../components/TopicButton";

interface Props {
  onClickButtons: (nextTopic: string) => void;
}

function About({ onClickButtons }: Props) {
  return (
    <>
      <p>
        Hi I'm Osea. I'm a chill guy. I've done a couple different things in a
        couple different frameworks and coding languages.
      </p>
      <p>
        Also, Osea is a student of{" "}
        <TopicButton onClick={onClickButtons} text="AI" /> and{" "}
        <TopicButton onClick={onClickButtons} text="mathematics" />
      </p>
      <p>
        Finally, the content of this website is just placeholder text. Please DO
        NOT read it.
      </p>
    </>
  );
}

export default About;
