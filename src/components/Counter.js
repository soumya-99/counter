import React, { Component } from "react";

export default class Counter extends Component {
	state = {
		count: 0,
	};
	render() {
		return (
			<div>
				<span>{this.formatCount()}</span>
				<button>Increment</button>
			</div>
		);
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}
