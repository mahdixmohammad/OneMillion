import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import Menu from "./Menu";
import Home from "./Home";
import Selection from "./Selection";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Dropdown />
			<Home />
			<Selection />
			{/* <Menu /> */}
		</div>
	);
}

export default App;
