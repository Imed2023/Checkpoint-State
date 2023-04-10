import './App.css';
import { useState } from 'react';
import Person from './Component/Person';



function App() {

  const [showperson, setShowperson] = useState();

  return (
    <div className='App'>
      
        
    {showperson}

    <button onClick={ () => setShowperson(<Person/>)}>Show Person</button>
    <button onClick={ () => setShowperson()}>Hide Person</button>

    
    </div>
  );
}
export default App;
