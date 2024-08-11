import Card from "@/components/Card";

const Selection = () => {
	const items = [
		"Cold Drinks",
		"Mix",
		"Bubbles",
		"Hot Drinks",
		"Bakery",
		"Cake",
		"Cheesecake",
		"Milkcake",
		"Gelato",
		"Ice Cream",
		"Waffle & Crepe",
	];

	return (
		<section className="selection">
			<h2>Our Menu</h2>
			<div className="selection-container">
				{items.map(name => (
					<Card cardName={name} dimension={199.19} key={name} />
				))}
			</div>
		</section>
	);
};

export default Selection;
