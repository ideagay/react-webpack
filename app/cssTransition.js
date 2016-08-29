/**
 * Created by hyb on 16/8/25.
 */
var React=require('react');
var ReactDOM=require('react-dom');
var ReactAddons=require('react-addons');
var ReactCSSTransitionGroup=require('react-addons-css-transition-group');
require('../assets/css/cssTransition.less');
var TodoList = React.createClass({
    mixins:[ReactAddons.PureRenderMixin],
    getInitialState: function() {
        return {items: ['hello', 'world', 'click', 'me']};
    },
    handleAdd: function() {
        var newItems =
            this.state.items.concat([prompt('Enter some text')]);
        this.setState({items: newItems});
    },
    handleRemove: function(i) {
        var newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    },
    render: function() {
        var items = this.state.items.map(function(item, i) {
            console.log(item);
            return (
                <div key={item} onClick={this.handleRemove.bind(this, i)}>
                    {item}
                </div>
            );
        }.bind(this));
        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

ReactDOM.render(<TodoList/>,document.getElementById('content'));


//使用requestAnimationFrame实现间隔渲染
var Positioner=React.createClass({
    getInitialState:function(){
        return {position:0}
    },
    resolveAnimationFrame:function(){
        var timetamp=new Date();
        var timeRemaining=Math.max(0,this.props.completedTimetamp-timetamp);
        if(timeRemaining>0){
            this.setState({position:timeRemaining});
        }
    },
    componentWillUpdate:function(){
        if(this.props.completedTimetamp){
            requestAnimationFrame(this.resolveAnimationFrame);
        }
    },
    render:function(){
        var divStyle={left:this.state.position,position:'absolute'};
        return (
            <div style={divStyle}>
                this will animate
            </div>
        )
    }
});

ReactDOM.render(<Positioner completedTimetamp='0'/>,document.getElementById("animate"));