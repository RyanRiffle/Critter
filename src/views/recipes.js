import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Table, Menu, Popover, Position, Tooltip, IconButton } from 'evergreen-ui';

import { CreateRecipe, RemoveRecipe, EditRecipe } from '../redux/actions/recipes';
import Helpers from '../Helpers';
import TableView from './tableview';
import EditSideSheet from './editsidesheet';

const mapStateToProps = (state) => {
	return {
		recipes: state.recipeState.recipes
	};
};

class Recipes extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sidesheetVisible: false,
			selectedIndex: -1,
			selectedItem: _.mapValues(this.props.recipes[0], () => '')
		};
	}

	removeRecipe(index) {
		this.props.dispatch(RemoveRecipe(index));
	}

	setSideSheet(visible, index, edit) {
		if (index === -1) {
			return this.setState({
				sidesheetVisible: visible,
				sidesheetHeading: 'Create Recipe',
				selectedIndex: index,
				selectedItem: _.mapValues(this.props.recipes[0], () => '')
			});
		}

		return this.setState({
			sidesheetVisible: visible,
			sidesheetHeading: 'Edit Recipe',
			selectedIndex: index,
			selectedItem: {
				...this.props.recipes[index],
				batchSize: Helpers.LiterToGal(this.props.recipes[index].batchSize),
				boilSize: Helpers.LiterToGal(this.props.recipes[index].boilSize)
			}
		});
	}

	renderRowMenu(item, index) {
		return (
			<Menu>
				<Menu.Group title={item.name}>
					<Menu.Item onSelect={this.setSideSheet.bind(this, true, index)}>Edit</Menu.Item>
					<Menu.Item intent='danger' onSelect={this.removeRecipe.bind(this, index)}>Delete</Menu.Item>
				</Menu.Group>
			</Menu>
		)
	}

	applyEdits(values) {
		values.boilSize = Helpers.GalToLiter(values.boilSize);
		values.batchSize = Helpers.GalToLiter(values.batchSize);

		if (this.state.selectedIndex !== -1) {
			this.props.dispatch(EditRecipe(this.state.selectedIndex, values));
			this.setSideSheet(false, -1);
			return;
		}

		this.props.dispatch(CreateRecipe(values));
		this.setSideSheet(false, -1);
	}

	render() {
		return (
			<React.Fragment>
				<EditSideSheet
					isShown={this.state.sidesheetVisible}
					heading={this.state.selectedItem.name}
					views={[
						{
							label: 'General',
							fields: [
								{
									property: 'name',
									label: 'Name',
									placeholder: 'My Specialty Grain'
								},
								{
									property: 'description',
									label: 'Description',
									placeholder: 'Description',
									type: 'textarea'
								},
								{
									property: 'style.category',
									label: 'Style',
									placeholder: 'Stout'
								},
								{
									property: 'type',
									label: 'Method',
									placeholder: 'All Grain',
									type: 'combobox',
									items: ['Extract', 'Partial Mash', 'All Grain', 'Cider', 'Mead', 'Wine']
								},
								{
									property: 'boilSize',
									label: 'Boil Size (Gal)',
									placeholder: '25'
								},
								{
									property: 'batchSize',
									label: 'Batch Size (Gal)',
									placeholder: '5'
								}
							]
						},
						{
							label: 'Fermentables',
							fields: []
						},
						{
							label: 'Hops',
							fields: [],
						},
						{
							label: 'Yeast',
							fields: []
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
							label: 'Style',
							property: 'style.category'
						},
						{
							label: 'Method',
							property: 'type',
							render: (recipe) => {
								return (
									<Table.TextCell>{recipe.type || 'All Grain'}</Table.TextCell>
								)
							}
						},
						{
							label: 'Batch Size',
							property: 'batchSize',
							render: (recipe) => {
								return (
									<Table.TextCell>{Helpers.LiterToGal(recipe.batchSize)} Gal</Table.TextCell>
								)
							}
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
					data={this.props.recipes}/>
			</React.Fragment>
		);
	}
}

export default connect(mapStateToProps, { RemoveRecipe, EditRecipe })(Recipes);