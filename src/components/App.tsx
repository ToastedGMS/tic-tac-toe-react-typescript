import { useEffect, useState } from 'react';
import styles from '../stylesheets/App.module.css';
import checkWinner from '../utils/checkWinner';

function App() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);

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
			return;
		} else setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
	}, [board]);

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
		</div>
	);
}

export default App;
