import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSingleItem, toggleItemComplete } from "../actions";

class SingleItem extends Component {
	componentDidMount() {
		this.props.getSingleItem(this.props.match.params.id);
	}

	handleToggleComplete() {
		this.props.toggleItemComplete(this.props.match.params.id);
	}

	render() {
		console.log("Single Props:", this.props);

		const { title, details, complete } = this.props.item;

		return (
			<div>
				<h1 className="center">To Do Item</h1>
				<div className="row right-align">
					<Link to="/" className="btn blue-grey">
						View Full List
					</Link>
				</div>
				<h4>{title}</h4>
				<p>{details}</p>
				<p>Item is {complete ? "completed" : "incomplete"}</p>
				<button className={`btn ${complete ? "teal" : "red"}`} onClick={this.handleToggleComplete.bind(this)}>
					{complete ? "Make Incomplete" : "Complete Item"}
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		item: state.list.single
	};
}

export default connect(mapStateToProps, { getSingleItem, toggleItemComplete })(SingleItem);

//display all available info under the item except the userId to the user in hte single item page;
//example const time = new Date (timestamp#);
//add 2 buttons: toggle if its complete or not (API call for that/server will change that in the database and send obj back),also change the name on the button to say true or false, and delete the single item/redirect you back to the list (same as the add item);
