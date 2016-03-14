var React = require('react');
var ReactDOM = require('react-dom');


var TodoList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <li key={item.id}>{item.text}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});


var MealType = React.createClass({

  render: function()
  {
    return(
      <div>
      <h4>{this.props.localMealType}</h4>
      <TodoApp />
      </div>
    )
  }
})

var DayDiary = React.createClass({
    render: function() {
      var createMealType = function (mealType)
      {
        return (<MealType localMealType={mealType} />)
      }
      return <div>
              <div>
              <span>Class: 2</span>&nbsp;<span>Name: Ayanna</span>
              </div>
              <div>
                Date: Monday , 14-03-2016
              </div>
            {this.props.mealTypes.map(createMealType)}
            </div>;
    }
  });


ReactDOM.render(<DayDiary  mealTypes={['Breakfast','Lunch', 'Supper']}  />,   document.getElementById('app'));
