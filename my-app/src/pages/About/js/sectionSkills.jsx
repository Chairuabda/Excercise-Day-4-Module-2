import "../css/sectionSkills.css";
import Html from "../../../components/assets/html-color.png";
import Css from "../../../components/assets/css-color.png";
import Js from "../../../components/assets/js-color.png";
import ReactImg from "../../../components/assets/react-color.png";
import Tailwind from "../../../components/assets/tailwindcss-color.png";
import Git from "../../../components/assets/logo@2x.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SectionSkills() {
	AOS.init();
	return (
		<section>
			<div className="containerSkills">
				<div className="container">
					<div className="titleSkills animate__animated animate__fadeInDown">
						<div className="line"></div>
						<h3>Skill</h3>
					</div>

					<div
						className="skills"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<div className="card-skills">
							<img src={Html} alt="" />
							<p>HTML</p>
						</div>
						<div className="card-skills">
							<img src={Css} alt="" />
							<p>CSS</p>
						</div>
						<div className="card-skills">
							<img src={Js} alt="" />
							<p>javascript</p>
						</div>
						<div className="card-skills">
							<img src={ReactImg} alt="" />
							<p>Ract</p>
						</div>
						<div className="card-skills">
							<img src={Tailwind} alt="" />
							<p>Tailwind</p>
						</div>
						<div className="card-skills">
							<img src={Git} alt="" />
							<p>Git</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
