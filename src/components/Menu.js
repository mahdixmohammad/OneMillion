import cdm1 from "../assets/images/cold-drinks-menu-1.jpg";
import cdm2 from "../assets/images/cold-drinks-menu-2.jpg";
import cdm3 from "../assets/images/cold-drinks-menu-3.jpg";
import cdm4 from "../assets/images/cold-drinks-menu-4.jpg";
import cdm5 from "../assets/images/cold-drinks-menu-5.jpg";
import cdm6 from "../assets/images/cold-drinks-menu-6.jpg";
import mixm from "../assets/images/mix-menu.jpg";
import bjm from "../assets/images/bubbles-juice-menu.jpg";
import hdm1 from "../assets/images/hot-drinks-menu-1.jpg";
import hdm2 from "../assets/images/hot-drinks-menu-2.jpg";
import ccm from "../assets/images/concentrated-coffee-menu.jpg";
import bm from "../assets/images/bakery-menu.jpg";
import cm from "../assets/images/cookies-menu.jpg";
import ckm1 from "../assets/images/cake-menu-1.jpg";
import ckm2 from "../assets/images/cake-menu-2.jpg";
import ckm3 from "../assets/images/cake-menu-3.jpg";
import ckm4 from "../assets/images/cake-menu-4.jpg";
import chck from "../assets/images/cheesecake-menu.jpg";
import mcm from "../assets/images/milk-cake-menu.jpg";
import gm from "../assets/images/gelato-menu.jpg";
import icm from "../assets/images/ice-cream-menu.jpg";
import wcm from "../assets/images/waffle-crepe-menu.jpg";
import goldLogo from "../assets/images/one-million-logo-gold.png";
import { useEffect } from "react";
import Selection from "./Selection";

const Menu = () => {
	useEffect(() => {
		document.querySelector("nav").classList.add("active");
		document.querySelector("nav #logo").src = goldLogo;
	}, []);

	return (
		<div id="menu">
			<Selection />
			{/* <img src={cdm1} className="all cold-drinks" />
			<img src={cdm2} className="all cold-drinks" />
			<img src={cdm3} className="all cold-drinks" />
			<img src={cdm4} className="all cold-drinks" />
			<img src={cdm5} className="all cold-drinks" />
			<img src={cdm6} className="all cold-drinks" />
			<img src={mixm} className="all mix" />
			<img src={bjm} className="all bubbles-juice" />
			<img src={hdm1} className="all hot-drinks" />
			<img src={hdm2} className="all hot-drinks" />
			<img src={ccm} className="all hot-drinks" />
			<img src={bm} className="all bakery" />
			<img src={cm} className="all bakery" />
			<img src={ckm1} className="all cake" />
			<img src={ckm2} className="all cake" />
			<img src={ckm3} className="all cake" />
			<img src={ckm4} className="all cake" />
			<img src={chck} className="all cheesecake" />
			<img src={mcm} className="all milkcake" />
			<img src={gm} className="all gelato" />
			<img src={icm} className="all ice-cream" />
			<img src={wcm} className="all waffle-crepe" /> */}
		</div>
	);
};

export default Menu;
