import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const FavoriteItem = (props) => {
	const { store, actions } = useContext(Context);

	function remove() {
		actions.removeFavoriteItem(props.i) 
	}

	return (
        <div>
			<a>{props.name}</a>
			<button className="btn btn-dark" onClick={() => {remove()}}><i className="fas fa-trash-alt"></i></button>
		</div>
	);
};
