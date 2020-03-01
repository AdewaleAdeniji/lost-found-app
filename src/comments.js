import React,{Component} from 'react';

export default class App extends Component{
constructor(props){
	super();
	
}
	render(){
	return (
	<div className="site-section bg-dark">
      <div className="container">
        <div className="section-heading mb-5">
          <h3 style={{"color":"#ffd900"}}>What Users say about Us</h3> 
        </div>

        <div className="bd-example">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            
            <div className="carousel-inner">
              
              <div className="carousel-item active">
                <img src="images/slider_1.jpg" className="d-block w-100" alt="Image" />
                <div className="carousel-caption  d-md-block">
                  <h5 className="carousel-heading text-c"><cite>Segun Elijah</cite></h5>
                 
                  	
			            <blockquote className="text-c">
			              <p>Mist enveloped the ship three hours out from port. A shining crescent far beneath the flying vessel. All their equipment and instruments are alive.</p>
			              
			            </blockquote>
          

          			
                </div>
              </div>
              
              <div className="carousel-item">
                <img src="images/slider_1.jpg" className="d-block w-100" alt="Image"/>
                <div className="carousel-caption  d-md-block">
                  <h5 className="carousel-heading text-c"><cite>Segun shobowale</cite></h5>
                  
                  		
			            <blockquote className="text-c">
			              <p>Mist enveloped the ship three hours out from port. A shining crescent far beneath the flying vessel. All their equipment and instruments are alive.
			              </p>
			             
			            </blockquote>
			         
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="fa fa-arrow-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="fa fa-arrow-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

      </div>
    </div>

			)
	}
}
