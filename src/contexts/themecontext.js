import React,{Component,createContext} from 'react';
import Swal from 'sweetalert2';
import './t.css';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
	constructor(){
	super();
	this.state = {
		loggedin:false,
		useremail:'',
		usertoken:'',
		usernumber:'',
	}
	this.handleLogin = this.handleLogin.bind(this);
	this.handlePassword  = this.handlePassword.bind(this);

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
	handlePassword(){
		Swal.fire({
			icon:'question',
			text:"Enter your password",
			input:"password",
			inputAttributes:{
				required:true,
				minlength:6,
			},
			allowEscapeKey:false,
			allowOutsideClick:false,
			showCloseButton:false,
			validationMessage:'Enter your password?',

		})
		.then((password)=>{
			if(password.value){
				fetch("http://localhost/backend/cardapp/password")
				.then(response=>response.text())
				.then((data)=>{
					console.log(data);
					if(data===200){
						console.log('good');
					}
					else if(data==203){
				Swal.insertQueueStep({
		          icon: 'error',
		          title: 'Invalid Password',
		          confirmButtonText:'OK',
		        })	
					}
					else {
						Swal.insertQueueStep({
		          icon: 'error',
		          title: 'Invalid Password',
		          confirmButtonText:'OK',
		        })
					}
				})
				.catch((err)=>{
					Swal.insertQueueStep({
		          icon: 'error',
		          title: 'Error Occured',
		          confirmButtonText:'OK',
		        })
					this.setState({usernumber:''})
					this.handeLogin();
				})
			}
			else {
				Swal.insertQueueStep({
		          icon: 'error',
		          title: 'Invalid Password',
		          confirmButtonText:'OK',
		        })
		        this.setState({usernumber:''})
		        this.handleLogin();

			}
		})
		.catch((err)=>{
			Swal.fire({
				icon:'error',
				text:"Error occured while processing your request",
				showConfirmButton:false,
				timer:5000,
			})
		})
	}
	handleLogin(){
		Swal.fire({
			text:'Enter your phone number?',
			input:'number',
			inputAttributes:{
				required:true,
				minlength:10,
				maxlength:14,
			},
			backdrop:'#ffd900',
			background:'#000',
			customClass: {
		    confirmButton: 'btn btn-warning text-black',
		    cancelButton: 'btn bg-dark text-white',
		 	input: 'myinput',
		 	icon:'ic',
			},
			validationMessage:'Phone number must be more than 10 characters and be less than 15 characters',
			allowOutsideClick:false,
			allowEscapeKey:false,
			showCloseButton:false,
			confirmButtonText:'Sign In',
			preConfirm:function(e){
				console.log(e);
				if(e){
					var n = e.value*1;
					if(n==NaN){
						Swal.insertQueueStep({
		          icon: 'error',
		          title: 'Invalid or Incorrect Mobile Phone Number',
		         timer:2000,
		         showProgressBar:true,
		        })
		        .then((r)=>{
		        	this.handleLogin();
		        })	
					}
				}
				else {
					return false;
				}
			},
		})
		.then((number)=>{
			if(number.value){
				//
				this.setState({usernumber:number.value});
				//send number to server to check if number already available if yes 
				//ask for password
				//else ask for name and email address and location
				this.handleLoading();
				fetch("http://localhost/backend/cardapp/login/",{
					body:parseInt(this.state.usernumber),
					method:'POST',
				})
				.then(response => response.text())
				.then((data)=>{
					console.log(data);
					if(data==200){
						//initiate password 
						
						
						this.handlePassword();
						
					}
					else if(data==201){
						//initiate signup
						
					}
					else {
						Swal.fire({
							icon:'warning',
							text:'Incorrect or Invalid Mobile Phone number',
							showConfirmButton:false,
						})
						.then((r)=>{
							this.handleLogin();
						})
					}
				})
				.catch((err)=>{
					console.log(err);
					Swal.fire({
						icon:'error',
						text:'Error occured while processing your request',
						timer:5000,
						showConfirmButton:false,

					}).then((after)=>{
						this.handleLogin();
					})
				})
			}
			else {
				this.handleLogin();
			}
		})
	}
	render(){
		return (
				<ThemeContext.Provider value={{...this.state,handleLogin:this.handleLogin}}>
				{this.props.children}
				</ThemeContext.Provider>
			)
	}

}
export default ThemeContextProvider;