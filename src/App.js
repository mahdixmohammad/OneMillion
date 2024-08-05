import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Selection from "./components/Selection";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ColdDrinks from "./components/Products/ColdDrinks";
import Mix from "./components/Products/Mix";
import Bubbles from "./components/Products/Bubbles";
import HotDrinks from "./components/Products/HotDrinks";
import Bakery from "./components/Products/Bakery";
import Cake from "./components/Products/Cake";
import Cheesecake from "./components/Products/Cheesecake";
import Milkcake from "./components/Products/Milkcake";
import Gelato from "./components/Products/Gelato";
import IceCream from "./components/Products/IceCream";
import WaffleCrepe from "./components/Products/WaffleCrepe";
import FindUs from "./components/FindUs";

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
								<FindUs />
							</>
						}
					></Route>
					<Route path="/menu" element={<Selection />}></Route>
					<Route path="/menu/colddrinks" element={<ColdDrinks />}></Route>
					<Route path="/menu/mix" element={<Mix />}></Route>
					<Route path="/menu/bubbles" element={<Bubbles />}></Route>
					<Route path="/menu/hotdrinks" element={<HotDrinks />}></Route>
					<Route path="/menu/bakery" element={<Bakery />}></Route>
					<Route path="/menu/cake" element={<Cake />}></Route>
					<Route path="/menu/cheesecake" element={<Cheesecake />}></Route>
					<Route path="/menu/milkcake" element={<Milkcake />}></Route>
					<Route path="/menu/gelato" element={<Gelato />}></Route>
					<Route path="/menu/icecream" element={<IceCream />}></Route>
					<Route path="/menu/wafflecrepe" element={<WaffleCrepe />}></Route>
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
