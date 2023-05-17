import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong>
                {definition.definition}
              </p>
              <p>
                <Examples examples={definition.example} />
              </p>
              <p>
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
