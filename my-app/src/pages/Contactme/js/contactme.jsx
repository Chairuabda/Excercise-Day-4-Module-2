import "../css/contactme.css";
import Header from "../../../components/Header";

export default function Contact() {
    function klik() {
        return alert("Feedback terkirim")
    }
	return (
		<section className="container-section">
			<Header />
			<div className="container">
                <div>
                    <h1>Share Your Feedback</h1>
                </div>
				<div className="inpt">
					{/* <label for="nama">Username</label> */}
					<input type="text" name="username" id="nama" placeholder="Your Nama" required/>
					<input type="text" name="email" id="email" placeholder="Your Email"/>
					<input type="text" name="text" id="text" placeholder="Share your thoughts"/>   
                    
				</div>

                <div className="btn">
                    <button type="submit" onClick={klik}>SAND YOURE FEEDBACK</button>
                </div>
			</div>
		</section>
	);
}
