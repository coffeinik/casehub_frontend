import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './App.css';

import { Navigation } from "./Navigation";
import { VerticalNavigation } from "./VerticalNavigation";
import { CasesTree } from "./CasesTree";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="left-menu">
        <VerticalNavigation/>
        <CasesTree/>
      </div>
      <div className="content">
        
      </div>
    </div>
  );
}

export default App;
