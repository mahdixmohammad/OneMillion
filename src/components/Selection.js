import coldDrinkIcon from "../assets/icons/cold-drinks/natural-juice.png";
import mixIcon from "../assets/icons/mix/mexico-pomegranate.png";
import bubblesIcon from "../assets/icons/bubbles-icon.png";
import hotdrinksIcon from "../assets/icons/hot-drinks-icon.png";
import bakeryIcon from "../assets/icons/bakery-icon.png";
import cakeIcon from "../assets/icons/cake-icon.png";
import cheesecakeIcon from "../assets/icons/cheesecake-icon.png";
import milkcakeIcon from "../assets/icons/milkcake-icon.png";
import gelatoIcon from "../assets/icons/gelato-icon.png";
import icecreamIcon from "../assets/icons/ice-cream-icon.png";
import wafflecrepeIcon from "../assets/icons/waffle-crepe-icon.png";
import { Link } from "react-router-dom";

const Selection = () => {
	return (
		<section className="selection">
			<h2>Our Menu</h2>
			<div className="selection-container">
				<Link to="/menu/colddrinks" className="selection-card">
					<div>
						<img src={coldDrinkIcon} alt="" />
					</div>
					<h3>Cold Drinks</h3>
				</Link>
				<Link to="/menu/mix" className="selection-card">
					<div>
						<img src={mixIcon} alt="" />
					</div>
					<h3>Mix</h3>
				</Link>
				<a href="# " className="selection-card">
					<div>
						<img src={bubblesIcon} alt="" />
					</div>
					<h3>Bubbles Juice</h3>
				</a>
				<a href="# " className="selection-card">
					<div>
						<img src={hotdrinksIcon} alt="" />
					</div>
					<h3>Hot Drinks</h3>
				</a>
				<a href="# " className="selection-card">
					<div>
						<img src={bakeryIcon} alt="" />
					</div>
					<h3>Bakery</h3>
				</a>
				<a href="# " className="selection-card">
					<div>
						<img src={cakeIcon} alt="" />
					</div>
					<h3>Cake</h3>
				</a>
				<a href="# " className="selection-card">
					<div>
						<img src={cheesecakeIcon} alt="" />
					</div>
					<h3>Cheesecake</h3>
				</a>
				<a href="# " className="selection-card">
					<div>
						<img src={milkcakeIcon} alt="" />
					</div>
					<h3>Milkcake</h3>
				</a>
				<a href="# " className="selection-card">
					<div>
						<img src={gelatoIcon} alt="" />
					</div>
					<h3>Gelato</h3>
				</a>
				<a href="# " className="selection-card">
					<div>
						<img src={icecreamIcon} alt="" />
					</div>
					<h3>Ice Cream</h3>
				</a>
				<a href="# " className="selection-card">
					<div>
						<img src={wafflecrepeIcon} alt="" />
					</div>
					<h3>Waffle & Crepe</h3>
				</a>
			</div>
		</section>
	);
};

export default Selection;
