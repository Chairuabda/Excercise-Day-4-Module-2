import "../css/section1.css";
import Pict from "../../../components/assets/Foto linkedin-min.jpg";
import Header from "../../../components/Header";
import 'animate.css';


export default function Section1() {
	return (
		<section class="bodyContent" name="slide-1">

			<Header id="header"/>

			<div class="mainContent">
				<div className="img animate__animated animate__fadeInRight">
					<img src={Pict} alt="" />
				</div>

				<div class="firstContent">
					<div class="titleText">
						<div class="mainText">
							<h2>Hello, I'm</h2>
							<h1 className="animate__animated animate__fadeInUp">Tengku Chairu Abda</h1>
							<h3 className="animate__animated animate__fadeInUp">Full-stact Web Developer</h3>
							<p className="animate__animated animate__fadeInRight">Welcome to My personal website. <span style={{fontSize: "20px"}}>&#128075;&#127995;</span></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
