import './App.css';
import Banner from "./components/banner";
import Exhibit from "./components/exhibit";

function App() {
  return (
    <div className="App">
        <Banner bannerName={"The Site's title"}/>
        <Exhibit/>
    </div>
  );
}

export default App;
