import TopicButton from "../components/TopicButton";
import LazyImage from "../components/LazyImage";

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
        I visited Iceland with my girlfriend,{" "}
        <TopicButton onClick={onClickButtons} text="Elena" />, and we had an
        amazing time exploring the country together. We took ten days to drive
        along the ring road, met some other other travelers multiple times
        throughout the journey, and we most notably ate almost always instant
        noodles, paid 56 krónar, i.e. 36 cents at the time. It was an adventure.
      </p>
      <p>
        Here are some photos from the trip
      </p>
      <LazyImage
        src="/images/iceland/iceland1.jpg"
        alt="Iceland 1"
        className="image"
      />
    </>
  );
}
