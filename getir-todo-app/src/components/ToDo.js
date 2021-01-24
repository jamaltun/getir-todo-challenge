import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../store/actions";

import { InputGroup, Form } from "react-bootstrap";

const Todo = ({ todo, toggleTodo }) => (
  <InputGroup
    className="mb-1 crs-pntr ToDo"
    onClick={() => toggleTodo(todo.id)}
  >
    <InputGroup.Prepend
      className={`flx-gr-1 ${todo.completed && "line-through no-color op-50"}`}
    >
      <InputGroup.Text className="flx-gr-1 tx-ov">
        {todo.content}
      </InputGroup.Text>
    </InputGroup.Prepend>
    <InputGroup.Append>
      <InputGroup.Text className="flx-gr-1">
        <Form.Switch
          type="switch"
          id={`switch-${todo.id}`}
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
      </InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
);

// export default Todo;
export default connect(null, { toggleTodo })(Todo);
