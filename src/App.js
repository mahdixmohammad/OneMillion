import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Selection from "./components/Selection";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Dropdown />
			<Home />
			<Selection />
			{/* <Menu /> */}
			<Footer />
		</div>
	);
}

export default App;
