import React from 'react';
import './PostListItem.css';

class PostListItem extends React.Component {

	shouldComponentUpdate(nextProps) {
		return this.props.id !== nextProps.id || this.props.title !== nextProps.title || this.props.body !== nextProps.body;
	}

	render() {
		return (
			<div className="post_list_item" >
				<h2> {this.props.title}</h2>
				{this.props.body}
			</div>
		);
	}
}

export default PostListItem;
