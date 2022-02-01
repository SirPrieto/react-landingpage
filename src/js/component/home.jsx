import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./cards.jsx";
import { Footer } from "./footer.jsx";
import { GetYear } from "./footer.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar
				imageUrl="https://content.app-sources.com/s/47253805546778952/uploads/Images/saymyweb-logo-h300-1444239.png"
				title="My React Landing Page"
				menuItemOne="Home"
				menuItemTwo="About"
				menuItemThree="Services"
				menuItemFour="Contact"
			/>
			<Jumbotron
				name="This is a Boostrap Jumbotron"
				description="Using a series of utilities, you can create this jumbotron,
			just like the one in previous versions of Bootstrap. Check
			out the examples below for how you can remix and restyle it
			to your liking."
				buttonJumbo="Click Me"
			/>
			<div className="d-flex  justify-content:space-around ">
				<Cards
					cardImageUrl="https://img.freepik.com/free-photo/happy-family-silhouette-sunset_1303-22466.jpg?size=626&ext=jpg"
					cardTitle="This is the Card Title"
					cardText="This is a ramdon text to show how the card should looks like with some example text"
					cardButton="A Cool Button"
				/>
				<Cards
					cardImageUrl="https://image.freepik.com/free-photo/aesthetic-dark-wallpaper-background-neon-light_53876-128291.jpg"
					cardTitle="This is the Card Title"
					cardText="This is a ramdon text to show how the card should looks like with some example text"
					cardButton="A Cool Button"
				/>
				<Cards
					cardImageUrl="https://image.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
					cardTitle="This is the Card Title"
					cardText="This is a ramdon text to show how the card should looks like with some example text"
					cardButton="A Cool Button"
				/>
				<Cards
					cardImageUrl="https://image.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg"
					cardTitle="This is the Card Title"
					cardText="This is a ramdon text to show how the card should looks like with some example text"
					cardButton="A Cool Button"
				/>
			</div>
			<footer>
				<Footer
					footerTitle="Learning React.JS"
					footerCopy="Copyright &copy; "
				/>
			</footer>
		</div>
	);
};

export default Home;
