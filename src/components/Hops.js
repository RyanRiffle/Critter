import React from 'react';
import {Box, DataTable, Anchor, Text} from 'grommet';
import { Link } from 'react-router-dom';

class Hops extends React.Component {
	constructor()
	{
		super();
		this.state = {
			activeId: null,
			hops: window.db.get('hops').value()
		};
	}

  render() {
    return (
    	<Box pad={{left: 'large', right: 'large', top: 'medium'}} style={{overflow: 'scroll'}} fill={true}>
    		<DataTable primaryKey='_id' sortable={true} step={500}
    			columns={[
    				{
    					property: 'Hop',
    					header: <Text>Name</Text>,
    					render: (data) => {
    						return (
    							<Link to={'/ingredients/hops/' + data._id}>
    								<Anchor as='span' label={data.Hop}/>
    							</Link>
    						);
    					}
    				},
    				{
    					property: 'Origin',
    					header: <Text>Origin</Text>
    				},
    				{
    					property: 'Type',
    					header: <Text>Type</Text>
    				},
    				{
    					property: 'Alpha',
    					header: <Text>Alpha</Text>
    				},
    				{
    					property: 'Beta',
    					header: <Text>Beta</Text>
    				}
    			]}

    			data={this.state.hops}
    		/>
    	</Box>
    );
  }
}

export default Hops;