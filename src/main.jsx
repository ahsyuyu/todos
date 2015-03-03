var React=require("react");
var TaskControls=require("./taskcontrols.jsx");
var Listview=require("./listview.jsx");
var TaskInput=require("./taskinput.jsx");
var TaskView=require("./taskview.jsx");
var TaskLeft=require("./taskleft.jsx");

var Maincomponent = React.createClass({
  render: function() {
    return <div className="center">
      <div id="header">Todos</div>
      <TaskInput/>
      <TaskView/>
      <TaskLeft className="inline"/><TaskControls className="inline"/>
    </div>;
  }
});
module.exports=Maincomponent;