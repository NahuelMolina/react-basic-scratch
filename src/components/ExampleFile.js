import React, { Component } from 'react';
import M from 'materialize-css' //if i get it out, it not present changes

class MyClass extends Component {
	componentDidMount(){
		M.AutoInit();
	}

	render(){
		return (
			<div>
				<div className="input-field col s12">
					<select>
						<option value="disabled selected">Choose your option</option>
						<option value="1">English</option>
						<option value="2">Russisch</option>
						<option value="3">Deutsch</option>
					</select>
					<label>Language Select</label>
				</div>
			</div>
		)
	}
}

export default MyClass;