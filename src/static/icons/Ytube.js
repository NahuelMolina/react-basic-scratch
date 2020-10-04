import { IconContext } from 'react-icons';
import { FaTwitter } from 'react-icons/fa';
import React, { Component } from 'react';
import { render } from 'react-dom';


class YTube extends Component {

	style = {
		fontSize: '30px', 
		color: "rgb(0, 123, 255)"
	}

	render(){
		return (
   			<IconContext.Provider value={{ style: this.style}}>
    		   <div>
    		     <FaYoutube />
    		   </div>
    		</IconContext.Provider>
  		)
	}
}

export default YTube;