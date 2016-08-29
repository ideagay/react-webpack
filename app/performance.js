/**
 * Created by hyb on 16/8/25.
 */
var React=require('react');
var ReactDOM=require('react-dom');
var ReactAddons=require('react-addons');
var update=require('react-addons-update');
var MyUpdate=React.createClass({
    getInitialState:function(){
        return {items:['1','2','3','4']}
    },
    handleClick:function(e){
        var len=this.state.items.length;
        var newItems=update(this.state.items,{
            $push:[String(len+1)]
        });
        this.setState({
            items:newItems
        })
    },
    render:function(){
        var items=this.state.items.map(function(item,i){
            return (
                <p key={item}>
                    {item}
                </p>
            )
        });
        return (
            <div>
                <button onClick={this.handleClick}>add</button>
                {items}
            </div>
        )
    }
});

ReactDOM.render(<MyUpdate/>,document.getElementById('update'));