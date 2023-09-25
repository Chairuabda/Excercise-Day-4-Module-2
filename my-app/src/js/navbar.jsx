import "../css/navbar.css";
import { House } from "@phosphor-icons/react";
import { Briefcase } from "@phosphor-icons/react";
import { User } from "@phosphor-icons/react";
import { Notebook } from "@phosphor-icons/react";
// function hidden() {
//     const navbar = getSelection
// }

export default function Navbar() {
	return (
		<section className="navbar-section">
			<div>

				<div className="background">
					<div></div>
				</div>

				<nav className="mobile-nav">
					<div className="container-nav">
						<div className="nav-list">
							<ul>
								<li>
									<a href="#home"><House size={28}/><p>Home</p></a>
								</li>
								<li>
									<a href="#about"><User size={32} /><p>About Me</p></a>
								</li>
								<li>
									<a href="#portofolio"><Briefcase size={28}/><p>Portofolio</p></a>
								</li>
								<li>
									<a href="#experience"><Notebook size={32} /><p>Experience</p></a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<nav className="dekstop-nav">
					<div className="container-nav">
						<div className="nav-list">
							<ul>
								<li>
									<a href="#home">Home</a>
								</li>
								<li>
									<a href="#about">About Me</a>
								</li>
								<li>
									<a href="#portofolio">Portofolio</a>
								</li>
								<li>
									<a href="#experience">Experience</a>
								</li>
								<li>
									<div className="btn">
										<a href="#">
											<button>Download CV</button>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</section>
	);
};