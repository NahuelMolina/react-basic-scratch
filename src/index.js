import { render } from 'react-dom';
import React from 'react';

//bootstrap plugins
//import $ from 'jquery';
//import bootstrap from 'bootstrap';
//import { createPopper } from '@popperjs/core';

//components
import App from './components/App';
import Example from './components/Root';
import Third from './components/Third';
import Mate from './components/ExampleFile';

//styles => css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'

// images
import fest from './static/fest.jpg';
import jungle from './static/jungle.jpg';
import oto from './static/otoño.jpg'; 

//design

render(<Example/>, document.getElementById('root'));

render(<App/>, document.getElementById('app'));

render(<Third/>, document.getElementById('third'));

render(<Mate/>, document.getElementById('mate'));







