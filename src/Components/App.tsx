import React, {useState, Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import TopBar from '../Containers/TopBar';





const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
       <TopBar/>
    </React.Fragment>
    
    
  );
}

export default App;
