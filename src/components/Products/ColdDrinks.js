import { Link } from "react-router-dom";
import Product from "./Product";
import naturalJuice from "../../assets/icons/cold-drinks/natural-juice.png";
import smoothie from "../../assets/icons/cold-drinks/smoothie.png";
import milkshake from "../../assets/icons/cold-drinks/milkshake.png";
import redbull from "../../assets/icons/cold-drinks/redbull.png";
import mojito from "../../assets/icons/cold-drinks/mojito.png";
import daljona from "../../assets/icons/cold-drinks/dalgona.png";
import frappuccino from "../../assets/icons/cold-drinks/frappuccino.png";
import icedtea from "../../assets/icons/cold-drinks/iced-tea.png";
import icedcoffee from "../../assets/icons/cold-drinks/iced-coffee.png";

const ColdDrinks = () => {
	const naturalJuiceTypes = {
		Orange: "3.0",
		Lemon: "3.0",
		"Lemon & Mint": "3.0",
		"Orange & Mint": "3.0",
		Kiwi: "3.0",
		Strawberry: "3.0",
		Banana: "3.0",
		"Lemon & Orange": "3.0",
		"Strawberry & Banana": "3.0",
		Pineapple: "3.0",
		"Lemon & Kiwi": "3.0",
		Mango: "3.0",
		Pomegranate: "3.0",
		"Pineapple & Orange": "3.0",
		Mix: "4.0",
		Franco: "4.0",
		Consulto: "4.0",
		Salt: "4.0",
	};

	const smoothieTypes = {
		"Rose Berry": "3.5, 4.0",
		Blueberry: "3.5, 4.0",
		Kiwi: "3.5, 4.0",
		Mango: "3.5, 4.0",
		Peach: "3.5, 4.0",
		Strawberry: "3.5, 4.0",
		Banana: "3.5, 4.0",
		"Strawberry & Banana": "3.5, 4.0",
		"Passion Fruit": "3.5, 4.0",
	};

	const milkshakeTypes = {
		Strawberry: "4.0, 4.5",
		Banana: "4.0, 4.5",
		Mango: "4.0, 4.5",
		Kiwi: "4.0, 4.5",
		Blueberry: "4.0, 4.5",
		Kinder: "4.0, 4.5",
		Bounty: "4.0, 4.5",
		Snickers: "4.0, 4.5",
		Oreo: "4.0, 4.5",
		Classic: "4.0, 4.5",
		Lotus: "4.0, 4.5",
		Brownies: "5.0, 6.0",
		Pistachio: "5.0, 6.0",
		"Honey & Nuts": "5.0, 6.0",
	};

	const redbullTypes = {
		Classic: "4.0, 4.5",
		Blue: "4.0, 4.5",
		Pomegranate: "4.0, 4.5",
		Strawberry: "4.0, 4.5",
		Mix: "4.0, 4.5",
		Orange: "4.0, 4.5",
		Mojito: "4.0, 4.5",
	};

	const mojitoTypes = {
		Mojito: "3.0, 3.5",
		Blue: "3.0, 3.5",
		Strawberry: "3.0, 3.5",
		Kiwi: "3.0, 3.5",
		Pineapple: "3.0, 3.5",
		"Green Apple": "3.0, 3.5",
		Blueberry: "3.0, 3.5",
	};

	const daljonaTypes = {
		Joclet: "3.5",
		Lotus: "3.5",
		Caramel: "3.5",
		Special: "4.5",
	};

	const frappuccinoTypes = {
		Caramel: "4.0, 4.5",
		Mocha: "4.0, 4.5",
		"White Mocha": "4.0, 4.5",
		Latte: "4.0, 4.5",
		Strawberry: "4.0, 4.5",
		Kinder: "4.0, 4.5",
		Oreo: "4.0, 4.5",
		Matcha: "4.0, 4.5",
	};

	const icedteaTypes = {
		Lemon: "3.0, 3.5",
		Peach: "3.0, 3.5",
		Strawberry: "3.0, 3.5",
		"Rose Berry": "3.0, 3.5",
	};

	const icedcoffeeTypes = {
		"Iced Latte": "3.0, 3.5",
		Americano: "3.0, 3.5",
		"Spanish Latte": "3.5, 4.0",
		Joclet: "3.5, 4.0",
		"Caramel Macchiato": "3.5, 4.0",
		Mocha: "3.5, 4.0",
		"White Mocha": "3.5, 4.0",
	};

	return (
		<div className="products">
			<h2>
				<Link to="/menu">
					<div className="go-back-container">
						<svg
							data-slot="icon"
							fill="none"
							stroke-width="1.5"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							className="go-back-arrow"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"></path>
						</svg>
						Go Back
					</div>
				</Link>
				Cold Drinks
			</h2>
			<Product name="Natural Juices" icon={naturalJuice} types={naturalJuiceTypes} />
			<Product name="Smoothies" icon={smoothie} types={smoothieTypes} />
			<Product name="Milkshakes" icon={milkshake} types={milkshakeTypes} />
			<Product name="Red Bull" icon={redbull} types={redbullTypes} />
			<Product name="Mojito" icon={mojito} types={mojitoTypes} />
			<Product name="Daljona" icon={daljona} types={daljonaTypes} />
			<Product name="Frappucino" icon={frappuccino} types={frappuccinoTypes} />
			<Product name="Iced Tea" icon={icedtea} types={icedteaTypes} />
			<Product name="Iced Coffee" icon={icedcoffee} types={icedcoffeeTypes} />
		</div>
	);
};

export default ColdDrinks;
