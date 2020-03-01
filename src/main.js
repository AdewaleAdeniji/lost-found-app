import React,{Component} from 'react';
import App from './App.js';
import ThemeContextProvider from './contexts/themecontext.js';
import Header from  './header.js';
import Footer from './footer.js';
import {BrowserRouter,Route} from 'react-router-dom';
import Cards from './cards.js';
import Post from './post.js';
import Card from './card.js';

export default class Main extends Component {
	render(){
	return (
		<div>
		<ThemeContextProvider>
		<BrowserRouter>
		<Header/>
		<Route exact path="/" component={App}/>
		<Route path="/cards" component={Cards}/>
		<Route path="/post" component={Post}/>
		<Route path="/card/:cardid" component={Card}/>
		</BrowserRouter>
		

		</ThemeContextProvider>
		<Footer/>
		</div>

	)
	}
}