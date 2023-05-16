import { useState } from "react";
import axios from "axios";
import Meanings from "./Meanings";

export default function Dictionary() {
  const [userInput, setUserInput] = useState(null);
  const [inputResult, setInputResult] = useState(null);

  function handleResponse(response) {
    setInputResult(response.data[0]);
  }

  function getValue(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleInput(event) {
    event.preventDefault();
    setUserInput(event.target.value);
  }

  return (
    <form onSubmit={getValue}>
      <input type="search" onChange={handleInput} />
      <Meanings result={inputResult} />
    </form>
  );
}
