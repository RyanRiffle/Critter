import React from 'react';
import { connect } from 'react-redux';

import TableView from './tableview';

const mapStateToProps = (state) => {
	return {
		yeast: state.yeastState.yeast
	};
};

class Yeast extends React.Component {
	render() {
		return (
				<TableView 
					key='_id'
					columns={[
						{
							label: 'Name',
							property: 'Name'
						},
						{
							label: 'Lab',
							property: 'Lab'
						},
						{
							label: 'Type',
							property: 'Type'
						},
						{
							label: 'Form',
							property: 'Form'
						},
						{
							label: 'Temp',
							property: 'Temp'
						},
						{
							label: 'Attenuation',
							property: 'Attenuation'
						},
						{
							label: 'Flocculation',
							property: 'Flocculation'
						}
					]}
					data={this.props.yeast}/>
		);
	}
}

export default connect(mapStateToProps)(Yeast);