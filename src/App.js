import './App.css';
import Main from "./main";
import EconomicFakulty from "./Economic fakulty";
import StatejuristFakulty from "./Statejurist";
import Finance from "./Finance";
import Finance2 from "./Finance2";
import Infotech from "./Infotech";
import Psychology from "./Psychology";
import Linguistics from "./Linguistics";

function App() {
  return (
    <div className="App">
        <Finance2 />
        <Finance />
        <Main />
        <EconomicFakulty />
        <StatejuristFakulty />
        <Infotech />
        <Psychology />
        <Linguistics />
    </div>
  );
}

export default App;
