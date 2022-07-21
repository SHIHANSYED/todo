
import { useState } from 'react';
import './App.css';

function App() {
const [input , setNewInput] =useState('');
const[addList ,setNewList ] = useState([]);

const handleChange=(event)=>{ setNewInput(event.target.value)}
const addTask=()=>{    const newAddList=[...addList , input]     
setNewList(newAddList)     }

  return (



    <div className="App">
      <div className='addTask'>
<input onChange={handleChange}/>
<button onClick={addTask}>Add TAsk</button>
    </div>



      <div className='list' key={addList.task}> 
      {addList.map((task)=>{ return <h2>{task}</h2>} )}
      
      
      </div>

    
    </div>
  );
}

export default App;
