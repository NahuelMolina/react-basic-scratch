import { Component } from 'react';
import { render } from  'react-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';

exports.Amazon = class Amazon extends Component {

	render(){
		return(

			<SocialMediaIconsReact   icon="amazon"  />

		)
	}
}

exports.Reddit = class Reddit extends Component {
	render(){
		return (

			<SocialMediaIconsReact icon="reddit" />

		)
	}
}




