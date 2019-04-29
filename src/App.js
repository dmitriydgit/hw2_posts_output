import React from 'react';
import './App.css';
import PostList from './components/PostList';
import MoreButton from './components/MoreButton';
import FilterPosts from './components/FilterPosts'
const posts = 'https://jsonplaceholder.typicode.com/posts';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			postsBackUp: [],
			isLoading: false,
			displayedPosts: 10
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
	}

	componentDidMount() {
		this.setState({ isLoading: true })
		fetch(posts)
			.then(response => response.json())
			.then(data => {
				this.setState({
					posts: data,
					postsBackUp: data,
					isLoading: false
				})
			})
	}

	handleClick(e) {
		this.setState({
			displayedPosts: this.state.displayedPosts + 10
		})
	}

	handleFilter(e) {
		let searchQuery = e.target.value;
		if (searchQuery) {
			let searchedPosts = this.state.posts.filter(post => {
				return post.body.toLowerCase().indexOf(searchQuery) !== -1;
			})
			this.setState({
				posts: searchedPosts
			})
		} else {
			this.setState({
				posts: this.state.postsBackUp
			})
		}
	}

	render() {
		return (
			<div className="App">
				<FilterPosts onChange={this.handleFilter} />
				<PostList posts={this.state.posts.slice(0, this.state.displayedPosts)} />
				<MoreButton onClick={this.handleClick} />
				{this.state.isLoading && <div>Loading...</div>}
			</div>
		);
	}

	componentDidUpdate() {

		// setTimeout(
		// 	window.scrollTo(
		// 		{
		// 			top: document.body.scrollHeight,
		// 			behavior: "smooth"
		// 		}
		// 	), 1000
		// )
	}

}

export default App;
