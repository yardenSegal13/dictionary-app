export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="synonyms">
        <span className="synonyms-heading">Synonyms: </span>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
