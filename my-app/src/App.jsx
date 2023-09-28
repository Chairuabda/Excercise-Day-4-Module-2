import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/js";
import About from "./pages/About/js";
import Portofolio from "./pages/Portofolio/js";
import Contacme from "./pages/Contactme/js";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/portofolio" element={<Portofolio />} />
				<Route path="/contactme" element={<Contacme />} />
			</Routes>
		</div>
	);
}

export default App;
