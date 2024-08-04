import { Link } from "react-router-dom";
import Product from "./Product";
import strawberry from "../../assets/icons/gelato/strawberry.png";
import lemon from "../../assets/icons/gelato/lemon.png";
import bubblegum from "../../assets/icons/gelato/bubblegum.png";
import vanilla from "../../assets/icons/gelato/vanilla.png";
import ferreroRocher from "../../assets/icons/gelato/ferrero-rocher.png";
import pistachio from "../../assets/icons/gelato/pistachio.png";
import blueberry from "../../assets/icons/gelato/blueberry.png";
import lotus from "../../assets/icons/gelato/lotus.png";

const Gelato = () => {
	const gelatoTypes = {
		"Three Scoops": "4.0",
		"0.5 KG": "7.0",
		"1.0 KG": "14.0",
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
				Gelato
			</h2>
			<Product name="Strawberry" icon={strawberry} types={gelatoTypes} />
			<Product name="Lemon" icon={lemon} types={gelatoTypes} />
			<Product name="Bubblegum" icon={bubblegum} types={gelatoTypes} />
			<Product name="Vanilla" icon={vanilla} types={gelatoTypes} />
			<Product name="Ferrero Rocher" icon={ferreroRocher} types={gelatoTypes} />
			<Product name="Pistachio" icon={pistachio} types={gelatoTypes} />
			<Product name="Blueberry" icon={blueberry} types={gelatoTypes} />
			<Product name="Lotus" icon={lotus} types={gelatoTypes} />
		</div>
	);
};

export default Gelato;
