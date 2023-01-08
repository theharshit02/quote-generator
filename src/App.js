import { useState } from 'react';
import './App.css';
import Quotebox from './components/quotebox/quotebox';

function App() {
  const [color, setcolor] = useState("")
  function main(e){
    setcolor(e)
  }
  return (
    <div style={{backgroundColor: color}}className="main">
      <Quotebox onClick={main}/>
    </div>
  );
}

export default App;
