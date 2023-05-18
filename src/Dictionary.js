import { useState } from "react";
import axios from "axios";
import Meanings from "./Meanings";
import "./Dictionary.css";
import Photos from "./Photos";
export default function Dictionary(props) {
  const [userInput, setUserInput] = useState(props.defaultInput);
  const [inputResult, setInputResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function load() {
    setLoaded(true);
  }

  function handleDictionaryResponse(response) {
    setInputResult(response.data[0]);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);
    let photosApiKey = "e8d0t21311e4ab493b99bo9d8480dbcf";
    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${userInput}&key=${photosApiKey}`;
    axios.get(photosApiUrl).then(handlePhotosResponse);
  }

  function getValue(event) {
    event.preventDefault();
    search();
  }

  function handleInput(event) {
    event.preventDefault();
    setUserInput(event.target.value);
  }
  if (loaded) {
    return (
      <div>
        <section className="search-form">
          <form onSubmit={getValue}>
            <h2>What word do you want to look up?</h2>
            <input
              type="search"
              onChange={handleInput}
              defaultValue={props.defaultInput}
            />
          </form>
        </section>
        <Meanings result={inputResult} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    search();
  }
}
