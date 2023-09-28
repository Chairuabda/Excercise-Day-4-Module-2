import "../css/sectionAbout.css";
import Pict from "../../../components/assets/Foto linkedin-min.jpg";
import Header from "../../../components/Header";
import "animate.css";

export default function sectionAbout() {
	return (
		<section class="containerContent2">
			<Header />

			<div className="card-content2">
				<div className="title-text">
					<h3>About Me</h3>
					<div className="line"></div>
				</div>
				<div className="pict-text">
					<div className="img animate__animated animate__fadeInUp">
						<img src={Pict} alt="" />
					</div>
					<div class="content2">
						<div class="mainContent2">
							<div class="titleContent2">
								<p className="first-text animate__animated animate__fadeInRight">
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Ipsa reiciendis excepturi maxime fugiat!
									Saepe, beatae quidem eaque rem incidunt nobis odit
									deserunt iusto similique quae! Lorem ipsum dolor.
								</p>
								<p className="second-text animate__animated animate__fadeInRight">
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Voluptas repudiandae deleniti maxime inventore
									fugit culpa similique minus sint aliquid, provident
									quam porro laboriosam dolorum! Repellendus.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
