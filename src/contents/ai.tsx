import TopicButton from "../components/TopicButton";

interface Props {
  onClickButtons: (nextTopic: string) => void;
}

function AboutAICourse({ onClickButtons }: Props) {
  return (
    <>
      <p>
        The University of Pavia offers an exciting new course in Artificial
        Intelligence. It's designed to provide students with a solid foundation
        in both theoretical concepts and practical applications.
      </p>
      <p>
        The program covers topics such as{" "}
        <TopicButton onClick={onClickButtons} text="about" />,{" "}
        <TopicButton onClick={onClickButtons} text="elena" />, and{" "}
        <TopicButton onClick={onClickButtons} text="mathematics" />.
      </p>
      <p>
        Students will have the opportunity to work on hands-on projects, gain
        experience with modern AI frameworks, and collaborate with researchers
        in cutting-edge fields.
      </p>
    </>
  );
}

export default AboutAICourse;
