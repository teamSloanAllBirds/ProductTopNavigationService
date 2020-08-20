import React from 'react';

import '../../public/style.css';

class App extends React.Component {

  render() {
    return (
      <div class='top-navigation-container'>
        <div class='top-navigation'>
          <div class='top-navigation-desktop'>
            <nav class='top-navigation-header-desktop'>
              <ul class='top-navigation-header-desktop-list-left'>

                <li class='top-navigation-header-desktop-option-primary'>
                  <div class='top-navigation-header-desktop-button-wrapper'>
                    <button class='top-navigation-header-desktop-button'>
                      <div class='top-navigation-header-desktop-button-content'>
                        <p class='typography-senary-heading'>
                          Men
                        </p>
                      </div>
                    </button>
                  </div>
                </li>

                <li class='top-navigation-header-desktop-option-primary'>
                  <div class='top-navigation-header-desktop-button-wrapper'>
                    <button class='top-navigation-header-desktop-button'>
                      <div class='top-navigation-header-desktop-button-content'>
                        <p class='typography-senary-heading'>
                          Women
                        </p>
                      </div>
                    </button>
                  </div>
                </li>

              </ul>

              <div class='top-navigation-header-desktop-logo-wrapper'>
                <div class='top-navigation-header-desktop-logo'>
                  <a class='top-navigation-header-desktop-logo-anchor'>
                    <div class='icon-allbirds-logo'>
                      <img class='allbirds-logo' data-src='//cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg' alt src='//cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg'>
                      </img>
                    </div>
                  </a>
                </div>
              </div>

              <ul class='top-navigation-header-desktop-list-right'>

                <li class='top-navigation-header-desktop-option-secondary'>
                  <div class='top-navigation-header-desktop-link-wrapper'>
                    <a class='top-navigation-header-desktop-link'>
                      <p class='typography-senary-heading'>
                        Our Materials
                      </p>
                    </a>
                  </div>
                </li>

                <li class='top-navigation-header-desktop-option-secondary'>
                  <div class='top-navigation-header-desktop-link-wrapper'>
                    <a class='top-navigation-header-desktop-link'>
                      <p class='typography-senary-heading'>
                        Stores
                      </p>
                    </a>
                  </div>
                </li>

                <li class='top-navigation-header-desktop-option-tertiary'>
                  <div class='top-navigation-header-desktop-icon'>
                    <a class='top-navigation-header-desktop-icon-anchor'>
                      <div class='icon-user'>
                        <img class='img-logo' data-src='//cdn.allbirds.com/image/upload/v1571355713/icons/user.svg' alt src='//cdn.allbirds.com/image/upload/v1571355713/icons/user.svg'>
                        </img>
                      </div>
                    </a>
                  </div>
                </li>

                <li class='top-navigation-header-desktop-option-tertiary'>
                  <div class='top-navigation-header-desktop-icon'>
                    <a class='top-navigation-header-desktop-icon-anchor'>
                      <div class='icon-help'>
                        <img class='img-logo' data-src='//cdn.allbirds.com/image/upload/v1571947807/icons/help.svg' alt src='//cdn.allbirds.com/image/upload/v1571947807/icons/help.svg'>
                        </img>
                      </div>
                    </a>
                  </div>
                </li>

                <li class='top-navigation-header-desktop-option-tertiary'>
                  <button class='top-navigation-header-desktop-cart-icon-button'>
                    <div class='top-navigation-header-desktop-cart'>

                      <div class='cart-count'>

                        <div class='cart-count-icon'>
                          <svg width="34" height="31" viewBox="0 0 34 31" class="">
                            <path d="M8.4296,4.5812 L11.5266,20.1472 L28.3366,19.1582 L31.7276,4.4012 L20.0506,4.4012 L8.4296,4.5812 Z M11.0356,21.3842 C10.7506,21.3842 10.5006,21.1822 10.4446,20.8982 L7.1386,4.2782 L4.5696,1.5742 L0.6036,1.5742 C0.2706,1.5742 -0.0004,1.3042 -0.0004,0.9712 C-0.0004,0.6372 0.2706,0.3672 0.6036,0.3672 L4.8286,0.3672 C4.9946,0.3672 5.1526,0.4352 5.2666,0.5552 L7.9516,3.3812 L20.0416,3.1942 L32.4856,3.1942 C32.6696,3.1942 32.8436,3.2782 32.9576,3.4222 C33.0726,3.5662 33.1156,3.7542 33.0736,3.9332 L29.4116,19.8692 C29.3516,20.1302 29.1266,20.3212 28.8596,20.3362 L11.0726,21.3832 C11.0606,21.3842 11.0486,21.3842 11.0356,21.3842 Z" id="Fill-1" fill="#231F20" mask="url(#mask-2)" class="jsx-1156968711">
                            </path>
                            <path d="M29.4276,24.4718 L11.1166,24.4718 C10.7836,24.4718 10.5126,24.2008 10.5126,23.8678 L10.5126,21.4128 C10.5126,21.0798 10.7836,20.8098 11.1166,20.8098 C11.4496,20.8098 11.7206,21.0798 11.7206,21.4128 L11.7206,23.2638 L29.4276,23.2638 C29.7606,23.2638 30.0316,23.5348 30.0316,23.8678 C30.0316,24.2008 29.7606,24.4718 29.4276,24.4718" id="Fill-4" fill="#231F20" class="jsx-1156968711">
                            </path>
                            <path d="M14.4169,27.2785 C14.4169,28.5785 13.3629,29.6325 12.0629,29.6325 C10.7629,29.6325 9.7089,28.5785 9.7089,27.2785 C9.7089,25.9785 10.7629,24.9245 12.0629,24.9245 C13.3629,24.9245 14.4169,25.9785 14.4169,27.2785" id="Fill-6" fill="#231F20" class="jsx-1156968711">
                            </path>
                            <path d="M30.2723,27.2785 C30.2723,28.5785 29.2183,29.6325 27.9183,29.6325 C26.6183,29.6325 25.5643,28.5785 25.5643,27.2785 C25.5643,25.9785 26.6183,24.9245 27.9183,24.9245 C29.2183,24.9245 30.2723,25.9785 30.2723,27.2785" id="Fill-8" fill="#231F20" class="jsx-1156968711">
                            </path>
                          </svg>
                        </div>

                        <span class='cart-count-icon-count'>0</span>

                      </div>

                    </div>
                  </button>
                </li>

              </ul>

            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default App;