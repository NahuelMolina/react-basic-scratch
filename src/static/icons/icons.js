import { IconContext } from 'react-icons';
import { FaTwitter } from 'react-icons/fa';
import React, { Component } from 'react';
import { render } from 'react-dom';


class Tw extends Component {

	style = {
		fontSize: '30px', 
		color: "rgb(0, 123, 255)",
		width:'25',
		height:'25'
	}

	render(){
		return (
   			<IconContext.Provider value={{ style: this.style}}>
    		   <div>
    		     <FaTwitter />
    		     <a href="www.twitter.com"/>
    		   </div>
    		</IconContext.Provider>
  		)
	}
}
 

export default Tw;