import React from 'react'
import './DarkNavBar.css'

function DarkNavBar() {
  return (
    <div>
          <div className='container-fluid'>

              <nav class="navbar navbar-expand-lg navbar-div1">
                  <a class="navbar-brand" href="#"><img src={logo} alt="" srcset="" /></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse " id="navbarNavDropdown">
                      <ul class="navbar-nav nav-ul1 ml-auto ">
                          <li class="nav-item active">
                              <a class="nav-link nav-text1" href="#">Home </a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link nav-text1" href="#">About Us</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link nav-text1" href="#">Services</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link nav-text1" href="#">Client Reviews</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link nav-text1" href="#">Contact Us</a>
                          </li>
                      </ul>
                  </div>

                  <div className='d-md-flex d-none nav-mainbtns-div1  '>
                      <div>
                          <a href="" > <div className='nav-btn-1 '>Book a Call Back</div></a>
                      </div>
                      <div>
                          <a href="" > <div className='nav-btn-2'>Download App</div></a>
                      </div>
                  </div>
              </nav>

          </div>
    </div>
  )
}

export default DarkNavBar
