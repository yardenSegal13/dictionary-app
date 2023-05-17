export default function Examples(props) {
  if (props.examples) {
    return (
      <div>
        <strong>Example:</strong>
        <em> {props.examples}</em>
      </div>
    );
  } else {
    return null;
  }
}
