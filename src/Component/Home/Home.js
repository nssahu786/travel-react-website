import React from 'react'
import './Home.css';

export default function Home() {
  return (
    <>
      {/* CAROUSEL SECTION START */}
      <section>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src="/images/1sweb.jpg" className="d-block w-100" alt="IMG1" height="550vh"/>
              <h1 className="cont">INFINITE-EDGE POOL</h1>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="/images/2sweb.jpg" className="d-block w-100" alt="img2" height="550vh"/>
              <h1 className="cont">AN ICONIC-SPA</h1>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="/images/3sweb.jpg" className="d-block w-100" alt="img3" height="550vh"/>
              <h1 className="cont">IN-HOUSE RESTAURENTS</h1>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section><br/><br/><br/><br/>
      {/* CAROUSEL SECTION END */}
      {/* EXPEREINCE THE LIFE SECTION START */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/1h.jpg" alt="img1" className="w-100"/>
              <p className="exp">Surrounded by scenic beauty and attractive tourist attractions we make<br/>it convenient for you to visit all the beautiful places with our inhouse<br/>guide. We can also help you arrange transport facilities for an easier<br/>commute to nearby places.</p>
              <a href="/about">
                <button className="boton">KNOW MORE</button>
              </a>
            </div>
            <div className="col-md-6">
              <h2 className="topic">Experience the Life of Mykonos City</h2>
              <p className="para"><b>We will help you experience Mykonos life in its true sense.<br/>From living among the residents to eating authentic delicacies<br/>you are sure to walk home with memories and wonderful moments.</b></p><br/><br/>
              <img src="/images/2h.jpg" alt="img3" className="w-100"/>
            </div>
          </div>
        </div>
      </section><br/><br/><br/>
      {/* EXPEREINCE THE LIFE SECTION END */}
      {/* AMENITIES & FACILITIES SECTION START */}
      <section>
        <div className="container">
          <div className="row">
            <h1 className="part">Ameneties & Facilities</h1>
          </div>
          <div className="row">
            <div className="col-md-10">
              <p className="text">If you are looking for a relaxing, refreshing and rejuvenating experience<br/>altogether, we offer all of that under one roof.</p>
            </div>
            <div className="col-md-2">
              <a href="/ameneties">
                <button className="bot">VIEW ALL</button>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src="/images/1a.jpg" alt="img5" className="w-100 poto joto"/>
              <h2 className="mod1">An Infinite-edge Pool</h2>
              <p className="mod2">Experience the joy of swimming in our infinity-edge pool that gives you a nice picturesque view.</p>
              <a href="/about">
                <button className="read">READ MORE</button>
                <hr/>
              </a>
            </div>
            <div className="col-md-4">
              <img src="/images/2a.jpg" alt="img6" className="w-100 poto2 joto"/>
              <h2 className="mod1">An Iconic Spa</h2>
              <p className="mod2">Set forth on an exquisite wellness journey to refresh, re-energize and rejuvenate at our iconic spa.</p>
              <a href="/about">
                <button className="read">READ MORE</button>
                <hr/>
              </a>
            </div>
            <div className="col-md-4">
              <img src="/images/3a.jpg" alt="img7" className="w-100 poto2 joto"/>
              <h2 className="mod1">In-house Restaurants</h2>
              <p className="mod2">We have three in-house restaurants and more for offering different cuisines that you can choose from.</p>
              <a href="/about">
                <button className="read">READ MORE</button>
                <hr/>
              </a>
            </div>
          </div>
        </div>
      </section><br/><br/><br/>
      {/* AMENITIES & FACILITIES SECTION END */}
      {/* OUR INSIDE PICTURES SECTION START */}
      <section>
        <div className="container">
          <div className="row">
            <h1 className="inside">Our Inside Pictures</h1>
            <p className="lower">Take a look at some pretty pictures captured in and around our premises.</p>
          </div><br/><br/><br/>
          <div className="row">
            <div className="col-md-5">
              <img src="/images/4a.jpg" alt="img1" className="w-100"/><br/><br/>
              <img src="/images/4b.jpg" alt="img2" className="w-100"/>
            </div>
            <div className="col-md-7">
              <img src="/images/4c.jpg" alt="img3" className="w-100 h-100 phot1"/>
            </div>
          </div><br/>
          <div className="row">
            <div className="col-md-7">
              <img src="/images/5a.jpg" alt="img4" className="w-100 h-100 phot1"/>
            </div>
            <div className="col-md-5">
              <img src="/images/5b.jpg" alt="img5" className="w-100 phot1"/><br/><br/>
              <img src="/images/5c.jpg" alt="img6" className="w-100"/>
            </div>
          </div>
        </div>
      </section><br/><br/><br/><br/><br/><br/>
      {/* OUR INSIDE PICTURES SECTION END */}
      {/* OUR GUEST OPINION SECTION - 1 START */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <h1 className="inside">What Our Guests Say</h1>
            <p className="lower">We take pride in serving our guests with the best experience. Read what they say.</p>
          </div>
        </div>
      </section><br /><br /><br />
      {/* OUR GUEST OPINION SECTION - 1 END */}
      {/* OUR GUEST OPINION SECTION - 2 START */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i><br/><br/>
              <p className="comment">"Proin nulla mauris et volutpat adipiscing suspendisse vehicula blandit sagittis orci etiam morbi elit etiam semper eu lacus pretium hac nisl leo amet ullamcorper."</p>
                <div className="row">
                  <div className="col-md-1">
                    <img src="/images/7a.jpg" alt="img1" className="test1"/>
                  </div>
                  <div className="col-md-11">
                    <p className="test2">EMILY HUNT</p>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i><br/><br/>
              <p className="comment">"Proin nulla mauris et volutpat adipiscing suspendisse vehicula blandit sagittis orci etiam morbi elit etiam semper eu lacus pretium hac nisl leo amet ullamcorper."</p>
                <div className="row">
                  <div className="col-md-1">
                    <img src="/images/7b.jpg" alt="img1" className="test1"/>
                  </div>
                  <div className="col-md-11">
                    <p className="test2">MORGAN JONATHAN</p>
                  </div>
                </div>
            </div>
          </div><br/><br/>
          <div className="row">
            <div className="col-md-6">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i><br/><br/>
              <p className="comment">"Proin nulla mauris et volutpat adipiscing suspendisse vehicula blandit sagittis orci etiam morbi elit etiam semper eu lacus pretium hac nisl leo amet ullamcorper."</p>
                <div className="row">
                  <div className="col-md-1">
                    <img src="/images/7c.jpg" alt="img1" className="test1"/>
                  </div>
                  <div className="col-md-11">
                    <p className="test2">JULIE ROBINSON</p>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i><br/><br/>
              <p className="comment">"Proin nulla mauris et volutpat adipiscing suspendisse vehicula blandit sagittis orci etiam morbi elit etiam semper eu lacus pretium hac nisl leo amet ullamcorper."</p>
                <div className="row">
                  <div className="col-md-1">
                    <img src="/images/7d.jpg" alt="img2" className="test1"/>
                  </div>
                  <div className="col-md-11">
                    <p className="test2">JAMES BROOK</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      </section><br/><br/><br/><br/>
      {/* OUR GUEST OPINION SECTION - 2 END */}
    </>
  )
}
