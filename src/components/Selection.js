import coldDrinkIcon from "../assets/icons/cold-drinks-icon.png";
import mixIcon from "../assets/icons/mix-icon.png";
import bubblesIcon from "../assets/icons/bubbles-icon.png";
import hotdrinksIcon from "../assets/icons/hot-drinks-icon.png";
import bakeryIcon from "../assets/icons/bakery-icon.png";
import cakeIcon from "../assets/icons/cake-icon.png";

const Selection = () => {
	return (
		<div className="selection-container">
			<a href="# " className="selection-card">
				<div>
					<img src={coldDrinkIcon} alt="" />
				</div>
				<h3>Cold Drinks</h3>
			</a>
			<a href="# " className="selection-card">
				<div>
					<img src={mixIcon} alt="" />
				</div>
				<h3>Mix</h3>
			</a>
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
					<img src={coldDrinkIcon} alt="" />
				</div>
				<h3>Cheesecake</h3>
			</a>
			<a href="# " className="selection-card">
				<div>
					<img src={coldDrinkIcon} alt="" />
				</div>
				<h3>Milkcake</h3>
			</a>
			<a href="# " className="selection-card">
				<div>
					<img src={coldDrinkIcon} alt="" />
				</div>
				<h3>Gelato</h3>
			</a>
			<a href="# " className="selection-card">
				<div>
					<img src={coldDrinkIcon} alt="" />
				</div>
				<h3>Ice Cream</h3>
			</a>
			<a href="# " className="selection-card">
				<div>
					<img src={coldDrinkIcon} alt="" />
				</div>
				<h3>Waffle & Crepe</h3>
			</a>
		</div>
	);
};

export default Selection;
