import React,{Component} from 'react';
import './form.css';

export default class Form extends Component{
constructor(props){
	super();
	
}
	render(){
	return (
			<div className="formsection">
				<div className="spanarea">Subscribe to get lost and found card updates</div>
				<div className="formarea">
				
				<input type="email" placeholder="Email Address"/>
				<input type="button" value="Subscribe"/>
				</div>

			</div>
		)
}
}
