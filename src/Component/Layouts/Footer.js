import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <>
      {/* FOOTER SECTION START */}
        <footer>
          {/* FOOTER - 1 SECTION START */}
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src="/images/2b.png" alt="img1" className="besty"/>
              </div>
              <div className="col-md-4">
                <img src="/images/2d.png" alt="img2" className="besty"/>
              </div>
              <div className="col-md-4">
                <img src="/images/2c.png" alt="img3" className="besty"/>
              </div>
            </div>
            <div className="row line">
              <div className="col-md-4">
                <img src="/images/2e.png" alt="img1" className="besty" />
              </div>
              <div className="col-md-4">
                <img src="/images/2f.png" alt="" className="besty" />
              </div>
              <div className="col-md-4">
                <img src="/images/2g.png" alt="" className="besty" />
              </div>
            </div>
          </div><br/><br/><br/><br/>
          {/* FOOTER - 1 SECTION END */}
          {/* FOOTER - 2 SECTION START */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <h4 className="hdd">Travel & Tourism</h4><br/>
                <p className="hpp">Gravida maecenas mi iaculis non,<br/>posuere mattis urna, ac risus sit<br/>porta nunc nibh dictum proin leo<br/> dolor sed bibendum mi.</p>
              </div>
              <div className="col-md-3">
                <h4 className="hdd">Hotel</h4><br/>
                <p className="hpp">About Us<br/>Reviews<br/>Get Directions<br/>Nearby Visits<br/>Contact Us</p>
              </div>
              <div className="col-md-3">
                <h4 className="hdd">Customer Help</h4><br/>
                <p className="hpp">Guest Support<br/>Guest Feedback<br/>FAQs<br/> Offers<br/>Location</p>
              </div>
              <div className="col-md-3">
                <h4 className="hdd">Contact</h4><br/>
                <p className="hpp">Travel & Tourism,<br/> 2855 Nelsonlines Rd,GandhiNagar,<br/>New Delhi (DL),<br/>40107<br/><br/>
                  <i className="fab fa-linkedin fa-2x icon"></i>&nbsp;&nbsp;
                  <i className="fab fa-facebook-square fa-2x icon"></i>&nbsp; &nbsp;
                  <i className="fab fa-twitter fa-2x icon"></i>&nbsp; &nbsp;
                  <i className="fab fa-instagram fa-2x icon"></i>&nbsp; &nbsp;</p>
              </div>
            </div>
          </div><br/><br/><br/>
          {/* FOOTER - 2 SECTION END */}
          {/* FOOTER - 3 SECTION START */}
          <div className="container-fluid">
            <div className="row foot">
              <p className="foo1">123 Fifth Avenue, NY 10160, New Delhi, India | Phone: 91+ 78693931095 | Email: contactnishant360@gmail.com</p>
              <p className="foo2">Copyright © 2022 Outdoor Adventure</p>
            </div>
          </div>
          {/* FOOTER - 3 SECTION END */}
        </footer>
      {/* FOOTER SECTION START */}
    </>
  )
}
