import Image from "next/image";

const SingleProduct = ({ name, icon, price }) => {
	return (
		<div className="product">
			<h3>
				{name}
				<span>{price} Dinars</span>
			</h3>

			<div className="product-container single-product">
				<div className="product-image">
					<Image src={icon} alt="" />
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
