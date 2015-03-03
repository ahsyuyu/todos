var React=require("react");
var actions=require("./actions");
var TaskInput=React.createClass({
	keypress: function(e){
		if(e.key=="Enter"){
			actions.add(e.target.value);
			e.target.value="";
		}
	},
  	render:function() {
		return <div>
      		<input onKeyPress={this.keypress} placeholder="What needs to be done?" ></input>
      	</div>
	}
});

module.exports=TaskInput;