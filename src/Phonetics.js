import PhoneticsAudio from "./PhoneticsAudio";

export default function Phonetics(props) {
  return (
    <div>
      {props.phonetics.map(function (phonetic, index) {
        if (phonetic.text && phonetic.audio) {
          return (
            <div key={index}>
              <h3>{phonetic.text.split("/").join("")}</h3>
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
