import React, { useState } from "react";

import Game from "./Game";

//create your first component
export function Home() {
	const [jugador1, setJugador1] = useState(null);
	const [jugador2, setJugador2] = useState(null);

	function actualizarJugadores() {
		let nombre1 = document.getElementById("nombre1").value;
		let nombre2 = document.getElementById("nombre2").value;
		if (nombre1 != "" && nombre2 != "") {
			setJugador1(nombre1);
			setJugador2(nombre2);
		}
	}

	return (
		<div className="text-center mt-5 text-light">
			{jugador1 != null && jugador2 != null ? (
				<Game jugador1={jugador1} jugador2={jugador2} />
			) : (
				<div className="container">
					<button
						type="button"
						className="btn btn-primary"
						data-toggle="modal"
						data-target="#exampleModal">
						Jugar
					</button>

					<div
						className="modal fade"
						id="exampleModal"
						tabIndex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
						data-backdrop="false">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5
										className="modal-title text-dark"
										id="exampleModalLabel">
										Ingrese datos
									</h5>
									<button
										type="button"
										className="close"
										data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<form>
										<div className="row">
											<div className="col">
												<input
													id="nombre1"
													type="text"
													className="form-control"
													placeholder="Jugador X"
												/>
											</div>
											<div className="col">
												<input
													id="nombre2"
													type="text"
													className="form-control"
													placeholder="Jugador O"
												/>
											</div>
										</div>
									</form>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-primary"
										onClick={() => {
											actualizarJugadores();
										}}>
										Empezar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
