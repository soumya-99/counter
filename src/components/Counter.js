import React, { Component } from "react";

export default class Counter extends Component {
	state = {
		count: 0,
	};
	render() {
		return (
			<div>
				<span
					style={{ fontSize: 50, fontWeight: "bold" }}
					className="badge badge-primary m-2"
				>
					{this.formatCount()}
				</span>
				<button className="btn btn-secondary btn-sm">Increment</button>
			</div>
		);
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}
