/**
 * Created by hyb on 16/8/24.
 */
var React=require('react');
var ReactDOM=require('react-dom');
var MyListCp=React.createClass({
    render:function(){
        return (
            <div>
                this is my list cp changedss!
            </div>
        )
    }
});
ReactDOM.render(<MyListCp/>,document.getElementById('content'));