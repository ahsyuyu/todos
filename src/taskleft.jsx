var React=require("react");
var Reflux=require("reflux");
var store=require("./store");
var actions=require("./actions");
var TaskLeft=React.createClass({
	mixins:[Reflux.listenTo(store,"onStore")]//listenTo很貴(costly) store少用 action 便宜
	//mixins:[Reflux.listenTo(store,"onStore"),Reflux.listenTo(store2,"onStore2")] 如果有兩個store
	,getInitialState:function(){
		return {counter:0};
	}
	,onStore:function(data) {
		var c=0;
		data.map(function(item){
			if(!item.done) c++;
		});
		this.setState({counter:c});
	}
	,render:function() {
		return <div>
      		{this.state.counter} items left
      	</div>
	}
});

module.exports=TaskLeft;