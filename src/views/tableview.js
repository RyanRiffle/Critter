import React from 'react';
import { withRouter } from "react-router-dom";

import { Table } from 'evergreen-ui';
import _ from 'lodash';

class TableView extends React.Component {
	render() {
		return (
				<Table height='91%' className='bigger-font'>
					<Table.Head >
						{this.props.columns.map(columns => (
							<Table.TextHeaderCell key={columns.label}>{columns.label}</Table.TextHeaderCell>
						))}
					</Table.Head>
					<Table.VirtualBody height='100%' width='100%'>
						{this.props.data.map((item, itemIndex) => (
							<Table.Row key={_.get(item, this.props.key)}>
								{this.props.columns.map(col => (
									<Table.TextCell key={_.get(item, this.props.key) + col.label}>{col.render ? col.render(item, itemIndex) : _.get(item, col.property)}</Table.TextCell>
								))}
							</Table.Row>
						))}
					</Table.VirtualBody>
				</Table>
		);
	}
}

export default withRouter(TableView);