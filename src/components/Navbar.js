import { useState, useEffect } from "react";
import goldLogo from "../assets/images/one-million-logo-gold.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	const [activeLink, setActiveLink] = useState(location.pathname);

	useEffect(() => {
		setActiveLink(location.pathname);
		document.querySelector("nav #logo").src = goldLogo;
		document.querySelector("nav").classList.remove("active");
	}, [location]);

	const handleLinkClick = path => {
		setActiveLink(path);
	};

	return (
		<nav>
			<Link to="/">
				<img src={goldLogo} id="logo" alt="Logo" />
			</Link>
			<ul>
				<li>
					<Link to="/" className={activeLink === "/" ? "active" : ""} onClick={() => handleLinkClick("/")}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/menu" className={activeLink === "/menu" ? "active" : ""} onClick={() => handleLinkClick("/menu")}>
						Menu
					</Link>
				</li>
			</ul>
			<div className="hamburger">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</nav>
	);
};

export default Navbar;
