import coldDrinksIcon from "../assets/icons/cold-drinks/natural-juice.png";
import mixIcon from "../assets/icons/mix/mexico-pomegranate.png";
import bubblesIcon from "../assets/icons/bubbles/strawberry-bubbles.png";
import hotdrinksIcon from "../assets/icons/hot-drinks/latte.png";
import bakeryIcon from "../assets/icons/bakery/brownies.png";
import cakeIcon from "../assets/icons/cake/nutella-cake.png";
import cheesecakeIcon from "../assets/icons/cheesecake/pistachio-cheesecake.png";
import milkcakeIcon from "../assets/icons/milkcake/caramel-cake.png";
import gelatoIcon from "../assets/icons/gelato/strawberry.png";
import icecreamIcon from "../assets/icons/icecream/soft.png";
import wafflecrepeIcon from "../assets/icons/waffle-crepe/waffle-burger.png";
import { Link } from "react-router-dom";

export default function Card({ name, dimension }) {
	const info = {
		"Cold Drinks": [coldDrinksIcon, "/menu/colddrinks"],
		Mix: [mixIcon, "/menu/mix"],
		Bubbles: [bubblesIcon, "/menu/bubbles"],
		"Hot Drinks": [hotdrinksIcon, "/menu/hotdrinks"],
		Bakery: [bakeryIcon, "/menu/bakery"],
		Cake: [cakeIcon, "/menu/cake"],
		Cheesecake: [cheesecakeIcon, "/menu/cheesecake"],
		Milkcake: [milkcakeIcon, "/menu/milkcake"],
		Gelato: [gelatoIcon, "/menu/gelato"],
		"Ice Cream": [icecreamIcon, "/menu/icecream"],
		"Waffle & Crepe": [wafflecrepeIcon, "/menu/wafflecrepe"],
	};
	const icon = info[name][0];
	const link = info[name][1];

	return (
		<Link to={link} className="menu-card">
			<div>
				<img src={icon} alt="" style={{ width: dimension, height: dimension }} />
			</div>
			<h3>{name}</h3>
		</Link>
	);
}
