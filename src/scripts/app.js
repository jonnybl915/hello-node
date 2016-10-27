// import React from 'react'
// import ReactDOM from 'react-dom'
//
// const app = function() {
//
// 	const Header = React.createClass({
// 		render: () => {
// 			return (
// 				<div>
// 					<h1>YODO</h1>
// 				   <a href="./about">Go To About Page</a>
// 				</div>
// 			)
// 		}
// 	})
//
// 	ReactDOM.render(<Header/>,document.querySelector('.container'))
// }
//
// app()
var $ = require('jQuery');
var Backbone = require('Backbone');

var UserCollection = require('./model-user.js');

var AppRouter = Backbone.Router.extend({

		routes:  {

			'*path' : 'showHomePage'
		},

		showHomePage: function(){
			document.querySelector('.container').innerHTML = "<h1>YADA</h1>";

			var userCollectionInstance = new UserCollection();
			console.log(userCollectionInstance.url);
			userCollectionInstance.fetch().then(function(){
				console.log(userCollectionInstance);
			})
		},

		initialize: function(){
			Backbone.history.start()
		}
})


var app = new AppRouter();
