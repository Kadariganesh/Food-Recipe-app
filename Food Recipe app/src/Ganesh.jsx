import React from 'react'

const Ganesh = ({data}) => {
  return (
    <div>
      <div className='row'>
      {data.map(data=>
       <div class="card" style={{"width":"18rem"}}>
       <img class="card-img-top" src={data.recipe.image} alt='Card image cap'/>
       <div class="card-body">
       <center>
        <h5 class="card-title">{data.recipe.label}</h5>
        <p class="card-text">Total amount of calories:{data.recipe.calories}</p>
        <a href='#' class="btn btn-primary">Buy</a>
       </center>
       </div>
       </div>
      )};
      </div>
    </div>
  )
}

export default Ganesh
