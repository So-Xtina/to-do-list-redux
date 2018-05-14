import React, { Component } from "react";
import { connect } from "react-redux";
import { getListData } from "../actions";

class List extends Component {
	componentDidMount() {
		this.props.getListData();
	}

	render() {
		const { listData } = this.props;

		console.log("LISTDATA:", listData);

		const listItems = listData.map((item, index) => {
			return (
				<li className="collection-item" key={item._id}>
					{item.title}
				</li>
			);
		});

		return <ul className="collection">{listItems}</ul>;
	}
}

function mapStateToProps(state) {
	return {
		listData: state.list.all
	};
}

export default connect(mapStateToProps, { getListData })(List);
