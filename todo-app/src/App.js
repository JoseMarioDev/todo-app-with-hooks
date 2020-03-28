/* eslint no-shadow: 1 */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

// styling
const Container = styled.div`
  /* outline: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 10% auto; */
  padding: 40px;
`;
const Form = styled.form`
  margin: 0 auto;
`;
const H4 = styled.h4`
  font-size: 20px;
  color: navy;
`;
const Input = styled.input`
  padding: 5px 10px;
  width: 200px;
`;
//

const App = () => {
  // hooks
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);

  // functions
  const handleChanges = useCallback(event => {
    setTodo(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          content: todo,
          isCompleted: false,
        },
      ]);
      setTodo('');
    },
    [todo, todos]
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={todo}
          placeholder="enter a todo"
          onChange={handleChanges}
        ></Input>
        <button type="submit">Add Todo</button>
      </Form>
      <H4>My Todo List</H4>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" />
            {todo.content}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default App;
