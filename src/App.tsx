import React, {useState} from 'react';
import './App.css';
import {PageHeader, PageFooter} from './Components/Navigation/' 
import Navigation from "./Components/Navigation";



const App: React.FC = () => {
  const [currentRoute, setRoute] = useState(
    'Painel de Bordo'
);
  return (
    <div className="App">
      <PageHeader currentRoute = {currentRoute}/>
    </div>
  );
}

export default App;
