import React from "react";
import PropTypes from "prop-types";

export function SelectPlayer(props) {
	return (
		<div className="text-center mt-5">
			<div className="selection">
				<h3>Choose Your Weapon</h3>
				<div>
					<input
						type="text"
						placeholder="Player 1 username"
						name="jugador1"
						onChange={props.nameEntry}
					/>

					<input
						type="text"
						placeholder="Player 2 username"
						name="jugador2"
						onChange={props.nameEntry}
					/>
				</div>
				<div className="buttons">
					<button
						type="button"
						className="butonX"
						value="X"
						onClick={props.weaponSelectX}>
						X
					</button>
					<button
						type="button"
						className="butonY"
						value="Y"
						onClick={props.weaponSelectO}>
						0
					</button>
				</div>
				<div>
					<p>Player 1 name: {props.userName.jugador1}</p>
					<p>Player 2 name: {props.userName.jugador2}</p>
					<p>Frist player weapon: {props.weapon}</p>
				</div>
				<button
					type="button"
					className="butonPlay"
					value="Y"
					onClick={props.iniciarJuego}>
					¡PLAY THE GAME!
				</button>
			</div>
		</div>
	);
}

SelectPlayer.propTypes = {
	iniciarJuego: PropTypes.func,
	nameEntry: PropTypes.func,
	userName: PropTypes.object,
	weaponSelectO: PropTypes.func,
	weaponSelectX: PropTypes.func,
	weapon: PropTypes.string
};
