import TopicButton from "../components/TopicButton";

interface Props {
  onClickButtons: (nextTopic: string) => void;
}

export default function Iceland({ onClickButtons }: Props) {
  return (
    <>
      <p>
        Iceland is a beautiful country with a unique culture and stunning
        landscapes. It's known for its volcanoes, geysers, hot springs, and
        glaciers. The people are friendly and welcoming, and the food is
        delicious.
      </p>
      <p>
        Osea visited Iceland with his girlfriend,{" "}
        <TopicButton onClick={onClickButtons} text="Elena" />, and they had an
        amazing time exploring the country together. They visited{" "}
        <TopicButton onClick={onClickButtons} text="AI" /> and{" "}
        <TopicButton onClick={onClickButtons} text="mathematics" />. Here are
        some photos from their trip:
      </p>
      <img
        width="100%"
        src="/images/iceland/iceland1.jpg"
        alt="Iceland 1"
        className="image"
      />
    </>
  );
}
