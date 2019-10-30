import React from 'react';
import { connect } from 'react-redux';

import { majorScale, Pane, Heading, SearchInput } from 'evergreen-ui';

import { SetToolbar } from '../redux/actions/toolbar';

const mapStateToProps = (state) => {
	return {

	};
};

class Home extends React.Component {
	render() {
		return (
			<Pane>
				<Heading size={900} textAlign='center' width='100%' marginTop={majorScale(8)}>It's brew day already</Heading>
				<Pane alignItems='center' width='100%' marginTop={majorScale(12)} paddingLeft={8}>
					<SearchInput placeholder='Pale Ale' items={[]} height={majorScale(8)} width='80%' marginLeft='15%' marginRight='15%'/>
				</Pane>
			</Pane>
		);
	}
}

export default connect(mapStateToProps, { SetToolbar })(Home);