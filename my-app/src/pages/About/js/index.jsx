import Navbar from "../../../components/Navbar";
import "../css/index.css";
import SectionAbout from "./sectionAbout";
import SectionSkills from "./sectionSkills";

export default function About() {
	return (
		<div className="container-about">
			<Navbar />
			<SectionAbout />
			<SectionSkills />
		</div>
	);
}
