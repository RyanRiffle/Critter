import React from 'react';
import { connect } from 'react-redux';

import TableView from './tableview';

const mapStateToProps = (state) => {
	return {
		hops: state.hopState.hops
	};
};

class Hops extends React.Component {
	render() {
		return (
				<TableView 
					key='_id'
					columns={[
						{
							label: 'Name',
							property: 'Hop'
						},
						{
							label: 'Lab',
							property: 'Origin'
						},
						{
							label: 'Type',
							property: 'Type'
						},
						{
							label: 'Alpha',
							property: 'Alpha'
						}
					]}
					data={this.props.hops}/>
		);
	}
}

export default connect(mapStateToProps)(Hops);