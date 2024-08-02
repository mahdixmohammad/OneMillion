const SingleProduct = ({ name, icon, description, price }) => {
	return (
		<div className="product">
			<div className="product-container single-product">
				<div className="product-image">
					<img src={icon} alt=""></img>
				</div>
				<div className="single-product-info">
					<h3>{name}</h3>
					<p>
						{description}
						<span>{price} Dinars</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
