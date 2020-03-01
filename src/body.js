import React,{Component} from 'react';
import './body.css';
import {ThemeContext} from './contexts/themecontext.js';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
export default class Body extends Component{
static contextType =  ThemeContext;
	componentDidMount(){
		Swal.fire({
			text:'Loading',
			showConfirmButton:false,
			timer:1,
			footer:'<i class="fa fa-spinner fa-spin"></i>',
		});
		window.scrollTo(0,0);
	}
	render(){
		return (
			<div className="site-section bg-image bgtop" style={{"backgroundImage":"url('images/hero_1.jpg')"}}>
     		 <div className="container">
		        <div className="row justify-content-center">
		          <div className="col-md-7 mx-auto text-center align-self-center">
		            <h1 className="font-weight-bold mb-0 text-black titletext">
		            	CardApp
		            </h1>
		            <p className="text-black">
		            	Easily post your lost or found atm cards and get instant rewards
		            </p>
		            <p><Link to="/post" className="btn btn-warning text-white px-4 py-3"
		             data-toggle="tooltip" data-placement="top" title=""
		              data-original-title="Post a Lost/Found Card">
		            Post a Lost/Found Card
		            </Link></p>
		   
		   <p><Link to="/cards"  data-toggle="tooltip" data-placement="bottom" title=""
		    data-original-title="Go to cards Section" className="btn bg-dark text-c px-4 py-3">
		            		Go to Cards Section
		            </Link></p>
		          </div>
		        </div>
		        
		      </div>
		    </div>


			)
	}
}
