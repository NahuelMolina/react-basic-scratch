import { render } from 'react-dom';
import React from 'react';
import { IconContext } from 'react-icons';
import { FaTwitter } from 'react-icons/fa';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Icon from '@material-ui/core/Icon';



//components
import App from './components/App';
import Example from './components/Root';
import Third from './components/Third';
import Mytext from './components/text_medium';


//icons components from icon library


//const { Amazon, Reddit } = require('./icons/social-media');

//styles => yeti/bootstrap
import './styles/bootstrap.css';

// images
import fest from './static/fest.jpg';
import jungle from './static/jungle.jpg';
import oto from './static/otoño.jpg'; 

//icons components
import Pew from './components/Pew-icon.js';

//design

render(<Example/>, document.getElementById('root'));

render(<App/>, document.getElementById('app'));

render(<Pew/>, document.getElementById('pew-icon'));

render(<Third/>, document.getElementById('third'));

render(<Mytext/>, document.getElementById('mytext'));

render(<Tw/>, document.getElementById('tw'));







