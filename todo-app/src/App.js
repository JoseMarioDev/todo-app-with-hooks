import React, { useState } from 'react';
import styled from 'styled-components';

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

const App = () => {
  const [name, setName] = useState();

  return (
    <Container>
      <Form>
        <Input
          type="text"
          value={name}
          placeholder="enter a name"
          onChange={event => {
            setName(event.target.value);
          }}
        ></Input>
      </Form>
      <H4>my name is: {name}</H4>
    </Container>
  );
};

export default App;
