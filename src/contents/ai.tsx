import TopicButton from "../components/TopicButton";

interface Props {
  onClickButtons: (nextTopic: string) => void;
}

function AboutAICourse({ onClickButtons }: Props) {
  return (
    <>
      <p>
        The{" "}
        <TopicButton
          href="https://portale.unipv.it/it"
          text="University of Pavia"
        />
        , together with the University of Milano Statale and Milano Bicocca,
        offers since 2021 a{" "}
        <TopicButton href="https://bai.unipv.it/">
          <>
            <abbr title="Bachelor of Science">BSc</abbr> in{" "}
            <abbr title="Artificial Intelligence">AI</abbr>
          </>
        </TopicButton>
        . It's designed to provide students with many tools and some theory for
        implementing and understanding Machine Learning models and other
        Artificial Intelligence concepts, like Knowledge Representation, Natural
        Language Processing, Fuzzy Systems etc... But it also provides courses
        which are meant to give foundations in{" "}
        <TopicButton onClick={onClickButtons} text="mathematics" /> and computer
        science.
      </p>
      <p>
        Attending its courses has given me the possibility of developing many
        small projects, most notably:
      </p>
      <ul>
        <li>
          A{" "}
          <TopicButton
            href="https://github.com/Oxke/Timbre-Classification"
            text="Timbre Classification"
          />{" "}
          model, for classifying musical instruments by their sound, using the
          spectrogram as the input of the model. [2024]
        </li>
        <li>
          An{" "}
          <TopicButton href="https://github.com/Oxke/DL-Project">
            <abbr title="Multi Layer Perceptron">MLP</abbr>
          </TopicButton>{" "}
          for binary classification, with the addition of a method for a
          visualisation of the weights of the model [2024]
        </li>
        <li>
          An{" "}
          <TopicButton href="https://colab.research.google.com/drive/1bUWqFVDRYLLxD1nhOArazf9lBW8Z2KlL?usp=sharing">
            <>
              <abbr title="Natural Language Processing">NLP</abbr> project
            </>
          </TopicButton>
          aiming to detect irony in <em>X</em> tweets. It uses a Transformer
          model constructed both from scratch and fine-tuning an existing one
          (DistilBERT). [2024]
        </li>
        <li>
          A{" "}
          <TopicButton
            href="https://github.com/Oxke/Planisuss"
            text="co-existence simulation"
          />{" "}
          in Python using the Matplotlib library. It's a cellular automaton
          simulating the movement and behavior of three coexistent species.
        </li>
      </ul>
      Other small projects can be found on my{" "}
      <TopicButton href="https://github.com/Oxke" text="Github" />
    </>
  );
}

export default AboutAICourse;
