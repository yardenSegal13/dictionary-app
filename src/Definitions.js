import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <div className="definitions" key={index}>
              <span>• {definition.definition}</span>
              <span>
                <Examples examples={definition.example} />
              </span>
              <span>
                <Synonyms synonyms={definition.synonyms} />
              </span>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
