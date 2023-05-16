import Definitions from "./Definitions";

export default function Meanings(props) {
  if (props.result) {
    return (
      <div>
        <h2>{props.result.word}</h2>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Definitions meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
