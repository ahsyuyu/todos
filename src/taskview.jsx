var React=require("react");
var Reflux=require("reflux");
var store=require("./store");
var actions=require("./actions");//凡是修改資料皆透過action

var TaskView = React.createClass({
	mixins:[Reflux.listenTo(store,"onStore")]
	,getInitialState:function(){
		return {data:[]};
	}
	,onStore:function(data) {
		this.setState({data:data});
	}
	,toggeldone:function(e){
		actions.toggleDone(parseInt(e.target.dataset.idx));
	}
	,renderItem:function(item,idx) {
		var cls=item.done?"task done":"task";
		return <div className={cls} data-idx={idx} onClick={this.toggeldone}>{item.name}</div>
	}
	,render: function() {
		var res=this.state.data.map(this.renderItem);
		return <div>
			{res}
		</div>
	}
});
module.exports=TaskView;