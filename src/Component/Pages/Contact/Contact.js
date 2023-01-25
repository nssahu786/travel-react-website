import React from 'react'
import './Contact.css';
export default function Contact() {
  return (
    <>
        {/* BANNER SECTION START */}
            <section>
                <div class="container-fluid banner2">
                    <div class="row">
                        <div class="col-md-4">
                            <h1 class="ro1">Contact Us</h1>
                        </div>
                        <div class="col-md-8"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <p class="ro2"><b>Do you want to enquire about our pricing, current offers and arrangements we<br/>can help you with? Give us a call or send in your concerns through the form<br/> below.</b></p>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                </div>
            </section><br/><br/><br/><br/>
        {/* BANNER SECTION END */}
        {/* CONTACT FORM SECTION START */}
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h4 class="recep">Reception Office</h4>
                            <h2 class="mt-3 recep">2855 Nelsonville Rd, Boston, Massachusetts (MA), 40107</h2>
                            <h4 class="mt-5 recep">Reception Hours</h4>
                            <h2 class="mt-3 recep">7:30 AM - 11:00 PM</h2>
                            <h4 class="mt-5 recep">Contact</h4>
                            <h2 class="mt-3 recep">+1-123 456 7890</h2>
                            <h2 class="mt-3 recep">contact@info.com</h2>
                        </div>
                        <div class="col-md-6">
                            <form>
                                <div class="mb-3">
                                    <label for="Name" class="form-label">Name</label>
                                    <span class="star">*</span>
                                    <input type="text" class="form-control" id="text" placeholder="" name="Name"/>
                                </div>
                                <div class="mb-3 mt-2">
                                    <label for="email" class="form-label">Email</label>
                                    <span class="star">*</span>
                                    <input type="email" class="form-control" id="email" placeholder="" name="email"/>
                                </div>
                                <div class="mb-3 mt-2">
                                    <label for="Message" class="form-label">Message</label>
                                    <span class="star">*</span>
                                    <input type="text" class="form-control" id="text" placeholder="" name="Message"/>
                                </div>
                                <div class="mb-3 mt-2">
                                    <label for="comment">Subject</label>
                                    <span class="star">*</span>
                                    <textarea class="form-control" rows="3" id="comment" name="text"></textarea>
                                </div>
                                    <a href="/contact">
                                        <button class="bot">Submit</button>
                                    </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section><br/><br/><br/><br/>
        {/* CONTACT FORM SECTION END */}
    </>
  )
}
