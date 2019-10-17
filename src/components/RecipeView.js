import Brauhaus from 'brauhaus';
import 'brauhaus-beerxml';
import React from 'react';
import { Box, Heading, Grid, Table, TableHeader, TableRow, TableCell, TableBody, Button, Meter} from 'grommet';
//import { Link } from 'react-router-dom';
import { FormPrevious } from 'grommet-icons';


class RecipeView extends React.Component 
{

  constructor(props)
  {
  	super(props);
  	console.log(window.db.get('recipes').find({_id: this.props.match.params.id}).value());
  	this.state = {
  		recipe: window.db.get('recipes').find({_id: this.props.match.params.id}).value()
  	};
  }

  renderFermentables()
  {
  	var rows = [];

  	rows = this.state.recipe.fermentables.map((obj) => {
  		return (
  			<TableRow>
  				<TableCell>{Math.round(obj.weight * 2.20462)} lbs</TableCell>
  				<TableCell>{obj.name}</TableCell>
  				<TableCell>{obj.yield}%</TableCell>
  				<TableCell>{obj.color}</TableCell>
  			</TableRow>
  		);
  	});

  	return (
  		<Table>
  			<TableHeader>
  				<TableRow>
  					<TableCell>Amount</TableCell>
  					<TableCell>Name</TableCell>
  					<TableCell>Yield</TableCell>
  					<TableCell>Color</TableCell>
  				</TableRow>
  			</TableHeader>
  			<TableBody>
  				{rows}
  			</TableBody>
  		</Table>
  	);
  }

  renderHops()
  {
  	var rows = this.state.recipe.spices.map((obj) => {
  		return (
  			<TableRow>
  				<TableCell>{obj.weight} kg</TableCell>
  				<TableCell>{obj.name}</TableCell>
  				<TableCell>{obj.aa}%</TableCell>
  				<TableCell>{obj.use}</TableCell>
  				<TableCell>{obj.time}&nbsp;mins</TableCell>
  			</TableRow>
  		);
  	});

  	return (
  		<Table>
  			<TableHeader>
  				<TableRow>
  					<TableCell>Amount</TableCell>
  					<TableCell>Name</TableCell>
  					<TableCell>Alpha</TableCell>
  					<TableCell>Use</TableCell>
  					<TableCell>Time</TableCell>
  				</TableRow>
  			</TableHeader>
  			<TableBody>
  				{rows}
  			</TableBody>
  		</Table>
  	);
  }

  renderYeast()
  {
  	var rows = this.state.recipe.yeast.map((obj) => {
  		return (
  			<TableRow>
  				<TableCell>{obj.name}</TableCell>
  				<TableCell>{obj.type}</TableCell>
  				<TableCell>{obj.form}</TableCell>
  				<TableCell>{obj.attenuation}%</TableCell>
  			</TableRow>
  		);
  	});

  	return (
  		<Table>
  			<TableHeader>
  				<TableRow>
  					<TableCell>Name</TableCell>
  					<TableCell>Type</TableCell>
  					<TableCell>Form</TableCell>
  					<TableCell>Attenuation</TableCell>
  				</TableRow>
  			</TableHeader>
  			<TableBody>
  				{rows}
  			</TableBody>
  		</Table>
  	);
  }

  render() 
  {
  	if (!this.state.recipe) {
  		return "Hello";
  	}

  	console.log(JSON.stringify(this.state.recipe, null, 2));
    return (
    	<Box fill={true}>
	    	<Box pad={{left: 'medium'}} background='light-3' border={{color: 'light-4', size: 'small', side: 'bottom'}}>
	    		<Heading level='4' color='brand' margin='medium'>
	    			<Button icon=<FormPrevious size='medium'/> label={this.state.recipe.name} plain={true} onClick={() => {this.props.history.goBack()}}/>	
	    		</Heading>
	    	</Box>
	    	<Grid
	    		rows={['small', 'small']}
	    		columns={['50%', '50%']}
	    		areas={[
	    			{ name: 'fermentables', start: [0, 0], end: [0, 1]},
	    			{ name: 'hops', start: [1, 0], end: [1, 0]},
	    			{ name: 'yeast', start: [0, 1], end: [0, 1]}
	    		]}
	    		fill={true}
	    	>
	    		<Box area='fermentables' pad='medium' margin={{left: 'medium', top: 'medium'}}>
	    			<Heading level='4' margin='xsmall'>Fermentables</Heading>
	    			{this.renderFermentables()}
	    		</Box>
	    		<Box area='hops' pad='medium' margin={{top: 'medium', right: 'medium'}}>
	    			<Heading level='4' margin='xsmall'>Hops</Heading>
	    			{this.renderHops()}
	    		</Box>
	    		<Box area='yeast' pad='medium' margin={{left: 'medium', top: 'large'}}>
	    			<Heading level='4' margin='xsmall'>Yeast</Heading>
	    			{this.renderYeast()}
	    		</Box>
	    	</Grid>
    	</Box>
    );
  }
}

export default RecipeView;