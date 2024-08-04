import coldDrinkIcon from "../assets/icons/cold-drinks/natural-juice.png";
import mixIcon from "../assets/icons/mix/mexico-pomegranate.png";
import bubblesIcon from "../assets/icons/bubbles/strawberry-bubbles.png";
import hotdrinksIcon from "../assets/icons/hot-drinks/latte.png";
import bakeryIcon from "../assets/icons/bakery/brownies.png";
import cakeIcon from "../assets/icons/cake/nutella-cake.png";
import cheesecakeIcon from "../assets/icons/cheesecake/pistachio-cheesecake.png";
import milkcakeIcon from "../assets/icons/milkcake/caramel-cake.png";
import gelatoIcon from "../assets/icons/gelato/lotus.png";
import icecreamIcon from "../assets/icons/icecream/soft.png";
import wafflecrepeIcon from "../assets/icons/waffle-crepe/waffle-burger.png";
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
				<Link to="/menu/bubbles" className="selection-card">
					<div>
						<img src={bubblesIcon} alt="" />
					</div>
					<h3>Bubbles Juice</h3>
				</Link>
				<Link to="/menu/hotdrinks" className="selection-card">
					<div>
						<img src={hotdrinksIcon} alt="" />
					</div>
					<h3>Hot Drinks</h3>
				</Link>
				<Link to="/menu/bakery" className="selection-card">
					<div>
						<img src={bakeryIcon} alt="" />
					</div>
					<h3>Bakery</h3>
				</Link>
				<Link to="/menu/cake" className="selection-card">
					<div>
						<img src={cakeIcon} alt="" />
					</div>
					<h3>Cake</h3>
				</Link>
				<Link to="/menu/cheesecake" className="selection-card">
					<div>
						<img src={cheesecakeIcon} alt="" />
					</div>
					<h3>Cheesecake</h3>
				</Link>
				<Link to="/menu/milkcake" className="selection-card">
					<div>
						<img src={milkcakeIcon} alt="" />
					</div>
					<h3>Milkcake</h3>
				</Link>
				<Link to="/menu/gelato" className="selection-card">
					<div>
						<img src={gelatoIcon} alt="" />
					</div>
					<h3>Gelato</h3>
				</Link>
				<Link to="/menu/icecream" className="selection-card">
					<div>
						<img src={icecreamIcon} alt="" />
					</div>
					<h3>Ice Cream</h3>
				</Link>
				<Link to="/menu/wafflecrepe" className="selection-card">
					<div>
						<img src={wafflecrepeIcon} alt="" />
					</div>
					<h3>Waffle & Crepe</h3>
				</Link>
			</div>
		</section>
	);
};

export default Selection;
