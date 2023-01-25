import React from 'react'
import './Rooms.css';

export default function Rooms() {
  return (
    <>
        {/* BANNER SECTION START */}
            <section>
                <div className="container-fluid room">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="ro1">Rooms &<br/>Accomodations</h1>
                        </div>
                        <div className="col-md-8"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="ro2"><b>If you are looking for a home away from home, just walk in here. You can get<br/>both, an incredible and relaxing experience while you are on a holiday.<br/> Take a closer look into the rooms we offer and pick the one for you.</b></p>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section><br/><br/><br/><br/>
        {/* BANNER SECTION END */}
        {/* COME & STAY SECTION START */}
            <section>
                <div className="container">
                    <div className="row">
                        <h1 className="part">Come & Stay With Us</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <p className="text">Pick any of our hotel rooms to experience the delightful decor,<br/>complemented with modern amenities for a comfortable stay.</p>
                        </div>
                        <div className="col-md-2">
                            <a href="/rooms">
                                <button className="bot">VIEW ALL</button>
                            </a>
                        </div>
                    </div><br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/r1.jpg" alt="img1" className="w-100"/>
                            <h2 className="mod1">Double Deluxe Room</h2>
                            <p className="mod2">Our double deluxe rooms are complemented with modern and luxurious amenities for a wonderful stay.</p>
                            <a href="/rooms">
                                <button className="read">READ MORE</button>
                                <hr/>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/r2.jpg" alt="img2" className="w-100"/>
                            <h2 className="mod1">Double Club Room</h2>
                            <p className="mod2">We offer 15 club rooms designed with a vibrant touch to enhance your spirits for a happening holiday.</p>
                            <a href="/rooms">
                                <button className="read">READ MORE</button>
                                <hr/>
                            </a>
                        </div>
                    </div><br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/r3.jpg" alt="img2" className="w-100"/>
                            <h2 className="mod1">Standard Suite</h2>
                            <p className="mod2">If you are looking for a room that gives you both space and luxury at a reasonable price, this is the one for you.</p>
                            <a href="/rooms">
                                <button className="read">READ MORE</button>
                                <hr/>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/r4.jpg" alt="img4" className="w-100"/>
                            <h2 className="mod1">Executive Suite</h2>
                            <p className="mod2">Experience luxury in style in our executive suites. These rooms also give you a beautiful view of the city.</p>
                            <a href="/rooms">
                                <button className="read">READ MORE</button>
                                <hr/>
                            </a>
                        </div>
                    </div><br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/r5.jpg" alt="img1" className="w-100"/>
                            <h2 className="mod1">Grand Suite</h2>
                            <p className="mod2">This is the second-highest ranked room in our hotel that offers luxury with the most advanced amenities.</p>
                            <a href="/rooms">
                                <button className="read">READ MORE</button>
                                <hr/>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/r4.jpg" alt="img2" className="w-100"/>
                            <h2 className="mod1">Presedential Suite</h2>
                            <p className="mod2">Wish to live like a king? Here’s the top presidential suite where you can spend the best days of your life.</p>
                            <a href="/rooms">
                                <button className="read">READ MORE</button>
                                <hr/>
                            </a>
                        </div>
                    </div>
                </div>
            </section><br/><br/><br/>
        {/* COME & STAY SECTION END */}
         
    </>
  )
}
