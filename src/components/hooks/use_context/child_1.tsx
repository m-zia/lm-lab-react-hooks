import { useContext } from "react";
import { ThemeContext } from "./parent";

export const Child1: React.FC = () => {
	// const theme = {
	// 	backgroundColor: dark ? '#333' : '#CCC',
	// 	color: dark ? 'white' : '#333',
	// 	padding: '2rem',
	// 	margin: '2rem',
	// };

	const theme = useContext(ThemeContext)

	return <div style={theme}>Child 1</div>;
};
