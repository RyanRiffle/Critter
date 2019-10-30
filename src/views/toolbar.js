import React from 'react';
import { connect } from 'react-redux';

import { majorScale, Pane } from 'evergreen-ui';

class Toolbar extends React.Component {
	render() {
		return (
			<Pane position='absolute' top='0' right='0' left='0' display='flex'>
				<Pane flex={1} display='flex'></Pane>
				<Pane padding={8} paddingRight={32}>
					{this.props.children}
				</Pane>
			</Pane>
		);
	}
}

export default Toolbar;