import React from 'react';
import './App.css';
import {Grid, Box, Accordion, AccordionPanel, Grommet, Heading, Image} from 'grommet';
import AccordionLink from './components/AccordionLink';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Notes, Bar } from 'grommet-icons';

import './db';
import Tools from './components/Tools';
import Hops from './components/Hops';
import Yeast from './components/Yeast';
import RecipeView from './components/RecipeView';
import Recipes from './components/Recipes';
import BeerTheme from './themes/Beer';

function App() {
  return (
    <Grommet theme={BeerTheme} full={true}>
      <Router>
      <Grid
        columns={['medium', 'flex']}
        areas={[
          {name: 'left', start: [0, 0], end: [0, 0]},
          {name: 'right', start: [1, 0], end: [1, 0]}
        ]}
        rows={['full']}
        fill={true}>
        <Box gridArea='left' background='brand'>
          <Box height='small' margin={{bottom: 'medium', top: 'medium'}}>
            <Image fit='contain' src='/logo512.png'/>
          </Box>
          <Accordion>
            <AccordionPanel label='Recipes' >
              <AccordionLink label='All Recipes' href='/recipes'/>
              <AccordionLink label='BrewDog Recipes' href='/recipes/author/BREWDOG'/>
            </AccordionPanel>
            <AccordionPanel label="Ingredients">
              <AccordionLink label='Grains'/>
              <AccordionLink label='Extract'/>
              <AccordionLink label='Hops' href='/ingredients/hops'/>
              <AccordionLink label='Yeast' href='/ingredients/yeast'/>
            </AccordionPanel>
            <AccordionPanel label="Tools">
              <AccordionLink label='Alcohol %' href='/tools/abv'/>
            </AccordionPanel>
          </Accordion>
        </Box>
        <Box gridArea='right' background='light-2'>
            <Route path='/tools/abv' component={Tools.ABV}/>
            <Route path='/ingredients/hops' component={Hops}/>
            <Route path='/ingredients/yeast' component={Yeast}/>
            <Route path='/recipes/author/:author' component={Recipes}/>
            <Route exact path='/recipes' component={Recipes}/>
            <Route path='/recipes/:id' component={RecipeView}/>
        </Box>
      </Grid>
      </Router>
    </Grommet>
  );
}

export default App;
