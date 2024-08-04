import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import caramelCake from "../../assets/icons/milkcake/caramel-cake.png";
import pistachioCake from "../../assets/icons/milkcake/pistachio-cake.png";
import tiramisuCake from "../../assets/icons/milkcake/tiramisu-cake.png";

const Milkcake = () => {
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
				Milkcake
			</h2>
			<SingleProduct name="Caramel Cake" icon={caramelCake} price="3.0" />
			<SingleProduct name="Pistachio Cake" icon={pistachioCake} price="3.0" />
			<SingleProduct name="Caramel Cake" icon={tiramisuCake} price="3.0" />
		</div>
	);
};

export default Milkcake;
