const Instructions = () => {
  return (
    <div className="InstructionContainer">
      Try to guess the Street Fighter Character!
      <div className="colorContainer">
        <div>
          Right answer
          <div className="square answerRight"></div>
        </div>
        <div>
          Partially right
          <div className="square answerPartial"></div>
        </div>
        <div>
          Wrong answer
          <div className="square answerWrong"></div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Instructions;
