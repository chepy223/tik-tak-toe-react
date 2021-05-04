import React, { useState } from "react";
import Cuadrado from "./Cuadrado";
import PropTypes from "prop-types";

export default function Game(props) {
	const [turno, setTurno] = useState("X");
	const [game, setGame] = useState(["", "", "", "", "", "", "", "", ""]);
	const [ganador, setGanador] = useState("");

	function cambiarEstado(pos) {
		game[pos] = turno;

		if (turno == "X") {
			setTurno("O");
		} else {
			setTurno("X");
		}

		if (ganador == "" && calcularGanador(game) != null) {
			setGanador(turno);
			setTimeout(function() {
				window.location.reload(1);
			}, 5000);
		}

		return turno;
	}

	function calcularGanador(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	}

	return (
		<div className="container">
			<h1>Tic Tac Toe</h1>
			<h3>Jugador actual: {turno}</h3>
			{ganador != "" ? (
				<h1 className="text-success">
					Ganador: {ganador}{" "}
					{ganador == "X" ? props.jugador1 : props.jugador2}
				</h1>
			) : (
				""
			)}
			<div>
				<button
					className="btn btn-secondary"
					onClick={() => window.location.reload(1)}>
					Reiniciar
				</button>
			</div>
			<div id="tablero" className="container">
				<div className="row mt-3">
					<Cuadrado onClick={() => cambiarEstado(0)} />
					<Cuadrado onClick={() => cambiarEstado(1)} />
					<Cuadrado onClick={() => cambiarEstado(2)} />
				</div>
				<div className="row mt-3">
					<Cuadrado onClick={() => cambiarEstado(3)} />
					<Cuadrado onClick={() => cambiarEstado(4)} />
					<Cuadrado onClick={() => cambiarEstado(5)} />
				</div>
				<div className="row mt-3">
					<Cuadrado onClick={() => cambiarEstado(6)} />
					<Cuadrado onClick={() => cambiarEstado(7)} />
					<Cuadrado onClick={() => cambiarEstado(8)} />
				</div>
			</div>
		</div>
	);
}

Game.propTypes = {
	jugador1: PropTypes.string,
	jugador2: PropTypes.string
};
