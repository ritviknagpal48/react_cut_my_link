import React, { Fragment, useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Table_element from './table/table_elements';
import axios from 'axios';

function content({ data }) {
  // const [data, setData] = useState(0);
  // const showAnswer = () => {
  //   console.log(data);
  // };
  console.log(data);
  return (
    <Fragment>
      {data.map(element => (
        <Table_element element={element} />
      ))}

      <section className='switchable my-0 feature-large'>
        <div className='container'>
          <div className='row justify-content-around'>
            <div className='col-md-6'>
              <img alt='Image' className='border--round pt-5' src='img/4.png' />
            </div>
            <div className='col-md-6 col-lg-5'>
              <div className='switchable__text'>
                <div className='text-block'>
                  <h2 style={{ fontWeight: 'bold' }}>Attract more clicks</h2>
                </div>
                <p className='lead'>
                  Control how your links look, starting with unique back-halves
                  that show your audience where you’re sending them before they
                  click. Go a step further with custom branded domains and
                  replace “bit.ly” with something that better represents your
                  business. Brands that use custom links get up to 34% more
                  clicks.
                </p>
              </div>
            </div>
          </div>
          {/*end of row*/}
        </div>
        {/*end of container*/}
      </section>
      {/* <div class="container">
                    <hr>
                </div> */}
      <section className='switchable switchable--switch feature-large my-0 pt-5'>
        <div className='container'>
          <div className='row justify-content-around'>
            <div className='col-md-6'>
              <img alt='Image' className='border--round' src='img/6.png' />
            </div>
            <div className='col-md-6 col-lg-5'>
              <div className='switchable__text'>
                <div className='text-block'>
                  <h2 style={{ fontWeight: 'bold' }}>
                    Maximize your performance using real-time analytics
                  </h2>
                </div>
                <p className='lead'>
                  Understand what content is resonating with your audience with
                  comprehensive metrics on every link and campaign—like clicks,
                  geographic data, and top referring channels. Bitly takes the
                  guesswork out of your link performance so you can share more
                  of what your audience wants.
                </p>
              </div>
            </div>
          </div>
          {/*end of row*/}
        </div>
        {/*end of container*/}
      </section>
      {/* <div class="container">
                    <hr>
                </div> */}
      <section className='switchable feature-large my-0'>
        <div className='container'>
          <div className='row justify-content-around'>
            <div className='col-md-6'>
              <img alt='Image' className='border--round' src='img/5.png' />
            </div>
            <div className='col-md-6 col-lg-5'>
              <div className='switchable__text'>
                <div className='text-block'>
                  <h2 style={{ fontWeight: 'bold' }}>
                    Integrate seamlessly with the tools you love
                  </h2>
                </div>
                <p className='lead'>
                  Bitly integrates with nearly every social media and digital
                  marketing tool, saving you time and hassle. Need to create
                  links at scale? Bitly’s got you covered. Whether you need 100
                  links or 100,000, the open and flexible Bitly API makes it
                  simple and seamless.
                </p>
              </div>
            </div>
          </div>
          {/*end of row*/}
        </div>
        {/*end of container*/}
      </section>
      {/* <div class="container">
                    <hr>
                </div>
         */}
      <div className='container'>
        <hr />
      </div>
    </Fragment>
  );
}

export default content;
