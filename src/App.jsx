import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="App">
      <Pagination
        count={10}
        chunk={5}
        pageChanged={(pageIndex) => console.log(pageIndex)}
      />
    </div>
  );
}

export default App;
