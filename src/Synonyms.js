export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <ul>
        <strong>Synonyms:</strong>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
