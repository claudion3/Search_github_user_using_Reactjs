import React, { useState } from "react";
import SearchUsers from "./SearchUsers";
import UserContext from "./UserContex";
const Users = () => {
	const [users, setUsers] = useState([]);
	const [query, setQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	return (
		<UserContext.Provider
			value={{
				users,
				setUsers,
				query,
				setQuery,
				isLoading,
				setIsLoading,
				error,
				setError,
			}}>
			<div>
				<SearchUsers />
			</div>
		</UserContext.Provider>
	);
};

export default Users;
