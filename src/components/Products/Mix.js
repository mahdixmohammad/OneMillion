import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import mix from "../../assets/icons/mix/mexico-pomegranate.png";
import icerose from "../../assets/icons/mix/ice-rose.png";
import skycloud from "../../assets/icons/mix/sky-cloud.png";
import flowermoon from "../../assets/icons/mix/flower-moon.png";
import oceandream from "../../assets/icons/mix/ocean-dream.png";
import wintermojito from "../../assets/icons/mix/winter-mojito.png";

const Mix = () => {
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
				Mix
			</h2>
			<SingleProduct
				name="Mexico Pomegranate"
				icon={mix}
				description="Pomegranate blend and other nearby additives for a refreshing soft drink."
				price="4.0"
			/>
			<SingleProduct
				name="Ice Rose"
				icon={icerose}
				description="Rose blend and other supplementary additives for a Netherlands garden flavored soft drink."
				price="4.0"
			/>
			<SingleProduct
				name="Sky Cloud"
				icon={skycloud}
				description="Combination of India nuts and coffee with complementary additives to a drink that touches the clouds of the sky with its taste and details."
				price="4.0"
			/>
			<SingleProduct
				name="Flower Moon"
				icon={flowermoon}
				description="Mixture of roses with additives of milk, coffee and other flavors complements a rich drink in all its aspects."
				price="4.5"
			/>
			<SingleProduct
				name="Ocean Dream"
				icon={oceandream}
				description="Hawaii summer beach and carrot drink with different flavors nested inside."
				price="4.0"
			/>
			<SingleProduct
				name="Winter Mojito"
				icon={wintermojito}
				description="A dialectical drink with its winter ingredients served cold with all the summer gestures."
				price="4.0"
			/>
		</div>
	);
};

export default Mix;
