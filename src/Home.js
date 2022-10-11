import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [name, setName] = useState('')
  const saveName = (e) => {
    setName(e.target.name.value)
  }
  return (
    <div className="home">
      <div className='box'>
        <div>
          <p className='welcome-text'>Welcome to Razzle App</p>
          {name.length > 0 && <p className='user-name'>{name}</p>}
          {
            name.length === 0 &&
            <form onSubmit={(e) => saveName(e)}>
              <input type='text' className='input-name' name='name' placeholder='Enter Your Name..'></input>
              <input type='submit' className='input-submit' value={'Submit'}></input>
            </form>
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
