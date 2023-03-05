import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = (props) => {
	const { store, actions } = useContext(Context);
	const { planetId } = useParams();

	const [isLoading, setIsLoading] = useState(true)
    const [planet, setPlanet] = useState([])


    useEffect(() => {getPlanetFetch(planetId)},[])

    async function getPlanetFetch(id) {
        setIsLoading(true)
        try {await fetch(`https://www.swapi.tech/api/planets/${id}`)
        .then(res => res.json())
        .then(data => {setPlanet(data.result.properties)
            setIsLoading(false)
    })
    }catch (error) {
        console.log('there is a problem with fetch:' + error.message)
        setIsLoading(false);
    }
    }

	return (
			<div className="container">
			<div className="card mb-3">
			{isLoading?
			<div className="container d-flex justify-content-center mb-5 mt-5"><div className="spinner-border" role="status">
				<span className="visually-hidden">Loading...</span>
				</div></div>
			:
			<div className="row g-0">
			  <div className="col-md-4">
				<img src="https://www.famousbollywood.com/wp-content/uploads/2021/05/Best-Planets-to-Live-on-in-Star-Wars.jpg" className="img-fluid rounded-start " alt="..."/>
			  </div>
			  <div className="col-md-8">
				<div className="card-body text-center">
				  <h1 className="card-title">{planet.name}</h1>
				  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				</div>
			  </div>
			<div className="card-footer text-muted">
				<div className="row">
					<div className="container col-2">
						Name: <br/>
						{planet.name}
					</div>
					<div className="container col-2">
						Climate: <br/>
						{planet.climate}
					</div>
					<div className="container col-2">
						Population: <br/>
						{planet.population}
					</div>
					<div className="container col-2">
						Orbital period: <br/>
						{planet.orbital_period}
					</div>
					<div className="container col-2">
						Rotation period: <br/>
						{planet.rotation_period}
					</div>
					<div className="container col-2">
						Diameter: <br/>
						{planet.diameter}
					</div>
				</div>
  			</div>

			</div>
			}
		  </div>
		  </div>
	);
};

Planet.propTypes = {
	match: PropTypes.object
};
