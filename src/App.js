import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles';
import Form from './components/form';
import Result from './components/results';

const Client_ID = '42ZBMD3LPDXYRVLL51XPYHFCCRNOUB5AFRFPJJDPPOHKLARF';
const Client_Secret = 'FTN5OAVNPOMFZUAXUBDBG4DHSOW1NUJLNSA45TKBII04F1EX';
const Category_ID = '52e81612bcbc57f1066b79ff';

class App extends Component {

state = {
  name: undefined,
  city: undefined,
  country: undefined,
  location: undefined,
  error: undefined

}

getRestaurant = async (e) => {

  e.preventDefault();

  const city = e.target.elements.city.value;

  const api_call = await fetch(`https://api.foursquare.com/v2/venues/search?limit=50&near=${city}&categoryId=${Category_ID}&client_id=${Client_ID}&client_secret=${Client_Secret}&v=20140806&m=foursquare`)

  const response = await api_call.json();

  if(city){
    this.setState({
      name: response.response.venues[0].name,
      city: response.response.venues[0].location.city,
      country: response.response.venues[0].location.country,
      location: response.response.venues[0].location.formattedAddress,
      error: ""
    })
  }else{
    this.setState({
      error: "Please enter your city..."
    })
  }

}

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form loadRestaurant={this.getRestaurant} />
                  <Result 
                    name={this.state.name}
                    city={this.state.city}
                    country={this.state.country}
                    location={this.state.location}
                    error={this.state.error }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>   
    );
  }
}

export default App;
