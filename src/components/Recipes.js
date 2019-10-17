import React from 'react';
import {Box, DataTable, Anchor, Text} from 'grommet';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Recipes extends React.Component {
	constructor(props)
	{
		super(props);
        this.author = this.props.match.params.author || null;
		this.state = {
			activeId: null,
			recipes: window.db.get('recipes').value()
		};

        if (this.author) {
            this.state.recipes = window.db.get('recipes').filter(recipe => recipe.author === this.author).value();
        }
	}

  render() {
    return (
    	<Box pad={{left: 'large', right: 'large', top: 'medium'}} style={{overflow: 'scroll'}} fill={true}>
    		<DataTable primaryKey='_id' sortable={true} step={500}
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
    					header: <Text>Author</Text>,
                        search: true
    				},
    				{
    					property: 'batchSize',
    					header: <Text>BatchSize</Text>,
                        search: true,
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
    );
  }
}

export default Recipes;