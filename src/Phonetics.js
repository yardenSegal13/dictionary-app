import PhoneticsAudio from "./PhoneticsAudio";

export default function Phonetics(props) {
  return (
    <div>
      {props.phonetics.map(function (phonetic, index) {
        if (phonetic.text && phonetic.audio) {
          return (
            <div key={index}>
              <h5>{phonetic.text.split("/").join("")}</h5>
              <PhoneticsAudio audio={phonetic.audio} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
