import Navbar from "../../../components/Navbar";
import "../css/index.css";
import Section1 from "./section1";

export default function Home() {
	return (
		<div className="container-home">
			<Navbar />
			<Section1 />
		</div>
	);
}
