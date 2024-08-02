import { Link } from "react-router-dom";
import Product from "./Product";
import SingleProduct from "./SingleProduct";
import latte from "../../assets/icons/hot-drinks/latte.png";
import turkishCoffee from "../../assets/icons/hot-drinks/turkish-coffee.png";
import cortado from "../../assets/icons/hot-drinks/cortado.png";
import espressoMacchiato from "../../assets/icons/hot-drinks/expresso-machiato.png";
import caramelMacchiato from "../../assets/icons/hot-drinks/caramel-machiato.png";
import v60 from "../../assets/icons/hot-drinks/v60.png";
import chemex from "../../assets/icons/hot-drinks/chemex.png";
import coldBrew from "../../assets/icons/hot-drinks/cold-brew.png";

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
			<Product name="Espresso Macchiato" icon={espressoMacchiato} types={expressoMacchiatoTypes} />
			<Product name="Caramel Macchiato" icon={caramelMacchiato} types={caramelMacchiatoTypes} />
			<SingleProduct
				name="V60"
				icon={v60}
				description="For those who love the taste of coffee with its concentrated hints and bitter sweetness, V60 coffee is an excellent choice to feel the taste of ground coffee beans distilled at calculated temperatures proportional to the amount of water."
				price="4.0"
			/>
			<SingleProduct
				name="Chemex"
				icon={chemex}
				description="For those who love the taste of coffee with its concentrated and light hints at the same time, as it is compatible with the grinding degree, which is different from 160 in a less concentrated way, it is an excellent choice for those who love light flavours in their coffee."
				price="4.0"
			/>
			<SingleProduct
				name="Cold Brew"
				icon={coldBrew}
				description="For those who love the taste of brewed coffee that has been steeped in its flavours for at least 3 days in specific proportions, cold brew coffee is an excellent choice for those who feel and desire aging in their choice."
				price="5.5"
			/>
		</div>
	);
};

export default HotDrinks;
