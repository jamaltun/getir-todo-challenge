import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.scss";

import Header from "./components/Header";
import AddToDo from "./components/AddToDo";
import List from "./components/List";

import {
  Container,
  Row,
  Card,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";

function ToDoApp() {
  return (
    <div className="App flx dir-c jst-c ialgn-c">
      <Container as="section" className="w-50 w-60-lg w-70-md w-100-sm">
        {/* Logo & Title */}
        <Row>
          <Header title="Simple To Do App" />
        </Row>

        {/* Add To Do Section */}
        <Row>
          <AddToDo />
        </Row>

        {/* To Do List Section */}
        <Row>
          <List />
        </Row>
      </Container>
    </div>
  );
}

export default ToDoApp;
