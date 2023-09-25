import "../css/App.css";
import myimg from "../img/Foto_linkedin-removebg-preview.png";

export default function App() {
	return (
		<div className="app" id="home">
			<header className="app-header">
				<div className="header-box" >
					<div className="box">
						<h3>I'm a</h3>
						<h1 id="web">WEB</h1>
						<h1>
							DEVELOPER
							<span>.....</span>
						</h1>
					</div>
					<div className="myDescription">
						<p>
							I design and develope good website. I also work well
							with team, a quick learener and work to solve problems
							for campenies. In general i'm an all rounded guy with a
							passion of coding
						</p>
					</div>
				</div>

				<div className="myImg">
					<img src={myimg} alt="" />
				</div>
			</header>
		</div>
	);
}
