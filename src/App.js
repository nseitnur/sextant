import './App.css';
import Banner from "./components/banner";
import Exhibit from "./components/exhibit";
import AddressDisplay from "./components/AddressDisplay";

function App() {
  return (
    <div className="App">
        <Banner bannerName={"The Site's title"}/>
        <AddressDisplay/>
    </div>
  );
}

export default App;
