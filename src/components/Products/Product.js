const Product = ({ name, icon, types }) => {
	return (
		<div className="product">
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
		</div>
	);
};

export default Product;
