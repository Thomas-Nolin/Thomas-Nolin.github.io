interface Props {
  character: {
    name: string;
    gender: string;
    debutGame: string;
    archetype: string[];
    appearances: number;
  };
  answer: {
    name: string;
    gender: string;
    debutGame: string;
    archetype: string[];
    appearances: number;
  };
  isNew: boolean;
}

const gameOrder = ["SF1", "SF2", "Alpha", "SF3", "SF4", "SF5", "SF6"];

const Answer = ({ character, answer, isNew }: Props) => {
  return (
    <div className={"answerRow" + (isNew ? " newAnswer" : "")}>
      <div
        className={
          "answerElement answer" +
          (character.name === answer.name ? "Right" : "Wrong")
        }
      >
        <img
          className="answerPhoto"
          src={
            "portraits/" +
            character.name
              .toLowerCase()
              .split(".")
              .join("")
              .split(" ")
              .join("") +
            ".png"
          }
        ></img>
      </div>
      <div
        className={
          "answerElement answer" +
          (character.gender === answer.gender ? "Right" : "Wrong")
        }
      >
        {character.gender}
      </div>
      <div
        className={
          "answerElement answer" +
          (character.debutGame === answer.debutGame
            ? "Right"
            : gameOrder.indexOf(character.debutGame) <
              gameOrder.indexOf(answer.debutGame)
            ? "Above"
            : "Below")
        }
      >
        {character.debutGame}
      </div>
      <div
        className={
          "answerElement answer" +
          (JSON.stringify(character.archetype) ===
          JSON.stringify(answer.archetype)
            ? "Right"
            : character.archetype.some((elem) =>
                answer.archetype.includes(elem)
              )
            ? "Partial"
            : "Wrong")
        }
      >
        {character.archetype.join(", ")}
      </div>
      <div
        className={
          "answerElement answer" +
          (character.appearances === answer.appearances
            ? "Right"
            : character.appearances < answer.appearances
            ? "Above"
            : "Below")
        }
      >
        {character.appearances}
      </div>
    </div>
  );
};

export default Answer;
