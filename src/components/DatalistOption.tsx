interface Props {
  name: string;
  onClick: (name: string) => void;
}

const DatalistOption = ({ name, onClick }: Props) => {
  return (
    <button className="datalistOption" onClick={() => onClick(name)}>
      <img
        className="optionPortrait"
        src={
          "portraits/" +
          name.toLowerCase().split(".").join("").split(" ").join("") +
          ".png"
        }
      ></img>
      <div>{name}</div>
    </button>
  );
};

export default DatalistOption;
