import React from "react";
import PropTypes from "prop-types";

export const Footer = (props) => {
	return (
		<div class="row justify-content-center bg-dark my-5 py-5 text-white ">
			<div class="text-center">
				<h2 class="footer-heading">{props.footerTitle}</h2>
				<p>{props.footerCopy}</p>
			</div>
		</div>
	);
};

Footer.propTypes = {
	footerTitle: PropTypes.string,
	footerCopy: PropTypes.string,
};
