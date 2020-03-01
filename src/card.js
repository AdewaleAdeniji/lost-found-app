import React,{Component} from 'react';

class Card extends Component{
	state = {
		cardid :null,
	}
componentDidMount(){
	var id = this.props.match.params.cardid;
	this.setState({
		cardid:id,
	})
}
	render(){
	return (
	<h1>a new card {this.state.cardid} </h1>
	)
	}
}
export default Card;