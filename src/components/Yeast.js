import React from 'react';
import {Box, DataTable, Anchor, Text} from 'grommet';
import { Link } from 'react-router-dom';

class Yeast extends React.Component {
    constructor()
    {
        super();

        this.state = {
            yeast: window.db.get('yeast').value()
        }
    }
  render() {
    return (
    	<Box pad={{left: 'large', right: 'large', top: 'medium'}} style={{overflow: 'scroll'}} fill={true}>
            <DataTable sortable={true} primaryKey='_id' step={500}
                columns={[
                    {
                        property: 'Name',
                        header: <Text>Name</Text>,
                        render: (data) => {
                            return (
                                <Link to={'/ingredients/yeast/' + data._id}>
                                    <Anchor as='span'>
                                        {data.Name}
                                    </Anchor>
                                </Link>)
                        }
                    },
                    {
                        property: 'Lab',
                        header: <Text>Lab</Text>,
                    },
                    {
                        property: 'Type',
                        header: <Text>Type</Text>
                    },
                    {
                        property: 'Form',
                        header: <Text>Form</Text>
                    },
                    {
                        property: 'Temp',
                        header: <Text>Temp</Text>
                    },
                    {
                        property: 'Attenuation',
                        header: <Text>Attenuation</Text>
                    },
                    {
                        property: 'Flocculation',
                        header: <Text>Flocculation</Text>
                    }
                ]}

                data = {this.state.yeast}/>
    	</Box>
    );
  }
}

export default Yeast;