import { useState } from "react";
import axios from "axios";
import Meanings from "./Meanings";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [userInput, setUserInput] = useState(props.defaultInput);
  const [inputResult, setInputResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setInputResult(response.data[0]);
  }

  function load() {
    setLoaded(true);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;
    axios.get(apiUrl).then(handleResponse);
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
      </div>
    );
  } else {
    load();
    search();
  }
}
