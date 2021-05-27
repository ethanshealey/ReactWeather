import React from 'react';
import logo from './images/logo.png'
import './App.css';
import Forecast from './Forecast.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

function App() {
  return (
		<div className="site-content">
			<div className="site-header">
				<div className="container">
					<a href="index.html" className="branding">
						<img src={logo} alt="" className="logo" />
						<div className="logo-type">
							<h1 className="site-title">ReactWeather</h1>
							<small className="site-description">Created by Ethan Shealey</small>
						</div>
					</a>

					
					<div className="mobile-navigation"></div>

				</div>
			</div> 
			<Forecast />
			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<p className="colophon">Copyright 2021 Ethan Shealey | Designed by Themezy | Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a> | All rights reserved</p>
						</div>
						<div className="col-md-3 col-md-offset-1">
							<div className="social-links">
								<a href="https://github.com/ethanshealey"><i><FontAwesomeIcon icon={['fab', 'github']} /></i></a>&nbsp;&nbsp;
								<a href="https://www.linkedin.com/in/ethan-shealey/"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>&nbsp;&nbsp;
								<a href="mailto:ethan.shealey@gmail.com"><i><FontAwesomeIcon icon={faEnvelope} /></i></a>&nbsp;&nbsp;
							</div>
						</div>
					</div>

					
				</div>
			</footer> 
		

    </div>
  );
}

export default App;
