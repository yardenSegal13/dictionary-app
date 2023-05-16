import { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [userInput, setUserInput] = useState("");
  function handleResponse(response) {
    console.log(response);
  }

  function getDefinition(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleInput(event) {
    event.preventDefault();
    setUserInput(event.target.value);
  }

  return (
    <form onSubmit={getDefinition}>
      <input type="search" onChange={handleInput} />
    </form>
  );
}
