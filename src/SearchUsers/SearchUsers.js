import React, { useEffect, useContext } from "react";
import AllUsers from "../AllUsers/AllUsers";
import UserContext from "../UserContex/UserContex";

const SearchUsers = () => {
	const {
		setUsers,
		query,
		setQuery,
		isLoading,
		setIsLoading,
		error,
		setError,
	} = useContext(UserContext);

	useEffect(() => {
		if (query === "") {
			return;
		}
		setIsLoading(true);
		fetch(`https://api.github.com/search/users?q=${query}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.message) {
					setError(data.message);
				} else {
					setUsers(data.items);
					setError(null);
				}
				setIsLoading(false);
			});
	}, [setIsLoading, setUsers, query, setError]);

	return (
		<div>
			<main>
				{error ? <h1>{error}</h1> : ""}
				<input
					type="text"
					onChange={(e) => {
						setQuery(e.target.value);
					}}></input>

				{isLoading && <div>loading ...</div>}
				<AllUsers />
			</main>
		</div>
	);
};
export default SearchUsers;
