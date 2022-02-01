import React from "react";
import PropTypes from "prop-types";

export const Cards = (props) => {
	return (
		<div className="card">
			<img src={props.cardImageUrl} className="card-img-top" alt="..." />

			<div className="card-body">
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.cardText}</p>
				<a href="#" className="btn btn-primary">
					{props.cardButton}
				</a>
			</div>
		</div>
	);
};

Cards.propTypes = {
	cardImageUrl: PropTypes.string,
	cardTitle: PropTypes.string,
	cardText: PropTypes.string,
	cardButton: PropTypes.string,
};
