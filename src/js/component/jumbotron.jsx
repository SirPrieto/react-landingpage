import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = (props) => {
	return (
		<div className="p-5 mb-4 bg-light rounded-3">
			<div className="container-fluid py-5">
				<h1 className="display-5 fw-bold">{props.name}</h1>
				<p className="col-md-8 fs-4">{props.description}</p>
				<button className="btn btn-primary btn-lg" type="button">
					{props.buttonJumbo}
				</button>
			</div>
		</div>
	);
};

Jumbotron.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	buttonJumbo: PropTypes.string,
};
