import React from 'react';
import './WhyPeopleChose.css'
const WhyPeopleChose = () => {
        return (
                <div>
                        <div className="p-lg-5 m">
                       <div className="p-lg-4">
                       <h1>WHY PEOPLE CHOOSE US</h1> 
                       <p>Clients’ Most Popular Choise</p>
                       </div>
                       <div className="row">
                           <div className="col-lg-4 align-items-center justify-content-center d-flex flex-column p-lg-4">
                                <div>
                                <h3>30,000 Restaurants Menu</h3>
                                <p>We’re working with many restaurants in your city to put food all in one place.</p>
                                </div>
                                <div>
                                <h3>Easy Ordering by Phone</h3>
                                <p>This allows you to order quickly and easily. Accessible at any time.</p>
                                </div>
                                <div>
                                <h3>Free Mobile Application</h3>
                                <p>Mobile App allows you to choose restaurant, view price and check order.</p>
                                </div>
                           </div>
                           <div className="col-lg-4">
                                <img className="img-fluid" src="https://i.ibb.co/xSYX76F/phone-img.png" />
                           </div>
                           <div className="col-lg-4 align-items-center justify-content-center d-flex flex-column p-lg-4">
                                <div>
                                <h3>Easy Online Ordering</h3>
                                <p>We’re working with many restaurants in your city to put food all in one place.</p>
                                </div>
                                <div>
                                <h3>100% positive feedbacks</h3>
                                <p>This allows you to order quickly and easily. Accessible at any time.</p>
                                </div>
                                <div>
                                <h3>Fast Guaranteed Delivery</h3>
                                <p>We take responsibility for making sure that order are delivered to you safely.</p>
                                </div>
                           </div>
                       </div>
              </div>
                        <div className="footer-top p-lg-5">
                           <div className="p-lg-3">
                           <h1>Want Coupons or Deep Thoughts About Food? Get Our Weekly Email:</h1>
                           
                           </div>
                           <div className="p-lg-3">
                           <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Eenter your email and sub" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <div class="input-group-append">
                                <button class="btn btn-outline-dark" type="button" id="button-addon2">Subscriobe now</button>
                                </div>
                         </div>
                           </div>

                        </div>
         </div>
        );
};

export default WhyPeopleChose;