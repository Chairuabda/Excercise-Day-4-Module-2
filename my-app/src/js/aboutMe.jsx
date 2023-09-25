import "../css/aboutMe.css";
import { Fingerprint } from "@phosphor-icons/react";

export default function About() {
	return (
		<section>
			<div className="container" id="about">
				<div className="about-me" >
					<div className="title-about">
						<i>
							<Fingerprint size={32} />
						</i>
						<div>
							<h1>About Me</h1>
						</div>
					</div>

					<div className="description-about">
						<div className="description-text">
							<p>Hello!  All you need to know about me is that I am dedicated, committed, and passionate developer in the world of coding. I believe that every line of code is an opportunity to create innovative and impactful solutions. When I'm not sleeping, you might find me immersed in coding projects, solving puzzles, and continuously learning to become a better developer. I'm always ready to take on new challenges, explore the latest technologies, and collaborate with teams to achieve the best outcomes in every project. Coding is not just a job; it's an unwavering passion of mine, and I'm incredibly excited to share my work with the world.</p>
						</div>

						<hr />

						<div className="education">
							<h1>Education</h1>
							<p>
								After finishing primary and high school as should, i studied programing	 at Prwadhika school in 2023 and learn web development using HTML, CSS, Javascript, REACT JS
							</p>
						</div>

						<hr />

						<div className="education">
							<h1>Skills</h1>
							<p>
								After finishing primary and high school as should, i studied programing	 at Prwadhika school in 2023 and learn web development using HTML, CSS, Javascript, REACT JS
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
