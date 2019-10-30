import React from 'react';
import { connect } from 'react-redux';
import './db';

import './App.css';
import { Route, Link } from 'react-router-dom';
import { majorScale, Pane, Tablist, SidebarTab, Heading, Text } from 'evergreen-ui';

import Tools from './components/Tools';
import Hops from './views/hops';
import Yeast from './views/yeast';
import Recipes from './views/recipes';
import Grains from './views/grains';

import Home from './views/home';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    tabs: state.tabState.tabs,
    toolbar: ''
  };
};

class App extends React.Component
{
  constructor(props)
  {
    console.log(props);
    super(props);
    this.state = {
      selectedTab: this.props.tabs[0].label,
      toolbar: [

      ]
    }
  }

  setToolbar(view, node) {
    this.setState({
      toolbar: node
    })
  }

  render() 
  {
    return (
      <React.Fragment>
        <Pane height={majorScale(5)} display='flex' padding={majorScale(2)}>
          <Heading size={800}>Critter</Heading>
          <Pane marginLeft='auto'>
            
          </Pane>
        </Pane>
        <Pane display='flex' marginTop={majorScale(2)} height='100%'>
          <Tablist
            flexBasis={200} marginRight={majorScale(2)} marginLeft={majorScale(2)}> 
            {this.props.tabs.map((tab, index) => {
              return (
                <Link to={ tab.href } key={ index }>
                  <SidebarTab
                    id={ tab.label }
                    height={ majorScale(8) }
                    isSelected={ tab.label === this.state.selectedTab }
                    onSelect={ () => { this.setState({ selectedTab: tab.label }) } }
                  >
                    {tab.label}
                  </SidebarTab>
                </Link>
              );
            })}
          </Tablist>
          <Pane background='tint1' flex='1' border={'default'} overflow='scroll-y'>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/recipes'>
              <Recipes/>
            </Route>
            <Route path='/hops'>
              <Hops/>
            </Route>
            <Route path='/yeast'>
              <Yeast/>
            </Route>
            <Route path='/grains'>
              <Grains dispatch={this.props.store.dispatch} setToolbar={this.setToolbar.bind(this, 'grains')}/>
            </Route>
          </Pane>
        </Pane>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
