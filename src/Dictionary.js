import { useState } from "react";

export default function Dictionary() {
  const [userInput, setUserInput] = useState("");
  function getDefinition(event) {
    event.preventDefault();
    alert(`looking for ${userInput} definiton`);
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
