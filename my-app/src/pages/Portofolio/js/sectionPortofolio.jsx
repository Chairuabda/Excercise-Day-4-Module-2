import "../css/sectionPortofolio.css";
import Header from "../../../components/Header";
import Profileweb from "../../../components/assets/Profile-website.png";

export default function SectionPorto() {
	return (
		<section className="sectionPorto">
			<Header />
			<div className="container">
				<div className="container-items">
					<div className="title">
						<h1>Past Project Experience</h1>
						<p>Explore the project i've worked on so far</p>
					</div>

					<div className="container-card">
						<div className="card">
							<div className="img">
								<img src={Profileweb} alt="" />
							</div>
							<div className="text">
								<h1>Personal Website</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Nihil enim earum debitis quidem aut numquam.
								</p>
								<h3>ReactJS</h3>
								<i>logo</i>
							</div>
						</div>
						<div className="card">
							<div className="img">
								<img src={Profileweb} alt="" />
							</div>
							<div className="text">
								<h1>Personal Website</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Nihil enim earum debitis quidem aut numquam.
								</p>
								<h3>ReactJS</h3>
								<i>logo</i>
							</div>
						</div>
						<div className="card">
							<div className="img">
								<img src={Profileweb} alt="" />
							</div>
							<div className="text">
								<h1>Personal Website</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Nihil enim earum debitis quidem aut numquam.
								</p>
								<h3>ReactJS</h3>
								<i>logo</i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
