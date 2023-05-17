export default function PhoneticsAudio(props) {
  if (props.audio) {
    return (
      <a href={props.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    );
  } else {
    return null;
  }
}
