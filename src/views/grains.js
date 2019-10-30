import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { 
	Position, 
	Table, 
	IconButton, 
	Popover, 
	Menu, 
	Tooltip,
	Text,
	Button
} from 'evergreen-ui';

import { CreateGrain, EditGrain, RemoveGrain } from '../redux/actions/grains';
import TableView from './tableview';
import EditSideSheet from './editsidesheet';
import Toolbar from './toolbar';

const mapStateToProps = (state) => {
	console.log(state);
	return {
		grains: state.grainState.present.grains
	};
};

class Grains extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sidesheetVisible: false,
			selectedIndex: -1,
			selectedItem: _.mapValues(this.props.grains[0], () => '')
		};
	}

	setSideSheet(visible, index, edit) {
		if (index === -1) {
			return this.setState({
				sidesheetVisible: visible,
				sidesheetHeading: 'Create Grain',
				selectedIndex: index,
				selectedItem: _.mapValues(this.props.grains[0], () => '')
			});
		}

		return this.setState({
			sidesheetVisible: visible,
			sidesheetHeading: 'Edit Grain',
			selectedIndex: index,
			selectedItem: {
				...this.props.grains[index]
			}
		});
	}

	applyEdits(values) {
		if (this.state.selectedIndex !== -1) {
			this.props.dispatch(EditGrain(this.state.selectedIndex, values));
			this.setSideSheet(false, -1);
			return;
		}

		this.props.dispatch(CreateGrain(values));
		this.setSideSheet(false, -1);
	}

	removeGrain(grainIndex) {
		this.props.dispatch(RemoveGrain(grainIndex));
	}

	renderRowMenu(item, index) {
		return (
			<Menu>
				<Menu.Group title={item.name}>
					<Menu.Item onSelect={this.setSideSheet.bind(this, true, index)}>Edit</Menu.Item>
					<Menu.Item intent='danger' onSelect={this.removeGrain.bind(this, index)}>Delete</Menu.Item>
				</Menu.Group>
			</Menu>
		)
	}

	render() {
		return (
			<React.Fragment>
				<Toolbar>
					<Button 
						height={36} 
						appearance='primary'
						onClick={this.setSideSheet.bind(this, true, -1)}>
						New Grain
					</Button>
				</Toolbar>
				<EditSideSheet
					isShown={this.state.sidesheetVisible}
					heading={this.state.sidesheetHeading}
					fields={[
						{
							property: 'name',
							label: 'Name',
							placeholder: 'My Specialty Grain'
						},
						{
							property: 'yield',
							label: 'Yield',
							placeholder: '78'
						},
						{
							property: 'color',
							label: 'Color',
							placeholder: '2'
						},
						{
							property: 'description',
							label: 'Description',
							placeholder: 'Makes it taste good!',
							type: 'textarea'
						}
					]}
					values={this.state.selectedItem}
					onCloseComplete={this.setSideSheet.bind(this, false, -1)}
					onApply={this.applyEdits.bind(this)}/>
				<TableView 
					key='_id'
					columns={[
						{
							label: 'Name',
							property: 'name'
						},
						{
							label: 'Yield',
							property: 'yield',
							render: (item) => {
								return (
									<Table.TextCell>{item.yield}%</Table.TextCell>
								)
							}
						},
						{
							label: 'Color',
							property: 'color'
						},
						{
							label: '',
							property: '_id',
							render: (item, index) => {
								return (
									<Table.Cell width={48} flex='none'>
										<Popover
											content={this.renderRowMenu.bind(this, item, index)}
											position={Position.BOTTOM_RIGHT}
											float='right'>
											<Tooltip content='Actions'>
												<IconButton icon='more' height={24} appearance='minimal' position='absolute' right={32}/>
											</Tooltip>
										</Popover>
									</Table.Cell>
								)
							}
						}
					]}
					data={this.props.grains}/>
			</React.Fragment>
		);
	}
}

export default connect(mapStateToProps)(Grains);