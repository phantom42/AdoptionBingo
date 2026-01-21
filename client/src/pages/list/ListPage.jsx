import { useLoaderData } from "react-router-dom";
import SquareList from "../../components/SquareList";

export  function ListPage() {
	const {allSquares} = useLoaderData();
	return (
		<div>{allSquares.length} Square Values:
			<SquareList squares={allSquares}/>
		</div>
	)
}