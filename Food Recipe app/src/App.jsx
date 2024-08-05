import React,{useState} from 'react'
import Ganesh from './Ganesh';
const App = () => {
  const[search,setSearch]=useState("");
  const[data,setData]=useState([]);
  const YOUR_APP_ID="01541e56";
  const YOUR_APP_KEY="662e0f9bd37422c574adc7d87fc7d404";
  const changeHandler = (e) =>{
    setSearch(e.target.value);
  };
  const submitHandler = (e) =>{
    e.preventDefault();
    
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data=>setData(data.hits)
    )
  };
  return (
    <div className='top'>
      <center>
        <h1>Food Recipe App</h1><br/>
        <form onSubmit={submitHandler}>
          <input type='text' value={search} onChange={changeHandler}/><br/>
          <br/>
          <input type='submit' className='btn btn-primary' value="search"/>
        </form>
        {data.length>=1 ?<Ganesh data={data}/>:null}
      </center>
    </div>
  )
}

export default App
