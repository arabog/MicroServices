import './App.css';

import PostCreate from '../PostCreate/PostCreate';
import PostList from '../PostList/PostList';


function App() {


	return (
		<div className='container'>
			<h1 className='mt-5'>Create Post</h1>

			<PostCreate />	

			<hr />

			<h1>Posts</h1>

			<PostList />
		</div>
	);
}


export default App;
