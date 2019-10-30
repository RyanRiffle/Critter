import React from 'react';
import { Box, DataTable, Anchor, Text, Button, Menu } from 'grommet';
import { New } from 'grommet-icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import FuzzySearch from 'fuzzy-search';

class Recipes extends React.Component {
	constructor(props)
	{
		super(props);
        this.author = this.props.match ? this.props.match.params.author : null;
		this.state = {
			activeId: null,
			recipes: window.db.get('recipes').value(),
            groupBy: undefined
		};

        this.searchTimeout = null;

        if (this.author) {
            this.state.recipes = window.db.get('recipes').filter(recipe => recipe.author === this.author).value();
        }
	}

    onSearch(params)
    {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = null;
        }

        this.searchTimeout = setTimeout(function() {
            var keys = Object.keys(params).map((i) => {
                return i.toLowerCase();
            });

            const searcher = new FuzzySearch(this.state.recipes, keys, {
                caseSensitive: false
            });

            var results = searcher.search(params[keys[0]]);
        }.bind(this), 500);
    }

    setGroupBy(prop)
    {
        var recipes = this.state.recipes;
        recipes.sort((a, b) => { return a[prop] > b[prop] ? 1 : -1 });
        this.setState({
            groupBy: prop,
            recipes: recipes
        });
    }

  render() {
    return (
    	<Box style={{overflow: 'scroll'}} fill={true}>
            <Box 
                fill='horizontal' 
                pad='medium' 
                alignContent='center'
                align='center' 
                background='light-3' 
                border={{color: 'light-4', size: 'small', side: 'bottom'}} 
                margin={{'bottom': 'medium'}}
                direction='row'>
                <Menu label='Group By'
                    items={[
                        { label: 'None', onClick: this.setGroupBy.bind(this, undefined) },
                        { label: 'Author', onClick: this.setGroupBy.bind(this, 'author') },
                        { label: 'Style', onClick: this.setGroupBy.bind(this, 'style.category') },
                        { label: 'Batch Size', onClick: this.setGroupBy.bind(this, 'batchSize') }
                    ]}
                />
                <Menu label='Create' icon={<New/>}/>
            </Box>
            <Box pad='medium'>
        		<DataTable primaryKey='_id' 
                    sortable={true} 
                    step={500} 
                    onSearch={this.onSearch.bind(this)}
                    groupBy={this.state.groupBy}
        			columns={[
        				{
        					property: 'Name',
        					header: <Text>Name</Text>,
                            search: true,
        					render: (data) => {
        						return (
        							<Link to={'/recipes/' + data._id}>
        								<Anchor as='span' label={data.name}/>
        							</Link>
        						);
        					}
        				},
        				{
        					property: 'author',
        					header: <Text>Author</Text>
        				},
                        {
                            property: 'style.category',
                            header: <Text>Style</Text>,
                            sortable: true
                        },
        				{
        					property: 'batchSize',
        					header: <Text>BatchSize</Text>,
                            render: (data) => {
                                return (
                                    <Text>
                                        {Math.round(data.batchSize / 3.7)} Gal
                                    </Text>
                                );
                            }
        				},
                        {
                            property: '_id',
                            header: <Text>Fermentation Time</Text>,
                            primary: true,
                            render: (data) => {
                                return (
                                    <Text>{moment.duration(data.primaryDays + data.secondaryDays, 'days').asWeeks()} weeks</Text>
                                );
                            }
                        }
        			]}

        			data={this.state.recipes}
        		/>
            </Box>
    	</Box>
    );
  }
}

export default Recipes;