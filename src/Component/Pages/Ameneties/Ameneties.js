import React from 'react'
import './Ameneties.css';

export default function Ameneties() {
  return (
    <>
        {/* BANNER SECTION START */}
            <section>
                <div class="container-fluid banner1">
                    <div class="row">
                        <div class="col-md-4">
                            <h1 class="ro1">Amenities &<br/>Facilities</h1>
                        </div>
                        <div class="col-md-8"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <p class="ro2"><b>We do not give you just rooms to stay. We give you an environment so you can<br/>experience the best while on a holiday with us. Walk into our hotel and enjoy a<br/>refreshing, rejuvenating, day-off with us.</b></p>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                </div>
            </section><br/><br/><br/><br/>
        {/* BANNER SECTION END */}
        {/* AMENITIES & FACILITIES SECTION START */}
            <section>
                <div class="container">
                    <div class="row">
                        <h1 class="part">Ameneties & Facilities</h1>
                    </div>
                    <div class="row">
                        <div class="col-md-10">
                            <p class="text">Cursus tempus, tincidunt quis sem sapien id non eget sed in consequat tellus<br/>phasellus orci in semper elit porttitor eget metus.</p>
                        </div>
                        <div class="col-md-2">
                            <a href="/ameneties">
                                <button class="bot">VIEW ALL</button>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <img src="/images/1a.jpg" alt="img1" class="w-100 poto joto"/>
                            <h2 class="mod1">An Infinite-edge Pool</h2>
                            <p class="mod2">Experience the joy of swimming in our infinity-edge pool that gives you a nice picturesque view.</p>
                            <a href="/ameneties">
                                <button class="read">READ MORE</button>
                                <hr/>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <img src="/images/2a.jpg" alt="img2" class="w-100 poto2 joto"/>
                            <h2 class="mod1">An Iconic Spa</h2>
                            <p class="mod2">Set forth on an exquisite wellness journey to refresh, re-energize and rejuvenate at our iconic spa.</p>
                            <a href="/ameneties">
                                <button class="read">READ MORE</button>
                                <hr/>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <img src="/images/3a.jpg" alt="img3" class="w-100 poto2 joto"/>
                            <h2 class="mod1">In-house Restaurants</h2>
                            <p class="mod2">We have three in-house restaurants and more for offering different cuisines that you can choose from.</p>
                            <a href="/ameneties">
                                <button class="read">READ MORE</button>
                                <hr/>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <img src="/images/1d.jpg" alt="img1" class="w-100 poto2 moto"/>
                            <h2 class="mod1">Deep Soaking Bath-tub</h2>
                            <p class="mod2">Take a dip into these special bath-tubs to soak into a refreshing vacation mode that you’ve wanted.</p>
                            <a href="/ameneties">
                                <button class="read">READ MORE</button>
                                <hr/>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <img src="/images/1e.jpg" alt="img3" class="w-100 poto2 moto"/>
                            <h2 class="mod1">Guest Computer & WiFi</h2>
                            <p class="mod2">We offer special computers and WiFi for guests who’d like to stay connected while on vacation.</p>
                            <a href="/amaneties">
                                <button class="read">READ MORE</button>
                                <hr/>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <img src="/images/1f.jpg" alt="img3" class="w-100 poto2 moto"/>
                            <h2 class="mod1">24 Hour Concierge</h2>
                            <p class="mod2">We have three in-house restaurants which are offering different cuisines that you can choose from.</p>
                            <a href="/ameneties">
                                <button class="read">READ MORE</button>
                                <hr/>
                            </a>
                        </div>
                    </div>
                </div>
            </section><br/><br/><br/>
        {/* AMENITIES & FACILITIES SECTION END */}
        {/* AMENITIES GALLERIES SECTION START */}
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="/images/g1.jpg" alt="img1" class="photo1"/>
                        </div>
                        <div class="col-md-3">
                            <img src="/images/g2.jpg" alt="img2" class="photo1"/>
                        </div>
                        <div class="col-md-6">
                            <img src="/images/g3.jpg" alt="img3" class="photo2"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <img src="/images/g4.jpg" alt="img1" class="photo3"/>
                        </div>
                        <div class="col-md-3">
                            <img src="/images/g5.jpg" alt="img2" class="photo4"/>
                        </div>
                        <div class="col-md-3">
                            <img src="/images/g6.jpg" alt="img3" class="photo5"/>
                        </div>
                    </div>
            </div>
            </section><br/><br/><br/><br/>
        {/* AMENITIES GALLERIES SECTION END */}    
    </>
  )
}
