import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Selection from "./components/Selection";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ColdDrinks from "./components/Products/ColdDrinks";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={
							<>
								{/* <Dropdown /> */}
								<Home />
							</>
						}
					></Route>
					<Route path="/menu" element={<Selection />}></Route>
					<Route path="/menu/colddrinks/" element={<ColdDrinks />}></Route>
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
