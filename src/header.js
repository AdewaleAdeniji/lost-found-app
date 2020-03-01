import React,{Component} from 'react';
import {ThemeContext} from './contexts/themecontext.js';
import {Link} from 'react-router-dom';
export default class App extends Component{

static contextType =  ThemeContext;
  state = {
    display:'block',
  }
  componentDidMount(){

    if(!this.context.loggedin){
      this.setState({display:'block'});
    }
    else {
      this.setState({display:'none'}); 
    }
  }
	render(){

    // console.log(this.context);
		return (
	<nav className="navbar px-4 navbar-expand-lg navbar-dark bg-dark sticky-top">
          <Link className="nav-link navbar-brand" to="/"><i className="fa fa-credit-card"></i> CardApp</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                
                <Link className="nav-link" to="/"><i className="fa fa-home"></i> Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                
                <Link className="nav-link" to="/cards"><i className="fa fa-credit-card"></i> Cards</Link>
              </li>
           
              <li className="nav-item" style={{"display":this.state.display}}>
                
                <a className="nav-link"  onClick={this.context.handleLogin}><i className="fa fa-credit-card"></i>Sign In/Sign Up</a>
              </li>

            </ul>
            <form className="form-inline form-search my-2 my-lg-0 ml-auto d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Search Cards" aria-label="Search" />
              <button className="btn" type="submit">
                <span className="fa fa-search"></span>
              </button>
            </form>
             <li style={{"listStyle":"none"}}>
             <Link to="/post" className="btn btn-warning text-black px-4 py-3"
                 data-toggle="tooltip" data-placement="top" title=""
                  data-original-title="Post a Lost/Found Card">
                Post a Lost/Found Card
                </Link></li>
          </div>
        </nav>
		)
	}
}
