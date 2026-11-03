import "./Contact.css";

function Contact() {
  return (
    <div className="contact">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for your car rental needs.</p>
      </div>

      <div className="contact-content">

        <div className="contact-box">
          <h2>Get In Touch</h2>

          <div className="contact-item">
            <h3>📍 Address</h3>
            <p>
               Drive Nest Car Rentals,
               123 rs puram,<br />
              Coimbatore, Tamil Nadu
            </p>
          </div>

          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>+91 9384350331</p>
          </div>

          <div className="contact-item">
            <h3>✉️ Email</h3>
            <p>info@carrental.com</p>
          </div>

          <div className="contact-item">
            <h3>🕐 Working Hours</h3>
            <p>Monday - Sunday : 24 Hours</p>
          </div>
        </div>

        <div className="contact-box">
          <h2>Book Your Car</h2>
          <p>
            Looking for a comfortable and reliable car?
            Contact us today and book your perfect car.
          </p>

          <a href="tel:+919876543210" className="call-btn">
            📞 Call Us
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            💬 WhatsApp Us
          </a>
        </div>

      </div>

    </div>
  );
}

export default Contact;