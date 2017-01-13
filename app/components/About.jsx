var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className="text-center page-title">About</h3>
        <p>This is a simple React Application that uses the Open Weather Map API to search for the weather by searching the city's name</p>
        <p>Here are some tools that I used to coorect the applicaiton!</p>
         <ul>
             <li>
                 <a href="https://facebook.github.io/react">React</a> - React JavaScript Framework used!
             </li>
             <li>
                 <a href="http://openweathermap.org">Open Weather Map</a> - I used the Open Weather map to search for weather the city name.
             </li>
         </ul>
      </div>
    );
  }
});

module.exports = About;
