import React from "react";
import Users from "../Users.js";

const Home = () => {
	return (
		<div className="app-wrap">
			<header>
				<h1>Github Users</h1>
			</header>
			<Users />
		</div>
	);
};
export default Home;
