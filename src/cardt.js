import React,{Component} from 'react';

class Card extends Component{
	constructor(props){

	}

	render(){
		return {
			{
				this.props.items.map((item,index)=>{
					console.log(item);
				})
			}
		}
	}
}
