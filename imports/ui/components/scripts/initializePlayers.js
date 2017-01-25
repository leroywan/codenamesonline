export default function initializePlayers(numOfPlayers) {

	players = [];

	for (let i=0; i<numOfPlayers; i++) {
		let player = {
			playerID: i,
			nickname: null,
			isInGameRoom: false
		}

		players.push(player);
	}
	return players
}