import TopicButton from "../components/TopicButton";

interface Props {
  onClickButtons: (nextTopic: string) => void;
}

export default function Unknown({ onClickButtons }: Props) {
  const topic: string = document.getElementById("input")["value"];
  return (
    <>
      <p>
        It seems like you wrote a command for a page that at the moment I've not
        made yet, and probably I never will, since I don't think it would make
        sense to write one for{" "}
        <TopicButton
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          text={topic.slice(1)}
        />
        .
      </p>
      <p>
        If you're lost, you can go back to{" "}
        <TopicButton onClick={onClickButtons} text="about" />, which is an
        actual page
      </p>
    </>
  );
}
