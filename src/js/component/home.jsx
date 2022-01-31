import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./cards.jsx";
import { Footer } from "./footer.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<div className="d-flex  align-items:center">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
