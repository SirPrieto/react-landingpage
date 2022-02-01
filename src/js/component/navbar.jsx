import React from "react";
import PropTypes from "prop-types";

export const Navbar = (props) => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img
						src={props.imageUrl}
						alt=""
						width="30"
						height="24"
						className="d-inline-block align-text-top"
					/>
					{props.title}
				</a>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a
							className="nav-link active"
							aria-current="page"
							href="#">
							{props.menuItemOne}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.menuItemTwo}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.menuItemThree}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link " href="#">
							{props.menuItemFour}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	menuItemOne: PropTypes.string,
	menuItemTwo: PropTypes.string,
	menuItemThree: PropTypes.string,
	menuItemFour: PropTypes.string,
};
