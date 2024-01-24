import { useState } from "react";
import DatalistOption from "./DatalistOption";

interface Props {
  characters: {
    name: string;
    gender: string;
    debutGame: string;
    archetype: string[];
    appearances: number;
  }[];
  guesses: string[];
  submit: (name: string) => void;
}

const AnswerBar = ({ characters, guesses, submit }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [hoveringMenu, setHoveringMenu] = useState(false);

  const onClick = (name: string) => {
    setHoveringMenu(false);
    setInputValue("");
    setFocused(false);
    submit(name);
  };

  return (
    <div>
      <input
        id="answerBar"
        list="CharacterList"
        placeholder="Choose a Street Fighter Character..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {(focused || hoveringMenu) && inputValue !== "" && (
        <div
          onMouseEnter={() => setHoveringMenu(true)}
          onMouseLeave={() => setHoveringMenu(false)}
          id="CharacterList"
        >
          {characters.map(
            (char, idx) =>
              char.name.toLowerCase().includes(inputValue.toLowerCase()) &&
              !guesses.some((item) => item === char.name) && (
                <DatalistOption
                  name={char.name}
                  key={idx}
                  onClick={onClick}
                ></DatalistOption>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default AnswerBar;
