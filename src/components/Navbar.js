import { useState, useEffect } from "react";
import whiteLogo from "../assets/images/one-million-logo-white.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	const [activeLink, setActiveLink] = useState(location.pathname);

	useEffect(() => {
		setActiveLink(location.pathname);
	}, [location]);

	const handleLinkClick = path => {
		setActiveLink(path);
	};

	return (
		<nav>
			<Link to="/">
				<img src={whiteLogo} id="logo" alt="Logo" />
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
