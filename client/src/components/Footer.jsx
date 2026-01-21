const ORIGINAL_YEAR = 2026;
export default function Footer() {
	const displayYears = ()=> {
		const thisYear = new Date().getFullYear();
		if (thisYear > ORIGINAL_YEAR){
			return `${ORIGINAL_YEAR} - ${thisYear}`;
		} else {
			return ORIGINAL_YEAR
		}
	}
	return (
		<div id="footer">&copy; {displayYears()} @phantomAdoptee</div>
	)
}