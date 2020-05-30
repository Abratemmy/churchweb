import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './home.js';
import Gallery from './gallery.js';
import About from './about.js';

const Router = ()=>(
    <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path ='/about' component={About} />
        <Route exact path = '/gallery' component = {Gallery} />
        
    </Switch>
)
export default Router