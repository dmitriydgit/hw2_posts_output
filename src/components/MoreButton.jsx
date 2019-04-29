import React from 'react';
import './MoreButton.css';

class MoreButton extends React.Component {
	render() {
		return (
			<button className="load_button" onClick={this.props.onClick}>Load more posts </button>
		);
	}
}

export default MoreButton;
