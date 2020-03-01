import React,{Component} from 'react';

class Footer extends Component{
	constructor(props){
		super();

	}
	render(){
		return (
	<div className="site-section bg-dark">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-7">
            <p>
           	Post your lost or found credit cards and get rewarded ...<br/>
            &copy;
            <script>
            document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-white" aria-hidden="true"></i> by <a href="https://bit.ly/feranmidev" target="_blank">DevFeranmi</a>
            
            </p>
          </div>
        </div>
      </div>
    </div>
			)
	}
}
export default Footer;