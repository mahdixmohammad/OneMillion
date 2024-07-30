import { Link } from "react-router-dom";
import coldDrink from "../../assets/icons/cold-drinks-icon.png";
import smoothie from "../../assets/icons/smoothie-icon.png";

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

	return (
		<div className="cold-drinks">
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
			<Product name="Natural Juices" icon={coldDrink} types={naturalJuiceTypes} />
			<Product name="Smoothies" icon={smoothie} types={smoothieTypes} />
		</div>
	);
};

export default ColdDrinks;

function Product({ name, icon, types }) {
	return (
		<>
			<h3>{name}</h3>
			<div className="product-container">
				<div className="product-image">
					<img src={icon} alt=""></img>
				</div>
				<div className="product-types">
					<div className="heading">
						Flavor
						<span>Dinars</span>
					</div>
					{Object.keys(types).map(key => {
						return (
							<div>
								{key}
								<span>{types[key]}</span>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
