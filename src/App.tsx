import React from 'react';
import './App.css';
import MyInfo from './aboutMe.json';

function App() {
  return (
    <div className="App">
      {
        MyInfo && MyInfo.map(info => {
          return (
            <div className='box' key={info.id}>
              <strong>{info.name}</strong><br/>
              <p>{info.biography}</p>
              <p>{info.contacts}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
