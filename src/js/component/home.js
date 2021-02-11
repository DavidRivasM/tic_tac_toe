import React, { useState } from "react";
import { Board } from "./board";
import { SelectPlayer } from "./selectplayer";

//create your first component
export function Home() {
	// Acá se exportó la funcion de iniciarJuego desde el componente selectPlayer, luego hay que utilizar props para heredar la funcionalidad u evento a su hijo. Esta función se utiliza para gestionar el renderizado condicional.
	const [startGame, setStartGame] = useState(false);

	const iniciarJuego = () => {
		setStartGame(!startGame);
	};

	// Apartado para establecer el nombre de los jugadores.
	const [userName, setUserName] = useState({
		jugador1: null,
		jugador2: null
	});

	const nameEntry = e => {
		let data = {
			[e.target.name]: e.target.value
		};
		setUserName({ ...userName, ...data });
	};

	// Apartado para establecer el arma de los jugadores.

	const [weapon, setweapon] = useState("");

	const weaponSelectX = () => {
		setweapon("X");
	};
	const weaponSelectO = () => {
		setweapon("0");
	};

	const resetGame = () => {
		setUserName({
			jugador1: null,
			jugador2: null
		});
		setStartGame(false);
		setweapon(" ");
	};

	return (
		<div className="text-center mt-5">
			<h1>
				<span className="badge badge-success">
					<h1>Tic Tac Toe con React</h1>
				</span>
			</h1>
			{startGame ? (
				<Board
					jugador1={userName.jugador1}
					weapon={weapon}
					resetGame={resetGame}
				/>
			) : (
				<SelectPlayer
					userName={userName}
					nameEntry={nameEntry}
					iniciarJuego={iniciarJuego}
					weaponSelectX={weaponSelectX}
					weaponSelectO={weaponSelectO}
					weapon={weapon}
				/>
			)}
		</div>
	);
}
