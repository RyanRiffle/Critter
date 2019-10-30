import React from 'react';
import {Box, Anchor} from 'grommet';
import { Link } from 'react-router-dom';

class AccordionLink extends React.Component {
  render() {
    return (
    	<Box pad='small'>
    		<Link to={this.props.href || '#'}>
    			<Anchor color='white' as="span" label={this.props.label} icon={this.props.icon}>
    				{this.props.children}
    			</Anchor>
    		</Link>
    	</Box>
    );
  }
}

export default AccordionLink;