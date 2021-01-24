import React from "react";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../store/selectors";
import { toggleTodo } from "../store/actions";
import { Card } from "react-bootstrap";
import Filters from "../components/Filters";

import ToDo from "../components/ToDo.js";

const List = ({ todos }) => (
  <Card className="w-100 mt-5">
    <Card.Body>
      {/* TO DO List Title & Filter */}
      <div className="w-100 flx dir-r jst-sb ialgn-c mb-3">
        <h3>To Do List</h3>

        <Filters />
      </div>

      {todos && todos.length ? (
        todos.map((todo, index) => {
          return <ToDo todo={todo} key={`todo-${index}`} />;
        })
      ) : (
        <div>There is no todo here!</div>
      )}
    </Card.Body>
  </Card>
);

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

// export default TodoList;
export default connect(mapStateToProps, { toggleTodo })(List);
