import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

function TodoForm({ inputText, setInputText, todos, setTodos, setStatus }) {
    const [alertWarning, setAlertWarning] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }


    const submitTodoHandler = (e) => {
        e.preventDefault();
        const isEmpty = str => !str.trim().length;
        if (isEmpty(inputText)) {
            setAlertWarning(true);
            setTimeout(() => {
                setAlertWarning(false);
            }, 1000);
        } else {
            setAlertSuccess(true);
            setTimeout(() => {
                setAlertSuccess(false);
            }, 1000);
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() }
            ]);
        }

        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form >
            <div className="search">
            <InputGroup className="mb-3">
                <Form.Control value={inputText} type="text" className="todo-input" placeholder="Add new task" onChange={inputTextHandler} />
                <Button className="todo-button" type="submit" onClick={submitTodoHandler}>
                    <i className="fas fa-plus-circle"></i>
                </Button>
                </InputGroup>
            </div>
            <div className="select">
                <Form.Select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </Form.Select>
            </div>
            <div className="alert-wrapper">
                {alertWarning ? <div className="alert-warning">
                    <div>Please enter task</div>
                </div> : ""}
                {alertSuccess ? <div className="alert-success">
                    <div>Success</div>
                </div> : ""}
            </div>
        </form>
    )
}

export default TodoForm;