import use_todo from './use_todo';

export const Todo = () => {
	const url = 'https://jsonplaceholder.typicode.com/todos/1';
	
	const {data, isFetching} = use_todo(url)

	return (
		<>
			<h2>Custom Hook</h2>

			{isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}
		</>
	);
};
