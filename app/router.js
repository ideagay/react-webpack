/**
 * Created by hyb on 16/8/30.
 */
// using an ES6 transpiler, like babel
//import { Router, Route, Link } from 'react-router'

// not using an ES6 transpiler
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;
require('../assets/css/router.less');
var Sider = React.createClass({
    render: function () {
        return (
            <div className="clearfix">
                <div className="left-bar">
                    <ul>
                        <li><Link to="/cp1">表格1</Link></li>
                        <li><Link to="/cp2">表格2</Link></li>
                        <li><Link to="/cp3">表格3</Link></li>
                    </ul>
                </div>
                <div className="right-warp">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

var Cp1 = React.createClass({
    render: function () {
        return (
            <h1>Component 1</h1>
        )
    }
});

var Cp2 = React.createClass({
    render: function () {
        return (
            <h1>Component 2</h1>
        )
    }
});

var Cp3 = React.createClass({
    render: function () {
        return (
            <h1>Component 3</h1>
        )
    }
});

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path='/' component={Sider}>
            <IndexRoute component={Cp1}/>
            <Route path="cp1" component={Cp1}/>
            <Route path="cp2" component={Cp2}/>
            <Route path="cp3" component={Cp3}/>
        </Route>
    </Router>
), document.getElementById('router'));