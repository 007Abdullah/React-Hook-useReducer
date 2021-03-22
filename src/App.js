import './App.css';
import React, { useState } from 'react'
import First from './First'
import counterContext from './GlobalContex';
function App() {

  const data = useState(10);
  return (

    <div className="App">
      <counterContext.Provider value={data}>
        <First />
      </counterContext.Provider>
    </div>
  );
}

export default App;
