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
    fetch('http://facebook.github.io/react-native/movies.json').
    then((Response)=>Response.json()).
    then((findresponse)=>
        {
      this.setState({
        data:findresponse.movie,
      })
    })
  }
  render()
  {
    return(
    <div>
      {
      this.state.data.map((dynamicData,key)=>
       <div>
      <span>{dynamicData.title}: </span>  
        <spane>{dynamicData.releaseYear}</spane>
        </div>
      )
    }
      </div>
      )
  }
}
export default App;