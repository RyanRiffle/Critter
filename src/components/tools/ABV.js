import React from 'react';
import {Box, TextInput, FormField, Grid, Heading} from 'grommet';
import {abv} from 'beermath';

class ABV extends React.Component 
{
  constructor()
  {
  	super()
  	this.state = {
  		og: '',
  		fg: '',
  		answer: ''
  	};
  }

  gravityChanged(event, which)
  {
  	var val = {};
  	val[event.target.name] = event.target.value;
  	this.setState(val);

  	var og = parseFloat(this.state.og);
  	var fg = parseFloat(this.state.fg);
  	if (!isNaN(og) && !isNaN(fg)) {
  		this.setState({answer: abv(og, fg)})
  	}
  }

  renderAnswer()
  {
  	if (isNaN(this.state.answer) || this.state.answer === '') {
  		return;
  	}

  	return (
  		<Box gridArea='answer' align='center'>
			<Heading level={1} align='left'>ABV: {this.state.answer} %</Heading>
		</Box>
  	);
  }

  render() 
  {
    return (
    	<Grid align='center' 

    		fill={true} 
    		rows={['small', 'small']}
    		columns={['small']}
    		gap='small'
    		areas={[
    			{ name: 'og', start: [1, 0], end: [2, 0]},
    			{ name: 'fg', start: [3, 0], end: [4, 0]},
    			{ name: 'btn', start: [5, 0], end: [5, 0]},
    			{ name: 'empty', start: [6, 0], end: [6, 0]},
    			{ name: 'answer', start: [0, 1], end: [6, 1]}
    		]}>
    		<Box gridArea='og'>
	    		<FormField label='Origional Gravity (OG)'>
		    		<TextInput placeholder='Origional Gravity (OG)' 
		    			defaultValue={this.state.og} 
		    			name='og'
		    			onChange={this.gravityChanged.bind(this)}/>
	    		</FormField>
    		</Box>
    		<Box gridArea='fg'>
	    		<FormField label='Final Gravity (FG)'>
		    		<TextInput placeholder='Final Gravity (FG)'
		    			defaultValue={this.state.fg}
		    			name='fg'
		    			onChange={this.gravityChanged.bind(this)}/>
	    		</FormField>
    		</Box>
    		{this.renderAnswer()}
    	</Grid>
    );
  }
}

export default ABV;