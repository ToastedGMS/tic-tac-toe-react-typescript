export default function checkWinner(
	currentPlayer: string,
	board: string[]
): boolean {
	const winScenarios = [
		[board[0], board[1], board[2]],
		[board[3], board[4], board[5]],
		[board[6], board[7], board[8]],
		[board[0], board[3], board[6]],
		[board[1], board[4], board[7]],
		[board[2], board[5], board[8]],
		[board[0], board[4], board[8]],
		[board[2], board[4], board[6]],
	];

	return winScenarios.some((scenario) => {
		return scenario.every((cell) => {
			return cell === currentPlayer;
		});
	});
}
// This function checks if the current player has won the game by comparing the board state against all possible winning scenarios.
