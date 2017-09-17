import React, { Component } from 'react';
class App extends Component {
  constructor()
  {
    super ();
    this.state={
      data:[],
    }
  }
  componentDidMount()
  {
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10').
    then((Response)=>Response.json()).
    then((findresponse)=>
        {
      console.log(findresponse)
      this.setState({
      data:findresponse,
      })
      })
   
  }
  render()
  {
    return(
    <div>
      {
      this.state.data.map((dynamicData, key)=>
       <div>
     <span>{dynamicData.id}     </span>
     <span>{dynamicData.name}   </span>
     {dynamicData.symbol}
        </div>
      )
    }
      </div>
      )
  }
}
export default App;