import React,{Component} from 'react';
import './cards.css';

export default class App extends Component{
constructor(props){
	super();
	this.state ={
    display:'block',
    cards:'',
  }
}
handleCardClick(e){
  console.log(e);
}
componentDidMount(){
  window.scrollTo(0,0);
  this.handlefetch();
}
handlefetch(){
  fetch("http://localhost/backend/cardapp/cards/card/")
  .then(response=>response.json())
  .then((data)=>{
    var cards = data;
    //console.log(data);
    
    var oc = `<div class="cards" id="cards">`;
    var od = '</div>';
    var obj = '';
    var count = 0;
    cards.cards.forEach((item,index)=>{
      if(item==''){

      }
      else {
          var cardname = item.cardname;
          if(cardname==undefined){

          }
          else{
          var cardtype = item.cardtype;
          console.log(cardname,cardtype);
          var cardaddress = item.cardaddress;
          var cardid = item.cardid;
          var cardbank = item.cardbank;
          var cardate = item.cardate;

          if(cardtype=="true"){
            var o = 'lost';
            var j = 'Found';
          }
          else {
            var o = 'found';
            var j = 'Claim';
          }

          if(count==0){
            var appe = oc;
            var ope = '';
            count++;
          }
          else if(count==3){
            var ope = od;
            count++;
            count = 0;
            var appe = '';
          }
          else {
            var ope = '';
            var appe = '';
            count++;
          }

          console.log(count);
          var card = appe+`<div class="card ${o}">
              <img src="images/hero_1.jpg" class="card-img-top" alt="Image for Card"/>
              <div class="card-body">
                <h5 class="card-title">${cardbank}</h5>
                <p class="card-text">
                <i class="fa fa-credit-card"></i><span class="myname"> ${cardname}</span><br/>
                  <i class="fa fa-location-arrow"></i> ${cardaddress} <br/>
                   <i class="fa fa-bell"></i> ${o}<br/>
                    <i class="fa fa-clock"></i> 3 days ago  <br/>
                </p>
                <a href="/card/${cardid}" class="btn ">${j}<i class="fa fa-hand-point-up"></i></a>
              </div>
            </div>`+ope;
          
          obj += card;
         // console.log(card);
      }
      

      }
    })
     // console.log(obj);
     this.setState({display:'none'});
      document.getElementById('areacoder').innerHTML += obj;
      let c = `
          <button class="btn btn-blue">
            Load More <i class="fa fa-recycle"></i>

          </button>`;
          document.getElementById('areacoder').innerHTML += c;

  })
  .catch((err)=>{
    //could not fetch click here to retry 
    this.props.history.push("/cards");
    console.log(err);
  })
}
	render(){
	return (
	     <div className="site-section">
      <div className="container me areacoder" id="areacoder">
        <div className="section-heading mb-5">
          <h3>Credit/Debit Cards</h3> 
        </div>

       <i className="fa fa-spinner fa-spin" style={{display:this.state.display}}></i>
        
      </div>
    </div>

			)
	}
}
