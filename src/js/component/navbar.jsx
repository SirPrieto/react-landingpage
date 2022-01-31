import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img
						src="/docs/5.1/assets/brand/bootstrap-logo.svg"
						alt=""
						width="30"
						height="24"
						className="d-inline-block align-text-top"
					/>
					Start Bootstrap
				</a>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a
							className="nav-link active"
							aria-current="page"
							href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Service
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link " href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
