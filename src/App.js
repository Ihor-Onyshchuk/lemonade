import React, { useEffect } from 'react';
import {resultData} from './services';

function App() {
  useEffect(() => {
    console.log('result data', resultData);
  }, []);

  return (
    <div>
      Hello man!
    </div>
  );
}

export default App;
