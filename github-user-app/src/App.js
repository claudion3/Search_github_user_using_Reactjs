import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<nav className="navigation-bar">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
				</Switch>
			</BrowserRouter>
			<footer>
				<p>
					Created by Jean Claude Gakimbiri<br></br> &copy;2020 All Rights
					Reserved
				</p>
			</footer>
		</div>
	);
}

export default App;
