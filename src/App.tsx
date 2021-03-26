import { Profile, Input, Repos, Widget } from "./components";
import "./styles/global.scss";

import ContextProvider from "./context";
import { useEffect, useState } from "react";


function App() { 
  const [session, setSession] = useState(false); 
  
  return (
    <ContextProvider >
      <div className="App">
        <Input setSession={setSession}/> 
        {session && <Widget/>}
      </div>
    </ContextProvider>
  );
}

export default App;
