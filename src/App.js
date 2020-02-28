import React from 'react';
import { AppContextProvider, AppContext } from "./AppContext" 
import Routes from "./Routes"
import Menu from "../src/Components/Menu"
import './App.css';
import Confirm from './Components/Confirm';
import Tables from "./Components/Tables"

Menu.contextType = AppContext;
Confirm.contextType = AppContext;
Tables.contextType = AppContext;

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Routes/>
      </div>
    </AppContextProvider>
  );
}

export default App;
