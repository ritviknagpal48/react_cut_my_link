import React from 'react';
import Proptypes from 'prop-types';
import logo from './IOSD-logo.png';

const Navbar = () => {
  return (
    <div class='nav-container sticky-top' id='start'>
      <div class='bar bar--sm visible-xs  bg--white bar--absolute collapse sticky-top'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-3 col-md-2'>
              <a href='index.html'>
                <img class='logo logo-dark' alt='logo' src={logo} />
                <img class='logo logo-light' alt='logo' src={logo} />
                {/* <!--<img class="logo logo-dark" alt="logo" src="img/logo-dark.png" />--> */}
                {/* <!--<img class="logo logo-light" alt="logo" src="img/logo-light.png" />--> */}
              </a>
            </div>
            <div class='col-9 col-md-10 text-right'>
              <a
                href='#'
                class='hamburger-toggle'
                data-toggle-class='#menu1; hidden-xs'
              >
                <i class='icon  stack-interface stack-menu' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class='search header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1'>
        <nav
          id='menu1'
          class='bar bar--sm bar-1 bg--white hidden-xs  bar--absolute collapse sticky-top '
          data-scroll-class='100px:pos-fixed'
        >
          <div class='container-fluid px-3'>
            <div class='row'>
              <div class='col-lg-1 col-md-1 text-center hidden-xs px-0 mx-0'>
                <div class='bar__module px-0 mx-0'>
                  <a href='index.html px-0 mx-0' id='logoCenter'>
                    <img
                      class='logo logo-dark px-0 mx-0'
                      alt='logo'
                      src={logo}
                    />
                  </a>
                </div>
              </div>
              <div class='col-lg-8 col-md-8  mx-0 px-5'>
                <div class='bar__module collapse'>
                  <ul class='menu-horizontal px-4 mx-0'>
                    <li>
                      <a href='https:/github.com/IOSD'>GitHub</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-3 col-md-3 pr-1 pl-0 mx-0 text-right'>
                <div class='bar__module'>
                  <a class='btn btn--sm type--uppercase  ' href='login.html'>
                    <span class='btn__text'>Login</span>
                  </a>
                  <a
                    class='btn btn--sm btn--primary type--uppercase my-1'
                    href='https://registrations.iosd.tech/'
                  >
                    <span class='btn__text'>Settings</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
