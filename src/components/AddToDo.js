import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";

import { Card, InputGroup, FormControl, Button } from "react-bootstrap";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  keyDown = (e) => {
    e.key === "Enter" && this.handleAddTodo();
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <Card className="w-100">
        <Card.Body>
          <InputGroup>
            <FormControl
              placeholder="Add A New Squeaky To Do 😎"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="text"
              onChange={(e) => this.updateInput(e.target.value)}
              onKeyDown={(e) => this.keyDown(e)}
              value={this.state.input}
            />
            <InputGroup.Append>
              <Button
                variant={this.state.input === "" ? "secondary" : "primary"}
                onClick={this.handleAddTodo}
                className={this.state.input === "" ? "poi-e-none op-60" : ""}
              >
                Add To List
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default connect(null, { addTodo })(Add);
// export default AddTodo;
