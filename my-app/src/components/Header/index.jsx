import "./index.css";
import { GithubLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="header">
			<div className="text-header">
				<Link className="text" to="/">chairuabda( );</Link>
			</div>
			<div className="logo-header">
				<a href="https://github.com/Chairuabda" target="_blank">
					<GithubLogo className="logo" size={28} />
				</a>
			</div>
		</div>
	);
}
