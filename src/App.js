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
		<div class="site-content">
			<div class="site-header">
				<div class="container">
					<a href="index.html" class="branding">
						<img src={logo} alt="" class="logo" />
						<div class="logo-type">
							<h1 class="site-title">ReactWeather</h1>
							<small class="site-description">Created by Ethan Shealey</small>
						</div>
					</a>

					
					<div class="mobile-navigation"></div>

				</div>
			</div> 
			
			<Forecast />

			<footer class="site-footer">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<p class="colophon">Copyright 2021 Ethan Shealey | Designed by Themezy | All rights reserved</p>
						</div>
						<div class="col-md-3 col-md-offset-1">
							<div class="social-links">
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
