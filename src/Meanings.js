import Definitions from "./Definitions";
import Phonetics from "./Phonetics";
import "./Meaning.css";

export default function Meanings(props) {
  if (props.result) {
    return (
      <div>
        <section className="name-section">
          <h2>{props.result.word}</h2>
          <Phonetics phonetics={props.result.phonetics} />
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
                <Definitions meaning={meaning} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
