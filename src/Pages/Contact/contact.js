import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_qfsob0k', 'template_mpd3u68', form.current, 'x3kwHWrqpFQSBU80s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <>
    <div className="container ">
    <div className="row row-cols-1 row-cols-md-4 g-4 card-row">
        <div className="col">
            <div className="card-contact h-100">
                <div className="card-body text-center">
                    <i className="bi bi-buildings-fill"></i>
 
                  <h5 className="contact-card-title">Our Address</h5>
                  <p className="contact-card-text"><a href="https://maps.app.goo.gl/mm9hMZQPeWbXsHUHA" target="_blank" rel="noopener noreferrer">Nuesa Secreteriat, Old Engineering Auditorium, College of Engineering, NorthCore, Joseph Sarwuan Tarka University Makurdi, Benue State.</a></p>            </div>
              </div>
        </div>
        <div className="col">
            <div className="card-contact h-100">
                <div className="card-body text-center">
                  <i className="bi bi-phone-vibrate-fill"></i>
                  <h5 className="contact-card-title">Our Contact</h5>
                  <p className="contact-card-text"><a href="tel:+2349131978979" target="_blank" rel="noopener noreferrer">091-3197-8979</a></p>
                </div>
              </div>
        </div>
        <div className="col">
            <div className="card-contact h-100">
                <div className="card-body text-center">
                  <i className="bi bi-envelope-at-fill"></i>
                  <h5 className="contact-card-title">Our  Mail</h5>
                  <p className="contact-card-text"><a href="mailto:nuesajostum@gmail.com?subject=Feedback & Inquiries" target="_blank" rel="noopener noreferrer">Nuesajostum@gmail.com</a></p>
                </div>
              </div>
        </div>
        <div className="col">
            <div className="card-contact h-100">
                <div className="card-body text-center">
                  <i className="bi bi-facebook"></i>
                  <h5 className="contact-card-title">Our Facebook Page</h5>
                  <p className="contact-card-text"><a href="https://www.facebook.com/profile.php?id=100089045912644" target="_blank" rel="noopener noreferrer">Follow our Official facebook page to get our latest updates.</a></p>
                </div>
              </div>
        </div>
    </div>
</div>
<section className="bg-primary contact-wrapper">
    <div className="container py-5 back-container">
        <div className="row row-cols-1 row-cols-md-2 g-4 ">
            <form className="col" ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Enter Your Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="user_name"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Enter Email</label>
                    <input type="email" name="user_email"  className="form-control" id="exampleFormControlInput1"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>   
                  <div className="mb-3">
                    <button className="btn btn-primary c-btn" type="submit">Send..</button>
                  </div>
            </form>
            <div className="col contact-text-card" data-aos="zoom-in-up">
                <p className="text-contact">We Value Your Opinion</p> 
                <div className="mt-3">
                      <p>We always love to connect with our Students</p>
                </div>
                <div className="mt-3">
                  <p>The Association will really love to hear from you. Please kindly tell us what you think we are doing right,
                    what we are doing wrong and what we could do even better – all for the betterment of the image of our dear
                    association and the upliftment of education in Engineering. There's no NUESA without You !
                    Thank you.</p>
                </div>
               
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Contact