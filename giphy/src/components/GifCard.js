import React, {Component} from 'react';


class GifCard extends Component {
    constructor(props){
        super(props);
    }
  
  render(){
  return (
    <div className="App">
       <img src={this.props.url}></img>
    </div>
    );
  }
}

export default GifCard;
