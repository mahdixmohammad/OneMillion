import { useEffect } from "react";
import homeImage from "../one-million-background.jpg";
import whiteLogo from "../assets/images/one-million-logo-white.png";
import goldLogo from "../assets/images/one-million-logo-gold.png";

const Home = () => {
	useEffect(() => {
		document.querySelector(".scroll-down").addEventListener("click", () => {
			window.scrollTo(0, document.querySelector("#home").offsetHeight - 20);
		});

		function checkNavActive() {
			if (window.scrollY <= document.querySelector("#home").offsetHeight - 80) {
				document.querySelector("nav").classList.add("active");
				document.querySelector("nav #logo").src = whiteLogo;
			} else {
				document.querySelector("nav").classList.remove("active");
				document.querySelector("nav #logo").src = goldLogo;
			}
		}

		checkNavActive();

		window.addEventListener("scroll", checkNavActive);

		return () => {
			window.removeEventListener("scroll", checkNavActive);
		};
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
