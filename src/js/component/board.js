import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
export function Board(props) {
	const [ganador, setGanador] = useState("");

	const [currentWeapon, setCurrentWeapon] = useState(props.weapon);

	const [valoresTablero, setValoresTablero] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null]
	]);

	const drawWeapon = e => {
		if (!e.target.innerText) {
			e.target.innerText = currentWeapon;
			if (currentWeapon === "X") {
				setCurrentWeapon("0");
			} else {
				setCurrentWeapon("X");
			}
		}
	};

	const setTablero = (X, Y) => {
		if (valoresTablero[X][Y] == null) {
			valoresTablero[X][Y] = currentWeapon;
			setValoresTablero(valoresTablero);
		}
		checkWinner(currentWeapon);
	};

	const checkWinner = currentWeapon => {
		// Fila 1
		if (
			valoresTablero[0][0] !== null &&
			valoresTablero[0][1] !== null &&
			valoresTablero[0][2] !== null
		) {
			if (
				valoresTablero[0][0] === valoresTablero[0][1] &&
				valoresTablero[0][1] === valoresTablero[0][2]
			) {
				setGanador(currentWeapon);
				alert(`The winner is who used ${currentWeapon}!`);
				props.resetGame();
			}
		}
		// Fila 2
		if (
			valoresTablero[1][0] !== null &&
			valoresTablero[1][1] !== null &&
			valoresTablero[1][2] !== null
		) {
			if (
				valoresTablero[1][0] === valoresTablero[1][1] &&
				valoresTablero[1][1] === valoresTablero[1][2]
			) {
				setGanador(currentWeapon);
				alert(`The winner is who used ${currentWeapon}!`);
				props.resetGame();
			}
		}
		// Fila 3
		if (
			valoresTablero[2][0] !== null &&
			valoresTablero[2][1] !== null &&
			valoresTablero[2][2] !== null
		) {
			if (
				valoresTablero[2][0] === valoresTablero[2][1] &&
				valoresTablero[2][1] === valoresTablero[2][2]
			) {
				setGanador(currentWeapon);
				alert(`The winner is who used ${currentWeapon}!`);
				props.resetGame();
			}
		}
		// Columna 1
		if (
			valoresTablero[0][0] !== null &&
			valoresTablero[1][0] !== null &&
			valoresTablero[2][0] !== null
		) {
			if (
				valoresTablero[0][0] === valoresTablero[1][0] &&
				valoresTablero[1][0] === valoresTablero[2][0]
			) {
				setGanador(currentWeapon);
				alert(`The winner is who used ${currentWeapon}!`);
				props.resetGame();
			}
		}
		// Columna 2
		if (
			valoresTablero[0][1] !== null &&
			valoresTablero[1][1] !== null &&
			valoresTablero[2][1] !== null
		) {
			if (
				valoresTablero[0][1] === valoresTablero[1][1] &&
				valoresTablero[1][1] === valoresTablero[2][1]
			) {
				setGanador(currentWeapon);
				alert(`The winner is who used ${currentWeapon}!`);
				props.resetGame();
			}
		}
		// Columna 3
		if (
			valoresTablero[0][2] !== null &&
			valoresTablero[1][2] !== null &&
			valoresTablero[2][2] !== null
		) {
			if (
				valoresTablero[0][2] === valoresTablero[1][2] &&
				valoresTablero[1][2] === valoresTablero[2][2]
			) {
				setGanador(currentWeapon);
				alert(`El ganador es ${currentWeapon}`);
				props.resetGame();
			}
		}
		// Diagonal 1
		if (
			valoresTablero[0][0] !== null &&
			valoresTablero[1][1] !== null &&
			valoresTablero[2][2] !== null
		) {
			if (
				valoresTablero[0][0] === valoresTablero[1][1] &&
				valoresTablero[1][1] === valoresTablero[2][2]
			) {
				setGanador(currentWeapon);
				alert(`The winner is who used ${currentWeapon}!`);
				props.resetGame();
			}
		}
		// Diagonal 2
		if (
			valoresTablero[0][2] !== null &&
			valoresTablero[1][1] !== null &&
			valoresTablero[2][0] !== null
		) {
			if (
				valoresTablero[0][2] === valoresTablero[1][1] &&
				valoresTablero[1][1] === valoresTablero[2][0]
			) {
				setGanador(currentWeapon);
				alert(`The winner is who used ${currentWeapon}!`);
				props.resetGame();
			}
		}
	};

	return (
		<div className="board">
			<div className="turno">
				<h3>It´s {currentWeapon} turn!!!</h3>
			</div>
			<div className="reset">
				<button
					type="button"
					className="butonReset"
					onClick={() => {
						props.resetGame();
					}}>
					RESET
				</button>
			</div>
			<div className="row">
				<div
					id="1"
					className="square"
					onClick={e => {
						drawWeapon(e);
						setTablero(0, 0);
					}}></div>
				<div
					id="2"
					className="square"
					onClick={e => {
						drawWeapon(e);
						setTablero(0, 1);
					}}></div>
				<div
					id="3"
					className="square"
					onClick={e => {
						drawWeapon(e);
						setTablero(0, 2);
					}}></div>
				<div
					id="4"
					className="square"
					onClick={e => {
						drawWeapon(e);
						setTablero(1, 0);
					}}></div>
				<div
					id="5"
					className="square"
					onClick={e => {
						drawWeapon(e);
						setTablero(1, 1);
					}}></div>
				<div
					id="6"
					className="square"
					onClick={e => {
						drawWeapon(e);
						setTablero(1, 2);
					}}></div>
				<div
					id="7"
					className="square"
					onClick={e => {
						drawWeapon(e);
						setTablero(2, 0);
					}}></div>
				<div
					id="8"
					className="square"
					onClick={e => {
						drawWeapon(e);
						setTablero(2, 1);
					}}></div>
				<div
					id="9"
					className="square"
					onClick={e => {
						drawWeapon(e);
						setTablero(2, 2);
					}}></div>
			</div>
		</div>
	);
}

Board.propTypes = {
	jugador1: PropTypes.string,
	weapon: PropTypes.string,
	resetGame: PropTypes.func
};
