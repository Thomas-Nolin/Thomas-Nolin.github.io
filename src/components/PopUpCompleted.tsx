import Confetti from "react-confetti";
import logo from "../assets/Logo.png";

interface Props {
  answer: string;
  tries: number;
  onClick: () => void;
}

const PopUpCompleted = ({ answer, tries, onClick }: Props) => {
  return (
    <div className="opacityBackground">
      <div className="popUp">
        <Confetti className="confetti" />
        <h1>Congratulations!</h1>
        <img
          className="imgPopUp"
          src={
            "portraits/" +
            answer.toLowerCase().split(".").join("").split(" ").join("") +
            ".png"
          }
        ></img>
        <h2>
          The answer was {answer}, and you got it in {tries.toString()} trie
          {tries >= 2 ? "s!" : "!"}
        </h2>
        <button onClick={onClick} className="buttonReplay">
          PLAY AGAIN !
        </button>
        <h4 className="bottomText">Thank you for playing</h4>
        <img src={logo} className="smallLogo"></img>
      </div>
    </div>
  );
};

export default PopUpCompleted;
