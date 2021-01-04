import React, { Component } from "react";

export default class Counter extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-sm-2">
					<span className={this.getBadgeClasses()} style={{fontSize: 20}}>{this.formatCount()}</span>
				</div>
				<div className="col-sm-10">
					<button
						onClick={() => this.props.onIncrement(this.props.counter)}
						className="btn btn-success btn-sm"
					>
						+
					</button>
					<button
						onClick={() => this.props.onDecrement(this.props.counter)}
						className="btn btn-info btn-sm m-2"
						disabled={this.props.counter.value === 0 ? true : false}
					>
						-
					</button>
					<button
						onClick={() => this.props.onDelete(this.props.counter.id)}
						className="btn btn-danger btn-sm"
					>
						Delete
					</button>
				</div>
			</div>
		);
	}

	getBadgeClasses = () => {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	};

	formatCount = () => {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	};
}
