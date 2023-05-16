export default function Definitions(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return <li>{definition.definition}</li>;
      })}
    </div>
  );
}
