import React, { Fragment, useState } from 'react';

const table_elements = ({ element }) => {
  console.log(element);
  return (
    <Fragment>
      <div className='text-center'>
        <table
          className='table text-center my-4'
          style={{
            borderRadius: '10px',
            boxShadow: '4px 4px 3px #999999',
            width: '80%'
          }}
        >
          <thead className='' style={{ backgroundColor: '#609DE6' }}>
            <tr>
              <th className='col' scope='font-weight-bold'>
                Original URL
              </th>
              <th className='col' scope='font-weight-bold'>
                Created
              </th>
              <th className='col' scope='font-weight-bold'>
                Short URL
              </th>
              <th className='col' scope='font-weight-bold'>
                Clicks
              </th>
              <th className='col' scope='font-weight-bold'>
                Icons
              </th>
              <th className='col' scope='font-weight-bold'>
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='col'>visit</td>
              <td className='col'>
                {element.date.split(' ')[1]} {element.date.split(' ')[2]}
                {element.date.split(' ')[3]}
              </td>
              <td className='col'>
                {element.base_url}/{element.short_id}
                ::after
              </td>
              <td className='col'>0</td>
              <td className='col'>
                {/* <div class='container' style={{ width: '100%' }}>
                  <div class='row' style={{ width: '100%' }}>
                    <div class='col-xs-12'>
                      <button
                        className='btn btn-primary m-2 p-0'
                        style={{ height: '30px', width: '50px' }}
                      >
                        Stats
                      </button>
                    </div>

                    <div class='col-xs-6'>
                      <img
                        href='https://www.google.com/'
                        src='img/627249-delete3-512.png'
                        style={{ height: '15px' }}
                      />
                    </div>
                    <div class='col-xs-6'>
                      <img
                        href='http://google.com'
                        src='img/qr__code_coding_scan_qrcode-512.png'
                        style={{ height: '15px' }}
                      />
                    </div>
                  </div>
                </div> */}
                <button class='btn' style={{ width: '5rem' }}>
                  Stats
                </button>
              </td>
              <td className='col text-center'>
                <button
                  class='btn'
                  style={{
                    width: '2rem',
                    height: '2rem',
                    display: 'inline',
                    borderRadius: '50%'
                  }}
                >
                  <i class='fa fa-qrcode' style={{ fontSize: '0.8rem' }} />
                </button>
                <button
                  class='btn'
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    display: 'inline'
                  }}
                >
                  <i class='fa fa-trash' style={{ fontSize: '0.8rem' }} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default table_elements;
