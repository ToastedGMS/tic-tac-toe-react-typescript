import { useEffect, useState } from 'react';
import styles from '../stylesheets/App.module.css';
import checkWinner from '../utils/checkWinner';

function App() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
	const [XScore, setXScore] = useState(0);
	const [OScore, setOScore] = useState(0);

	function handleClick(index: number): void {
		if (board[index] === '') {
			setBoard((prev) => {
				const newBoard = [...prev];
				newBoard[index] = currentPlayer;
				return newBoard;
			});
		}
	}

	useEffect(() => {
		if (checkWinner(currentPlayer, board) === true) {
			alert(`Player ${currentPlayer} wins!`);
			setBoard(['', '', '', '', '', '', '', '', '']);
			updateScore(currentPlayer);
			return;
		} else if (
			board.some((cell) => {
				return cell === '';
			}) === false
		) {
			alert(`It\'s a tie!`);
			setBoard(['', '', '', '', '', '', '', '', '']);
			setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
			return;
		} else setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
	}, [board]);

	function updateScore(winner: string): void {
		if (winner === 'X') {
			setXScore((prev) => prev + 1);
		} else if (winner === 'O') {
			setOScore((prev) => prev + 1);
		}
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.boardContainer}>
				{board.map((cell, index) => {
					return (
						<div
							className={styles.boardCell}
							key={index}
							onClick={() => handleClick(index)}
						>
							{cell.valueOf()}
						</div>
					);
				})}
			</div>
			<div className={styles.scoreDiv}>
				<h2>Score</h2>
				<div className={styles.scoreContainer}>
					<div className={styles.scoreItem}>
						<span>Player X: </span>
						<span>{XScore}</span>
					</div>
					<div className={styles.scoreItem}>
						<span>Player O: </span>
						<span>{OScore}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
