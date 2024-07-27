import { useEffect } from "react";
import whiteLogo from "../assets/images/one-million-logo-white.png";
import goldLogo from "../assets/images/one-million-logo-gold.png";

const Navbar = () => {
	const arrow = document.querySelector(".arrow");
	const dropdown = document.querySelector(".dropdown");

	const arrowClick = () => {
		arrow.classList.toggle("active");
		dropdown.classList.toggle("active");
		if (dropdown.classList.contains("active")) {
			setTimeout(() => {
				dropdown.style.zIndex = "1000";
			}, 500);
		} else {
			dropdown.style.zIndex = "-1";
		}
	};

	const hamburgerClick = () => {
		arrow.classList.toggle("active");
		dropdown.classList.toggle("active");
		if (dropdown.classList.contains("active")) {
			setTimeout(() => {
				dropdown.style.zIndex = "1000";
			}, 500);
		} else {
			dropdown.style.zIndex = "-1";
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= document.querySelector("#home").offsetHeight - 100) {
				document.querySelector("nav").classList.add("active");
				document.querySelector("nav #logo").src = goldLogo;
			} else {
				document.querySelector("nav").classList.remove("active");
				document.querySelector("nav #logo").src = whiteLogo;
			}
		});
	});

	return (
		<nav>
			<a href="#top">
				<img src={whiteLogo} id="logo" alt="" />
			</a>
			<ul>
				<li>
					<div onClick={arrowClick} className="arrow">
						<a href="#top">Menu</a>
						<div>
							<span className="larr"></span>
							<span className="rarr"></span>
						</div>
					</div>
				</li>
			</ul>
			<div onClick={hamburgerClick} className="hamburger">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</nav>
	);
};

export default Navbar;
