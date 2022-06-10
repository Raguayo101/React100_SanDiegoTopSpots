import React, { Component } from 'react';
import Topspot from './topspot';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
      
      this.state = {
        topspots: [],
      }
    
  }

  componentDidMount() {
  Axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
	  .then(response => response.data)
	  .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='container'>
        <div className="card">
          <div className="card-body">
            <h1>San Diego Top Spots</h1>
            <p>A list of the top 30 places to see in San Diego, California</p>
          </div>
        </div>
        { 
        	this.state.topspots.map(topspot => (
	  	<Topspot
			key={topspot.id}
			name={topspot.name}
			description={topspot.description}
			location={topspot.location} 
		    />
	  ))
      }
      </div>
    );
  }
}

export default App;
