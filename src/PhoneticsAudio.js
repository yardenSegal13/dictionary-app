export default function PhoneticsAudio(props) {
  if (props.audio) {
    return (
      <span>
        <audio src={props.audio} controls />
      </span>
    );
  } else {
    return null;
  }
}
