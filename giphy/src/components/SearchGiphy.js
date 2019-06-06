import React, {Component} from 'react';
import GifCard from "./GifCard"
import axios from 'axios';

let APILINK = "https://api.giphy.com/v1/gifs/search?api_key="
let APIKEY = "IKONAOgWbMX8AVNjI8H9R5xheLew0UXd"
let ACTION = "&q="
let EXTRA = "&limit=25&offset=0&rating=G&lang=en"

class SearchGiphy extends Component {
  constructor(){
      super();
      this.state={
          giflink: "",
          searchword:"",
          data: []
      }
      this.handleSearchKey = this.handleSearchKey.bind(this);
      this.getResults = this.getResults.bind(this);
  }

  handleSearchKey(event){
      this.setState({searchword: event.target.value});
      console.log(this.state.searchword);
  }

  getResults(){
    axios.get(APILINK+APIKEY+ACTION+this.state.searchword+EXTRA)
        .then(response=>{
            let result = response.data.data;
            console.log(result);
            this.setState({data:result});
        })
  }

    
  render(){
    let gifData = this.state.data.map((gif)=>
    <div>
        <img src={gif.url_embed}></img>
        {/* <div> {gif.url} </div> */}
    </div>
    )
  return (
    <div className="App">
      Welcome to the GIPHY world! GIF away!
      <div>
          Search for a GIF:
          <input value={this.state.searchword} onChange={this.handleSearchKey} type="text"/>
          <button onClick={this.getResults}>Go</button>
      </div>
      <div>{gifData}</div>

      <div>
        <GifCard gifs={this.state.data}/>
    </div>
    </div>
  );
  }
}

export default SearchGiphy;
