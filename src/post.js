import React,{Component} from 'react';
import {ThemeContext} from './contexts/themecontext.js';
//import Swal from 'sweetalert2';
import Swal from 'sweetalert2';
export default class Post extends Component{
static contextType =  ThemeContext;
constructor(props){
	super();
this.state ={
	loggedin : false,
	email:'',
	phonenumber:'',
	cardname:'',
	cardbank:'',
	date:'',
	type:true,
	usertoken:'',
	cardarea:'',
}
this.set = this.set.bind(this);
this.postnow = this.postnow.bind(this);
this.handleQue = this.handleQue.bind(this);
this.handleFound = this.handleFound.bind(this);
this.handleLost = this.handleLost.bind(this);

}
componentDidMount(){
	const login = this.context.loggedin;
	//console.log(this.context);
	this.setState({'loggedin':login});
	Swal.fire({
		icon:'question',
		backdrop:'#ffd900',
		text:'Did you lost or find the card?',
		footer:'CardApp',
		customClass: {
		    confirmButton: 'btn btn-warning text-black',
		    cancelButton: 'btn bg-dark text-white',
		  },
		  showCancelButton:true,
		  cancelButtonText:'Lost',
		  confirmButtonText:'Found',
		  reverseButtons:true,

	})
	.then((result)=>{
		if(result.value){
			
			//found..initiate return process
			this.handleFound();
		} else if (result.dismiss === Swal.DismissReason.cancel){
			//lost
			this.handleLost();

		}
		else {
			
			this.props.history.push('/');
		}
	})
}
handleFound(){
	this.setState({'type':false});
	this.handleQue();
}
handleQue(){
	Swal.fire({
		icon:'question',
		backdrop:'#000',
		background:'#ffd900',
		html:'<span class="text-black">Choose the bank who owns the card?</span>',
	input: 'select',
	  inputOptions: {
	    gtbank: 'GtBank',
	    first: 'First Bank',
	    polaris: 'Polaris Bank',
	    heritage: 'Heritage Bank',
	    access:'Access Bank',
	    zenith:'Zenith Bank',
	    fcmb:'FCMB',
	  },
	  inputAttributes:{
	  	required:true,
	  },
	  customClass: {
		    cancelButton: 'btn btn-warning text-black',
		    confirmButton: 'btn bg-dark text-white',
		  },
		  validationMessage:'Choose A bank',
		  reverseButtons:true,
  	inputPlaceholder: 'Card Bank',
  	allowOutsideClick:false,
  	allowEscapeKey:false,
  	showCancelButton:true,
  	showCloseButton:true,
  	cancelButtonText:'Cancel',
  	confirmButtonText:'Continue <i class="fa fa-angle-double-right"></i>'
	})
	.then((select)=>{
		if(select.value){
		const cardbank = select.value;
		this.setState({'cardbank':cardbank});
		Swal.fire({
			icon:'question',
		backdrop:'#000',
		background:'#ffd900',
		html:'<span class="text-black">Enter the Full Name on the Card</span>',
		input:'text',
	  customClass: {
		    cancelButton: 'btn btn-warning text-black',
		    confirmButton: 'btn bg-dark text-white',
		  },
		  reverseButtons:true,
  	inputPlaceholder: 'Card Name',
  	allowOutsideClick:false,
  	allowEscapeKey:false,
  	validationMessage:'Enter card Name .. A correct card name should be more than 10 letters and less than 20 characters',
  	showCancelButton:true,
  	showCloseButton:true,
  	cancelButtonText:'Cancel',
  	inputAttributes:{
  		required:true,
  		minLength:10,
  		maxlength:20,
  	},
  	confirmButtonText:'Continue <i class="fa fa-angle-double-right"></i>'
		})
		.then((name)=>{
	if(name.value){

			this.setState({'cardname':name.value});
			this.handleArea();
			// if(this.state.loggedin){
			// 	//this.handlePost();

			// }
			// else {
				
			// 	this.context.handleLogin();
			// 	//this.handleLogin();

			// }
	}
		})
		}
		else {
			this.props.history.push("/");
		}
	})
	console.log("found clicked");
}
handleArea(){
	if(this.state.type){
		var r = 'lost';
	}
	else {
		var r = 'found';
	}
	Swal.fire({
		icon:'question',
		backdrop:'#000',
		background:'#ffd900',
		html:'Please enter the address where the card was '+r,
		input:'text',
	  customClass: {
		    cancelButton: 'btn btn-warning text-black',
		    confirmButton: 'btn bg-dark text-white',
		  },
		  reverseButtons:true,
  	inputPlaceholder: 'Address where card was found e.g Adenike Area,Ogbomoso',
  	allowOutsideClick:false,
  	allowEscapeKey:false,
  	validationMessage:'Enter Card address',
  	showCancelButton:false,
  	showCloseButton:true,
  	cancelButtonText:'Cancel',
  	inputAttributes:{
  		required:true,
  		minLength:5,
  	},
  	confirmButtonText:'Submit <i class="fa fa-angle-double-right"></i>'
	})
	.then((area)=>{
		if(area.value){
			this.setState({"cardarea":area.value});
		if(this.context.loggedin==false){
			this.setState({"usertoken":''});
			Swal.fire({
			text:'Enter your phone number?',
			input:'number',
			inputAttributes:{
				required:true,
				minlength:11,
				maxlength:11,
			},
			backdrop:'#ffd900',
			background:'#000',
			customClass: {
		    confirmButton: 'btn btn-warning text-black',
		    cancelButton: 'btn bg-dark text-white',
		 	input: 'myinput',
		 	icon:'ic',
			},
			validationMessage:'Phone number must be 11 characters',
			allowOutsideClick:false,
			allowEscapeKey:false,
			showCloseButton:false,
			confirmButtonText:'Continue >>>',
			
		})
			.then((number)=>{
				console.log(number.value);
				if(number.value){
					this.setState({'phonenumber':number.value});
					this.postnow();
				}
				else {
					this.handleArea();
					//console.log(this.context);
				}
			})

		}
		else {
			//console.log(this.context);
			this.setState({"phonenumber":this.context.usernumber});
			this.setState({"usertoken":this.context.usertoken});
		}
		}
		else {
			this.handleArea();
		}
	})
}
postnow(){
	//console.log(this.state.cardname)
	 var today = new Date(); 
       // el_up.innerHTML = today; 
        var dd = today.getDate(); 
        var mm = today.getMonth() + 1; 
        var hours = today.getHours();
        var min = today.getMinutes();
        var yyyy = today.getFullYear(); 
        var sec = today.getSeconds();
        if (dd < 10) { 
            dd = '0' + dd; 
        } 
        if (mm < 10) { 
            mm = '0' + mm; 
        } 
        if (min < 10) { 
            min = '0' + min; 
        } 
        var dates =  hours+"|"+min+"|"+dd +"|"+mm+"|"+yyyy;
       // console.log(this.context);
        var data = dates+"~"+this.state.phonenumber+"~"+this.state.cardname+"~"+this.state.cardbank+"~"+this.state.type+"~"+this.state.usertoken+"~"+this.state.cardarea;
       // console.log(data);
        this.handleLoading();
        fetch("http://localhost/backend/cardapp/cards/",{
        	body:data,
        	method:'POST',
        })
        .then(response => response.text())
        .then((res)=>{
        	var result  = res.trim();
        	//console.log(result);
        	//console.log(typeof(result));
        	if(result==200){
        		//console.log("good");
        		Swal.fire({
		          icon: 'success',
		          title: 'Card Posted Successfully',
		          confirmButtonText:'OK',
		          showConfirmButton:false,
		          allowOutsideClick:true,
		          timer:2000,
		        })
        	.then((r)=>{
        		this.props.history.push("/cards");
        	})
        	}
        	else if(result==201){
        		this.report("error",'Request Failed ,Please try again later');
        	}
        	else if(result==203){
        		this.report("warning","This card has been posted before");
        	}
        	else if(result==400||result==401){
        		this.report("error","Invalid Phone Number");
        	}
        	else if(result==500||result==404){
        		this.report("error","Please fill all empty form fields");
        	}

        	else {
        		//na which kind result be this
        		console.log('bad');
        		this.report("error",'Request Failed ,Please try again later');
        	}
        })
        .catch((err)=>{
        	console.log(err);
        	Swal.fire({
		          icon: 'error',
		          title: 'Error Occured while processing your request,Please try again',
		         timer:10000,
		         
		         showConfirmButton:false,
		        })
		        .then((r)=>{
		        	this.handleFound();
		        })	
        })

}
handleLoading(){
		Swal.fire({
			text:'Loading',
			footer:'<i class="fa fa-spinner fa-spin"></i>',
			showConfirmButton:false,
			allowOutsideClick:false,
			allowEscapeKey:false,
			showCloseButton:false,
		})
	}
set(e,a){
	this.setState({e,a});
}
report(e,a){
	Swal.fire({
		          icon: e,
		          title: a,
		          confirmButtonText:'OK',
		          timer:3000,
		          showConfirmButton:false,
		          allowOutsideClick:true,
		        })
        	.then((r)=>{
        		this.props.history.push("/");
        	})
}
handleLost(){
	
	this.handleQue();
}
	render(){
		return (
				<h1>Post a lost/found card</h1>
			)
	}
}
