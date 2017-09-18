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
       
       <p> Name = {dynamicData.name} <br /> </p>

       <p>  ID = {dynamicData.id} <br /> </p>

        <p>  Symbol = {dynamicData.symbol} <br /> </p>

        <p> -------------------------   </p>
        <p> -------------------------   </p>

        </div>

      )
    }
      </div>
      )
  }
}
export default App;