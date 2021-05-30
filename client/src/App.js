import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';

import Routing from './components/Routing';

import ContextWrapper from './components/ContextWrapper';

function App() {
  return (
    <div className="App">
      <ContextWrapper>
        <Routing/>     
      </ContextWrapper>
    </div>
  );
}

export default App;
