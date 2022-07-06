import './App.css';
import { useState } from 'react';
import Card from './components/Card';

function App() {

  const [cardno, setcardno] = useState('');
  
  return (
    <div className="App">
     <Card 
        length={4} 
        onChange={(value)=>{setcardno(value)}}
     />
     <h3>Your Card No :{cardno}</h3>
    </div>
  );
}

export default App;
