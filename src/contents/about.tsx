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
        I am a student of <TopicButton onClick={onClickButtons} text="mathematics" /> and{" "}
        <TopicButton onClick={onClickButtons} text="AI" /> at the{" "}
        <TopicButton
          href="https://portale.unipv.it/it"
          text="University of Pavia"
        />
      </p>
      <p>
        I have a lot of interests and passions and I love learning new things.
        Right now I'm trying to study Icelandic, even though I find it very
        hard. In my spare time, I often configure my neovim, NixOS, sway or I 
        study random topics in CS and cybersecurity.
      </p>
      <p>
        Finally, I sometimes play the viola, but I don't practice it daily
        anymore :c
      </p>
      <p>
        If you want, you can <TopicButton onClick={onClickButtons} text="contact" /> me at 
        <TopicButton
          href="mailto:me@osea.dev"
          text="me@osea.dev"
        />
      </p>
    </>
  );
}

export default About;
