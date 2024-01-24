import Answer from "./Answer";

interface Props {
  characters: {
    name: string;
    gender: string;
    debutGame: string;
    archetype: string[];
    appearances: number;
  }[];
  answer: string;
  guesses: string[];
}

const AnswerContainer = ({ characters, answer, guesses }: Props) => {
  const answerChar = characters.find((char) => char.name === answer);
  if (answerChar === undefined) return <div />;
  return (
    <div>
      <div className="answerContainerHeader">
        <div className="headerElement">Character</div>
        <div className="headerElement">Gender</div>
        <div className="headerElement">First Game</div>
        <div className="headerElement">Archetype</div>
        <div className="headerElement">Appearances</div>
      </div>
      <div className="answerContainer">
        {guesses.map((guess, idx) => {
          const character = characters.find((char) => char.name == guess);
          if (character === undefined) return <div />;
          return (
            <Answer
              isNew={idx === 0}
              key={Math.random()}
              character={character}
              answer={answerChar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnswerContainer;
