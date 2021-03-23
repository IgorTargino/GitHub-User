import { Profile, Input } from "./components";

import "./styles/global.scss";
import ContextProvider from "./context";
// Utility Types

function App() { 
  
  return (
    <ContextProvider >
      <div className="App">
        <Input/> 
        <Profile/>
      </div>
    </ContextProvider>
  );
}

export default App;
