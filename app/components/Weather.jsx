var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModel');

var Weather = React.createClass({
  getInitialState: function () {
    return {
        isLoading: false

    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
        isLoading:true,
        errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
        that.setState({ isLoading: false, errorMessage: e.message});
    });
  },
  render: function () {
    var { isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
        debugger;

        if(isLoading) {
            return <h3>Fetching Weather...</h3>;
        } else if(temp && location){
            return <WeatherMessage temp={temp} location={location}/>;
        }
    }

    function renderError() {
        if(typeof errorMessage === 'string') {
            return (
                <ErrorModal/>
            );
        }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
