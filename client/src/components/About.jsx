export default function About({ handleNewBoardClick }) {
	return (
		<div className="aboutCard">
			<h3 className="aboutTitle">Adoption Bingo</h3>

			<p className="aboutText">
				Every time you open up the comments on a post about adoption, you will see the same old tired comments. It's like they’re reading from a script. Can’t they come up with something original at least?
			</p>

			<p className="aboutText">
				Time to have some fun with it. Generate a random BINGO board and see how quickly they win - or complete the board.
			</p>

			<button onClick={handleNewBoardClick}>
				Get Started!
			</button>
		</div>
	);
}
