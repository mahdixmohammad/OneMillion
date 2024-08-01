import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import strawberry from "../../assets/icons/bubbles/strawberry-bubbles.png";
import pineapple from "../../assets/icons/bubbles/pineapple-bubbles.png";
import orange from "../../assets/icons/bubbles/orange-bubbles.png";
import kiwi from "../../assets/icons/bubbles/kiwi-bubbles.png";
import blues from "../../assets/icons/bubbles/blues-bubbles.png";
import mojito from "../../assets/icons/bubbles/mojito-bubbles.png";

const Bubbles = () => {
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
				Bubbles
			</h2>
			<SingleProduct
				name="Strawberry"
				icon={strawberry}
				description="Refreshing strawberry drink with the freshness of fresh mint and enhanced flavour bubbles balls for a more enjoyable taste."
				price="4.0"
			/>
			<SingleProduct
				name="Pineapple"
				icon={pineapple}
				description="Refreshing pineapple drink with the freshness of fresh mint and enhanced flavour bubbles balls for a more enjoyable taste."
				price="4.0"
			/>
			<SingleProduct
				name="Orange"
				icon={orange}
				description="Refreshing orange drink with the freshness of fresh mint and enhanced flavour bubbles balls for a more enjoyable taste."
				price="4.0"
			/>
			<SingleProduct
				name="Kiwi"
				icon={kiwi}
				description="Refreshing kiwi drink with the freshness of fresh mint and enhanced flavour bubbles balls for a more enjoyable taste."
				price="4.0"
			/>
			<SingleProduct
				name="Blues"
				icon={blues}
				description="Refreshing blue drink with the freshness of fresh mint and enhanced flavour bubbles balls for a more enjoyable taste."
				price="4.0"
			/>
			<SingleProduct
				name="Mojito"
				icon={mojito}
				description="Refreshing mojito drink with fresh mint freshness and enhanced flavor bubbles balls and a variety of flavors for more enjoyment."
				price="4.0"
			/>
		</div>
	);
};

export default Bubbles;
