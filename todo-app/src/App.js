import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState();

  let x;

  return (
    <div>
      <form>
        <input
          type='text'
          value={name}
          placeholder='enter a name'
          onChange={event => {
            setName(event.target.value);
          }}
        ></input>
      </form>
      <h4>{name}</h4>
    </div>
  );
};

export default App;
