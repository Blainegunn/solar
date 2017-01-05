var React = require('react');
var ReactDom = require('react-dom');
require("!style-loader!css-loader!sass-loader!./styles/main.scss");

var Nav =  React.createClass({
	render: function() {
		return (
			<div>
				<nav>
				This is the menu for {this.props.name}
				</nav>
			</div>
		)
	}
});




ReactDom.render(
 <Nav name="blaine"/>,
 document.querySelector('#app')
)