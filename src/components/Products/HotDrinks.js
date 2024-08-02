import { Link } from "react-router-dom";
import Product from "./Product";
import latte from "../../assets/icons/hot-drinks/latte.png";
import turkishCoffee from "../../assets/icons/hot-drinks/turkish-coffee.png";
import cortado from "../../assets/icons/hot-drinks/cortado.png";
import espressoMacchiato from "../../assets/icons/hot-drinks/expresso-machiato.png";
import caramelMacchiato from "../../assets/icons/hot-drinks/caramel-machiato.png";

const HotDrinks = () => {
	const espressoTypes = {
		Mocha: "3.5, 4.5",
		"White Mocha": "3.5, 4.5",
		Latte: "3.5, 4.5",
	};

	const turkishCoffeeTypes = {
		Plain: "2.5",
		Cardamom: "2.5",
		Vanilla: "2.5",
		Hazelnut: "2.5",
		Caramel: "2.5",
		Nestle: "2.5",
		French: "2.5",
		Ottoman: "3.0",
		Jicletia: "3.0",
	};

	const cortadoTypes = {
		Cortado: "3.5",
		Cappuccino: "3.5, 4.5",
		"Flat White": "3.5, 4.5",
		"Spanish Latte": "3.5, 4.5",
		"Hot Chocolate": "3.5, 4.5",
	};

	const expressoMacchiatoTypes = {
		"Expresso Macchiato": "3.5",
		"Single Esresso": "1.5",
		"Double Espresso": "2.0",
		Americano: "2.5",
	};

	const caramelMacchiatoTypes = {
		"Caramel Macchiato": "3.5, 4.5",
		Orchid: "3.5, 4.5",
		Tea: "1.0",
		"Karak Tea": "2.0, 2.5",
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
				Hot Drinks
			</h2>
			<Product name="Espresso" icon={latte} types={espressoTypes} />
			<Product name="Turkish Coffee" icon={turkishCoffee} types={turkishCoffeeTypes} />
			<Product name="Cortado" icon={cortado} types={cortadoTypes} />
			<Product name="Espress Macchiato" icon={espressoMacchiato} types={expressoMacchiatoTypes} />
			<Product name="Caramel Macchiato" icon={caramelMacchiato} types={caramelMacchiatoTypes} />
		</div>
	);
};

export default HotDrinks;
