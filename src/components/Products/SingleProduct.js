const SingleProduct = ({ name, icon, description, price }) => {
	return (
		<div className="product">
			<h3>
				{name}
				<span>{price} Dinars</span>
			</h3>

			<div className="product-container single-product">
				<div className="product-image">
					<img src={icon} alt=""></img>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
