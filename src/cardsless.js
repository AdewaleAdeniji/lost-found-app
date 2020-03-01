import React,{Component} from 'react';
import './cards.css';

export default class App extends Component{
constructor(props){
	super();
	
}
	render(){
	return (
	     <div className="site-section">
      <div className="container">
        <div className="section-heading mb-5">
          <h3>Recent Credit/Debit Cards</h3> 
        </div>

        <div className="cards">
          
            <div className="card found">
              <img src="images/hero_1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wema Bank ATM</h5>
                <p className="card-text">
                  <i className="fa fa-credit-card"></i> Ibrahim Taiwo<br/>
                  <i className="fa fa-location-arrow"></i> Lautech,Ogbomoso  <br/>
                   <i className="fa fa-bell"></i> Found<br/>
                    <i className="fa fa-clock"></i> 3 days ago  <br/>
                </p>
                <a href="#" className="btn ">Claim <i className="fa fa-hand-point-up"></i></a>
              </div>
            </div>
            <div className="card lost">
              <img src="images/hero_1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wema Bank ATM</h5>
                <p className="card-text">
                 <i className="fa fa-credit-card"></i> Ibrahim Taiwo<br/>
                  <i className="fa fa-location-arrow"></i> Lautech,Ogbomoso  <br/>
                   <i className="fa fa-bell"></i> Lost<br/>
                    <i className="fa fa-clock"></i> 3 days ago  <br/>
                </p>
                <a href="#" className="btn btn-primary">Found <i className="fa fa-hands-helping"></i></a>
              </div>
            </div>
            <div className="card lost">
              <img src="images/hero_1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wema Bank ATM</h5>
                <p className="card-text">
                  <i className="fa fa-credit-card"></i> Ibrahim Taiwo<br/>
                  <i className="fa fa-location-arrow"></i> Lautech,Ogbomoso  <br/>
                   <i className="fa fa-bell"></i> Lost<br/>
                    <i className="fa fa-clock"></i> 3 days ago  <br/>
                </p>
                <a href="#" className="btn btn-warning">Found <i className="fa fa-hands-helping"></i></a>
              </div>
            </div>



        </div>
          <button className="btn btn-blue">
            See More <i className="fa fa-angle-double-right"></i>

          </button>
      </div>
    </div>

			)
	}
}
