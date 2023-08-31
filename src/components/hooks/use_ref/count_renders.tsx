import { useEffect, useRef, useState } from 'react';

export const CountRenders = () => {
	const [value, setValue] = useState('');
	//const count = 1;

	const count = useRef(1)

	useEffect(() => {
		count.current = count.current + 1;
	}, [value]);

	return (
		<>
			<h2>useRef</h2>

			<input
				value={value}
				type='text'
				onChange={(e) => setValue(e.target.value)}
			/>

			<p>{value}</p>
			<p>I have rendered {count.current} times</p>
		</>
	);
};
