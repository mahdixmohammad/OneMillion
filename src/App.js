import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Selection from "./components/Selection";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ColdDrinks from "./components/Products/ColdDrinks";
import Mix from "./components/Products/Mix";

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
								<Home />
							</>
						}
					></Route>
					<Route path="/menu" element={<Selection />}></Route>
					<Route path="/menu/colddrinks" element={<ColdDrinks />}></Route>
					<Route path="/menu/mix" element={<Mix />}></Route>
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
