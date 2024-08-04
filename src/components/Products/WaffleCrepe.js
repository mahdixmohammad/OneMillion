import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import bubbleWaffle from "../../assets/icons/waffle-crepe/bubble-waffle.png";
import waffleBurger from "../../assets/icons/waffle-crepe/waffle-burger.png";
import crepe from "../../assets/icons/waffle-crepe/crepe.png";

const WaffleCrepe = () => {
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
				Waffle & Crepe
			</h2>
			<SingleProduct name="Bubble Waffle" icon={bubbleWaffle} price="5.0" />
			<SingleProduct name="Waffle Burger" icon={waffleBurger} price="5.0" />
			<SingleProduct name="Crepe" icon={crepe} price="5.0" />
		</div>
	);
};

export default WaffleCrepe;
