import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Cuadrado(props) {
	const [valor, setValor] = useState("");

	return (
		<div className="col">
			<div
				id="cuadrado"
				className="card bg-dark"
				onClick={() => {
					if (valor == "") {
						setValor(props.onClick());
					}
				}}>
				<div className="card-body d-flex justify-content-center align-items-center">
					<h1 className="m-0">{valor}</h1>
				</div>
			</div>
		</div>
	);
}

Cuadrado.propTypes = {
	onClick: PropTypes.func
};
