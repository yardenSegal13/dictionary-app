import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>My Dictionary App</h1>
        <Dictionary defaultInput="smile" />
        <footer>
          <small>
            This app was coded by{" "}
            <a href="https://roaring-meerkat-e39285.netlify.app/">
              Yarden Segal
            </a>{" "}
            and is <a href="https://github.com/yardenSegal13">open-sourced</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
