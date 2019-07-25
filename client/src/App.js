import React, { useState, Fragment } from 'react';
import Navbar from './components/Navbar';
import Content from './components/content';
import logo from './components/kut-my-link2.png';

import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const showAnswer = () => {
    console.log('inside showAnswer');
    axios
      .get('http://localhost:3001/api/url')
      .then(ans => {
        console.log(ans.data.urls);
        setData(ans.data.urls);
      })
      .catch(err => {
        console.log(err);
      });
    // setData(1);
    // console.log(data);
  };

  return (
    <div className='App'>
      <Navbar />
      <Fragment>
        <br />
        <br />
        <br />
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center mt-5'>
              <img src={logo} style={{ width: '30rem' }} />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 mt-3 text-center'>
              <input
                type='url'
                className='text-center mt-5'
                placeholder='Paste your link here'
                style={{
                  width: '70rem',
                  boxShadow: '5px 5px #edf2f8',
                  borderRadius: '25px',
                  height: '4rem',
                  backgroundColor: '#f1f9ec'
                }}
              />
            </div>
            <div className='col-12 text-center mt-3 pt-2'>
              <button
                className='btn btn-primary'
                type='submit'
                style={{
                  width: '20rem',
                  fontSize: '1.3rem',
                  boxShadow: '5px 5px 2px #89CFF0',
                  border: 'none',
                  borderRadius: '25px'
                }}
              >
                Shorten my URL
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='text-center'>
          <button
            onClick={showAnswer}
            type='button'
            className='btn btn-outline-primary text'
            style={{ width: '25rem', fontSize: '1.2rem' }}
          >
            Click here to show all the active url's
          </button>
        </div>
      </Fragment>
      <Content data={data} />
    </div>
  );
};

export default App;
