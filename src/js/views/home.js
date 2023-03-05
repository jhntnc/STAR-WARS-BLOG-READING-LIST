import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { PeopleItem } from "../component/peopleItems.js"
import { PlanetsItem } from "../component/planetsItems.js"


import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [people, setPeople] = useState(store.people)
	const [planets, setPlanets] = useState(store.planets)

	useEffect(() => {
		setPeople(store.people);
		setPlanets(store.planets)

	  }, [store.people, store.planets]);

	return (
		<div>
			<div className="container mb-5">
				<div className="card-container cardContainerHome">
					<h1>Characters</h1>
					<ul className="list-group list-group-horizontal">
						{people.map(person => {
							return <PeopleItem key={person.uid} person={person}/>
						})}
					</ul>
				</div>
			</div>
			<div className="container mb-5">
				<div className="card-container cardContainerHome">
					<h1>Planets</h1>
					<ul className="list-group list-group-horizontal">
						{planets.map(planet => {
							return <PlanetsItem key={planet.uid} planet={planet}/>
						})}
					</ul>
				</div>
			</div>
		</div>
		)
};
