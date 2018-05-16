import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSingleItem } from "../actions";

class SingleItem extends Component {
	componentDidMount() {
		this.props.getSingleItem(this.props.match.params.id);
	}

	render() {
		console.log("Single Props:", this.props);

		const { title, details } = this.props.item;

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
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		item: state.list.single
	};
}

export default connect(mapStateToProps, { getSingleItem })(SingleItem);

//display all available info under the item except the userId to the user in hte single item page;
//example const time = new Date (timestamp#);
//add 2 buttons: toggle if its complete or not (API call for that/server will change that in the database and send obj back),also change the name on the button to say true or false, and delete the single item/redirect you back to the list (same as the add item);
