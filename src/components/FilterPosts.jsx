import React from 'react';
import './FilterPosts.css';

class FilterPosts extends React.Component {
	render() {
		return (
			<input id="filter_input" type="text" onChange={this.props.onChange} placeHolder="Search..." />
		);
	}
}

export default FilterPosts;
