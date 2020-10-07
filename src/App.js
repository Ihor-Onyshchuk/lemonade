import React, { useEffect } from 'react';
import {dataFormater} from './services';

function App() {
  useEffect(() => {
    console.log('data formateer', dataFormater());
  }, []);

  return (
    <div className="App">
      Hello man!
    </div>
  );
}

export default App;
