import React, { Component } from 'react'
import Pew_icon from '../static/icons/pewdiepie.png';
import stack from '../static/icons/stack.png';
import github from '../static/icons/github.png';
import quora from '../static/icons/quora.png';
import reddit from '../static/icons/reddit.png';
import  Tw  from '../static/icons/icons';
import git2 from '../static/icons/github-svg-icon-1.jpg';

class Pew extends Component {
    render(){
      return (
          <div class="container row">
          	<div class="col sm-1">
				<img src={Pew_icon} width="30" height="30"/>
          	</div>
          	<div class="col sm-1">
				      <img src={stack} width="30" height="30"/>

          	</div>
          	<div class="col sm-1">
				<img src={quora} width="30" height="30"/>
          	</div>
          	<div class="col sm-1">
				<img src={reddit} width="30" height="30"/>
          	</div>
          	<div class="col sm-1">
				<img src={git2} width="30" height="30"/>
          	</div>
            <div class="col sm-1">
              <Tw/>
              
            </div>

            
          </div>
        )
    }
}

export default Pew;