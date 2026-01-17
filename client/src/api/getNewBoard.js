export async function getNewBoard() {
	const API_BASE = import.meta.env.VITE_API_ENDPOINT;
	console.log(API_BASE);
	const res = await fetch(`${API_BASE}/api/bingo/board/`);
	const newBoard = await res.json();
	return newBoard;
}