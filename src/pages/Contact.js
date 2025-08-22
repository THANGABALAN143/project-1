import React from 'react';
import './Contact.css';

 function Contact() {
  return (
    <div className="contact-container" style={{ padding: '30px', width:'100', textAlign: 'center' }}>
      <h2>Contact Us</h2>
      <p>📞 Phone: <a href="tel:+918695847707">+91-8695847707</a></p>
      <p>📧 Email: <a href="mailto:thangabalan18@gmail.com">thangabalan18@gmail.com</a></p>
      <p>💬 WhatsApp: <a href="https://wa.me/918695847707" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
<iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.6650317212784!2d80.02289857483832!3d12.800241587499617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f758acacfd25%3A0xcf6bc3cdf295fd5b!2sVallal%20Pari%20St%2C%20Maraimalai%20Nagar%2C%20Tamil%20Nadu%20603203!5e0!3m2!1sen!2sin!4v1751881513652!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border:0}}
        allowFullScreen="true"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    
  );
}

export default Contact;

