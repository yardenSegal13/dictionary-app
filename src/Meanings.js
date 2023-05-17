import Definitions from "./Definitions";
import Phonetics from "./Phonetics";

export default function Meanings(props) {
  if (props.result) {
    return (
      <div>
        <h2>{props.result.word}</h2>
        <Phonetics phonetics={props.result.phonetics} />
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
