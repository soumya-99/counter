import React from "react";

function Navbar({ totalCounters }) {
    console.log("Navbar - Rendered");
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="localhost:3000">
					Shopping Cart{" "}
					<span className="badge badge-pill badge-secondary">
						{totalCounters}
					</span>
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
