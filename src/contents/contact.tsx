import TopicButton from "../components/TopicButton";

interface Props {
  onClickButtons: (nextTopic: string) => void;
}

function Contact({ onClickButtons }: Props) {
  return (
    <>
      <p>
        You can contact me by email at{" "}
         <TopicButton
          href="mailto:me@osea.dev"
          text="me@osea.dev"
        />{" "}
        or to my institutional email address{" "}
         <TopicButton
          href="mailto:me@osea.dev"
          text="oseafracchia@iusspavia.it"
        />
      </p>
      <p>
        In both cases, if you want you can send me a GnuPG/PGP encrypted email, and you can verify my signatures using my{" "}
         <TopicButton
          href="https://oxke.altervista.org/gpg/31464411.pub"
          text="gpg public key"
        />, with fingerprint ending in <code>31464411</code>.
      </p>
      <p>
        Finally, here is my{" "}
         <TopicButton
          href="https://github.com/Oxke"
          text="GitHub"
        />{" "}profile.
      </p>
    </>


  );
}

export default Contact;
