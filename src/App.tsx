import "./App.css";
import Logo from "./components/Logo";
import Instructions from "./components/Instructions";
import AnswerBar from "./components/AnswerBar";
import characterList from "./CharacterList.json";
import { useState } from "react";
import AnswerContainer from "./components/AnswerContainer";
import PopUpCompleted from "./components/PopUpCompleted";
import Footer from "./components/Footer";

const characters = characterList.characters;

function App() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [answer, setAnswer] = useState(
    Math.floor(Math.random() * characters.length)
  );
  const submit = (name: string) => {
    setGuesses([name].concat(guesses));
  };

  const startNewGame = () => {
    setAnswer(Math.floor(Math.random() * characters.length));
    setGuesses([]);
  };

  return (
    <div className="appContainer">
      <Logo />
      <Instructions />
      <AnswerBar characters={characters} guesses={guesses} submit={submit} />
      <AnswerContainer
        characters={characters}
        answer={characters[answer].name}
        guesses={guesses}
      />
      {guesses.length > 0 && guesses[0] === characters[answer].name && (
        <PopUpCompleted
          answer={characters[answer].name}
          tries={guesses.length}
          onClick={startNewGame}
        />
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
