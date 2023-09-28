import "./index.css";
import { Link } from "react-router-dom";
import {
	House,
	User,
	Briefcase,
	Notebook,
} from "@phosphor-icons/react";

export default function Navbar() {

	return (
		<section className="navbar">
			<nav className="mobile-nav">
				<div className="container-nav">
					<div className="nav-list">
						<ul>
							<li>
								<Link to="/" className="mylink">
									<House size={28} />
									<p>Home</p>
								</Link>
							</li>
							<li>
								<Link to="/about" className="mylink">
									<User size={28} />
									<p>About Me</p>
								</Link>
							</li>
							<li>
								<Link to="/portofolio" className="mylink">
									<Briefcase size={28} />
									<p>Portofolio</p>
								</Link>
							</li>
							<li>
								<Link to="/contactme" className="mylink">
									<Notebook size={28} />
									<p>Contact Me</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div className="navbarContent">
				{/* <div className="iconLogoBar">
					<div className="logo">
						<Btn className="btn" text="Download CV" />
					</div>
					<div className="listIcon" id="nav-icon">
						<List onClick={klik} size={32} />
					</div>
				</div> */}

				<nav className="nav" id="nav-list">
					<div className="bar">
						<div className="home">
							<Link className="mylink" to="/">
								HOME
							</Link>
						</div>
						<div className="aboutme">
							<Link className="mylink" to="/about">
								ABOUT ME
							</Link>
						</div>
						<div className="portofolio">
							<Link className="mylink" to="/portofolio">
								PORTOFOLIO
							</Link>
						</div>
						<div className="contactme">
							<Link className="mylink" to="/contactme">
								CONTACT ME
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</section>
	);
}
