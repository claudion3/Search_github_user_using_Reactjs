import React, { useContext } from "react";
import UserContext from "../UserContex";

const AllUsers = () => {
	const { users, query } = useContext(UserContext);
	let getResult;

	if (query !== "" && users.length > 0) {
		getResult = users.map((user) => {
			return (
				<div key={user.id}>
					{console.log("see", user)}
					<div className="user">
						<img src={user.avatar_url}></img>
						<h2>
							<a href={user.html_url}>{user.login}</a>
						</h2>
					</div>
				</div>
			);
		});
	} else {
		getResult = "No Result";
	}
	return <div>{getResult}</div>;
};
export default AllUsers;
