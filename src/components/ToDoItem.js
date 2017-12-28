import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }

  handleRemove(index, event) {
    event.preventDefault();
    this.props.removeTodo(index);
  }

  toggleToDoComplition(index, event) {
    event.preventDefaults();
    this.props.toggleToDoState(index);
  }

  handleEdit(event) {
    event.preventDefault();
    this.setState({
      edit: true,
    });
  }

  handleOnEdit(event) {
    event.preventDefault();
  }

  render() {
    const { todo, index } = this.props;
    return (
      <Card>
        <CardHeader
          title={todo.text}
          subtitle={`${todo.date.getDate()} / ${todo.date.getMonth()} / ${todo.date.getFullYear()}`}
          actAsExpander
          showExpandableButton
        />
        <CardText>
          <Toggle
            toggled={todo.done}
            onToggle={this.toggleToDoComplition.bind(this, index)}
            labelPosition="right"
            label="This toggle is mark of completion of this todo."
          />
        </CardText>
        {this.state.edit ? (
          <div>
            <TextField hintText={todo.text} id="newTodoText" />
            <RaisedButton onClick={this.handleOnEdit.bind(this)} label="Edit" primary />
          </div>
				) : (
  <CardTitle title={todo.text} expandable />
				)}
        <CardActions>
          <FlatButton label="Remove" onClick={this.handleRemove.bind(this, index)} />
          <FlatButton label="Edit" onClick={this.handleEdit.bind(this)} />
        </CardActions>
      </Card>
    );
  }
}

export default ToDoItem;
