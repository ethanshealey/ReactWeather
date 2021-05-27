import React from 'react';
import umbrella from './images/icon-umberella.png'
import wind from './images/icon-wind.png'

class Forecast extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        data: [],
        location: [],
        current: [],
        forecast: [],
        url: "New York"
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    componentDidMount() {
      var loc = "New York";
      this.updateAPI(loc);
    }

    updateAPI(url) {
        fetch("http://api.weatherapi.com/v1/forecast.json?key=a60212c2ecf94da9a2101045212705&q=" + url + "&days=7&aqi=no&alerts=no")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result,
              location: result.location,
              current: result.current,
              forecast: result.forecast,
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    getMaxTemp(forecast, offset) {
        return JSON.stringify(forecast.forecastday[offset].day.maxtemp_f);
    }

    getMinTemp(forecast, offset) {
        return JSON.stringify(forecast.forecastday[offset].day.mintemp_f);
    }

    getDay(offset = 0) {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date();
        var day = d.getDay()
        if(offset + day > 6)
            offset -= 7;
        day += offset;
        return days[day];
    }

    getDate() {
        var d = new Date();
        return d.getDate();
    }

    getMonth() {
        var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec']
        var month = new Date();
        return months[month.getMonth()];
    }

    handleChange(event) {
        this.setState({url: event.target.value});
    }

    handleSubmit(event) {
        this.updateAPI(this.state.url);
        event.preventDefault();
    }
  
    render() {
      const { error, isLoaded, data, location, current, forecast } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <span>

            <div className="hero">
				<div className="container">
					<form action="#" className="find-location" onSubmit={this.handleSubmit}>
						<input type="text" placeholder="Find your location..." value={this.state.url} onChange={this.handleChange}/>
						<input type="submit" value="Find" />
					</form>

				</div>
			</div>

            <div className="forecast-table">
                <div className="container">
					<div className="forecast-container">
						<div className="today forecast">
							<div className="forecast-header">
								<div className="day" id="day">{this.getDay()}</div>
                                <div className="date">{this.getDate()} {this.getMonth()}</div>
							</div> 
							<div className="forecast-content">
                                <div className="location">{location.name}</div>
								<div className="degree">
									<div className="num">{current.temp_f}<sup>o</sup>F</div>
									<div className="forecast-icon">
										<img src={current.condition.icon} alt="" />
									</div>	
								</div>
								<span><img src={umbrella} alt="" />{forecast.forecastday[0].day.daily_chance_of_rain}%</span>
								<span><img src={wind} alt="" />{forecast.forecastday[0].day.maxwind_mph} mph</span>
							</div>
						</div>
						<div className="forecast">
							<div className="forecast-header">
								<div className="day">{this.getDay(1)}</div>
							</div> 
							<div className="forecast-content">
								<div className="forecast-icon">
									<img src={forecast.forecastday[1].day.condition.icon} alt="" width="48" /> 
								</div>
								<div className="degree">{this.getMaxTemp(forecast, 1)}<sup>o</sup>F</div>
								<small>{this.getMinTemp(forecast, 1)}<sup>o</sup></small>
							</div>
						</div>
						<div className="forecast">
							<div className="forecast-header">
								<div className="day">{this.getDay(2)}</div>
							</div> 
							<div className="forecast-content">
								<div className="forecast-icon">
									<img src={forecast.forecastday[2].day.condition.icon} alt="" width="48" />
								</div>
								<div className="degree">{this.getMaxTemp(forecast, 2)}<sup>o</sup>F</div>
								<small>{this.getMinTemp(forecast, 2)}<sup>o</sup></small>
							</div>
						</div>
						
					</div>
				</div>
                
            </div>
            </span>
        );
      }
    }
  }

  export default Forecast;