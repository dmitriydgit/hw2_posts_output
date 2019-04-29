import React from 'react';
import PostListItem from './PostListItem'



class PostList extends React.Component {
	render() {
		return (
			<ol className="post_list">
				{this.props.posts.map(function (item) {
					return (
						<li key={item.id}>
							<PostListItem
								id={item.id}
								title={item.title}
								body={item.body}
							/>
						</li>
					)
				})}
			</ol>
		);
	}
}

export default PostList;
