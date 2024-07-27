import { useEffect } from "react";
import homeImage from "../one-million-background.jpg";

const Home = () => {
	useEffect(() => {
		document.querySelector(".scroll-down").addEventListener("click", () => {
			window.scrollTo(0, document.querySelector("#home").offsetHeight + 5);
			// document.querySelector("nav").classList.add("active");
		});
	}, []);
	return (
		<section id="home">
			<img src={homeImage} alt="Home" />
			<div className="scroll-down">
				<span className="larr"></span>
				<span className="rarr"></span>
			</div>
		</section>
	);
};

export default Home;
