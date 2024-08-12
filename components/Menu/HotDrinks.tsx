import Link from "next/link";
import Product from "./Product";
import SingleProduct from "./SingleProduct";
import latte from "@/public/icons/hot-drinks/latte.png";
import turkishCoffee from "@/public/icons/hot-drinks/turkish-coffee.png";
import cortado from "@/public/icons/hot-drinks/cortado.png";
import espressoMacchiato from "@/public/icons/hot-drinks/expresso-machiato.png";
import caramelMacchiato from "@/public/icons/hot-drinks/caramel-machiato.png";
import v60 from "@/public/icons/hot-drinks/v60.png";
import chemex from "@/public/icons/hot-drinks/chemex.png";
import coldBrew from "@/public/icons/hot-drinks/cold-brew.png";
import Header from "./Header";

export default function HotDrinks() {
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
			<Header productName="Hot Drinks" />
			<Product name="Espresso" icon={latte} types={espressoTypes} />
			<Product name="Turkish Coffee" icon={turkishCoffee} types={turkishCoffeeTypes} />
			<Product name="Cortado" icon={cortado} types={cortadoTypes} />
			<Product name="Espresso Macchiato" icon={espressoMacchiato} types={expressoMacchiatoTypes} />
			<Product name="Caramel Macchiato" icon={caramelMacchiato} types={caramelMacchiatoTypes} />
			<SingleProduct name="V60" icon={v60} price="4.0" />
			<SingleProduct name="Chemex" icon={chemex} price="4.0" />
			<SingleProduct name="Cold Brew" icon={coldBrew} price="5.5" />
		</div>
	);
}
